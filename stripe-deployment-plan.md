# Stripe Integration & Deployment Plan

This document outlines the architecture and deployment strategy for integrating Stripe into the Naima Cakes frontend when transitioning from the static UI prototype to a live service.

## Architecture Overview

**Never put Stripe Secret Keys in the React frontend.** Doing so exposes the keys to the public, allowing anyone to gain full control over the Stripe account. 

To securely integrate Stripe, a "Backend + Frontend" split architecture is required:

1.  **Frontend (React/Vite):** The user-facing website that runs in the browser. It displays the UI and asks the backend for data.
2.  **Backend (Node.js/Express):** A separate, secure server application that holds the `STRIPE_SECRET_KEY`, communicates directly with the Stripe API, and passes formatted data safely back to the frontend.

## 1. Stripe Product Management

Instead of hardcoding products in the frontend arrays (e.g., `ProductGrid.tsx`), all inventory management will happen entirely within the Stripe Dashboard:
*   **Create Products:** Add cakes, descriptions, prices, and upload high-resolution images (hosted by Stripe's CDN).
*   **Metadata:** Use Stripe's custom metadata fields to add categorizations (e.g., `category: "cupcakes"`, `badge: "Bestseller"`).

## 2. Backend Implementation (Node.js)

A lightweight Node.js server to handle API requests securely.

```javascript
// Example server.js
import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';

const app = express();
app.use(cors());

// Securely initialize Stripe using Environment Variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.get('/api/products', async (req, res) => {
    try {
        const products = await stripe.products.list({ active: true });
        const prices = await stripe.prices.list({ active: true });

        const formattedProducts = products.data.map(product => {
            const price = prices.data.find(p => p.product === product.id);
            return {
                id: product.id,
                title: product.name,
                description: product.description,
                image: product.images[0],
                price: price.unit_amount / 100, // Stripe handles currency in cents
                badge: product.metadata.badge,
                category: product.metadata.category
            };
        });

        res.json(formattedProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## 3. Frontend Implementation (React/Vite)

Update components like `ProductGrid.tsx` to dynamically fetch data from the new backend upon loading.

```typescript
// Example frontend fetch
import { useState, useEffect } from 'react';

export const ProductGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch from the deployed backend URL
        fetch('https://api.naimacakes.com/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // ... render logic
};
```

## 4. Hostinger Deployment Strategy

Since the Hostinger plan supports Node.js, the setup requires deploying two separate processes:

1.  **Deploying the Backend (Node.js):**
    *   Upload `server.js` and `package.json` to the Hostinger VPS/Node environment.
    *   Add `STRIPE_SECRET_KEY` to Hostinger's secure environment variables list.
    *   Run the server continuously (e.g., targeting a subdomain like `api.naimacakes.com`).
2.  **Deploying the Frontend (React):**
    *   Run `npm run build` locally in the Vite project.
    *   Upload the generated `dist/` folder to Hostinger's `public_html` directory for the primary domain (`naimacakes.com`).

*Alternative Consideration: Next.js merges the React frontend and serverless backend into a single deployable repository, which is an industry standard approach if choosing to migrate off Vite.*


------


That is a great approach for a small business! It entirely eliminates the need for you to build a custom backend database, saving an enormous amount of development time and maintenance.

Using Stripe as the single source of truth for inventory, pricing, and order management is a very popular architecture called a "headless setup."

Here is exactly how that workflow would look from backend to frontend, and why it works well:

1. Products & Pricing (Stripe Dashboard)
Instead of having your products hardcoded in Shop.tsx or in a traditional database, you would log into your Stripe Dashboard and create your products there (e.g., "Classic Vanilla Cake", "Dozen Cupcakes").

Stripe allows you to add images, descriptions, and set the price for each item.
It even handles inventory tracking. If you tell Stripe you only have 10 boxes of brownies to sell today, it will stop accepting orders when they sell out.
2. The Frontend (Your React App)
Instead of Shop.tsx reading a static products array like it does right now:

Your backend Node.js server would call stripe.products.list() to grab the live catalog from Stripe.
Your React app fetches that list from your Node server and renders the catalog dynamically.
Benefit: If you want to change the price of a cake or add a new seasonal flavor, you just do it in the Stripe Dashboard on your phone, and your website instantly updates without needing to push any code!
3. The Order Process
When someone clicks "Checkout":

Because the products live in Stripe, your checkout process becomes even simpler. You just pass the Stripe price_id to your backend checkout endpoint.
Stripe knows exactly what the item is, how much it costs, and generates the checkout page instantly.
4. Order Notifications & Fulfillment (Stripe Dashboard)
When a customer pays, the order immediately pops up in your Stripe Payments Dashboard.

Since you are using Stripe Checkout, you can configure Stripe to force the customer to provide their shipping address, phone number, and email.
You can manage the entire order fulfillment directly from the Stripe app on your phone.
You can even use the Stripe mobile app to get push notifications the second a new order is paid for, serving as your "kitchen ticket."
The Only Tricky Part: Custom Cakes
Using Stripe this way is flawless for fixed-price items in the shop (cupcakes, standard cakes, brownies).

However, your Custom Cake Builder generates dynamic prices based on thousands of potential combinations (size + filling + frosting + toppings). You cannot pre-create every possible custom cake combination as a product in the Stripe Dashboard.

How to handle Custom Cakes with this setup: For the custom cake, instead of passing a predefined price_id to Stripe, your Node.js backend uses Stripe's "Price Data" API to generate a temporary, custom-priced item on the fly just for that one specific checkout session.

You pass all the customizations (e.g., "3 Tiers, Vegan Frosting, Gold Leaf") into the description or metadata field of that custom Stripe item so it shows up on your Stripe receipt.