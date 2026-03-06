# Invoice: Naima Cakes React Redesign

**Rate:** £35.00 / hour

## 1. Project Architecture & Tooling 
**Estimated Time:** 3.5 Hours  
**Subtotal:** £122.50

*   **Initialization & Setup**: Bootstrapped the application using Vite, React, and TypeScript.
*   **Routing**: Designed a standard Multi-Page App (MPA) layout with `react-router-dom` incorporating sticky navigation and universal footers.
*   **Theme Configuration**: Abstracted the Stitch design tokens (Sweet Crumb Pink, Backgrounds, Typography) into a global `tailwind.config.js` to ensure pixel-perfect consistency across all views.
*   **Data Hydration Strategy**: Configured a scalable TypeScript mock-data structure for the cake catalog (`ProductGrid.tsx`) with strongly typed properties for easy backend migration.

## 2. Generated Features
**Estimated Time:** 6.0 Hours  
**Subtotal:** £210.00

*   **Landing Page**: Programmed the Hero Banner with image carousels, the interactive 'Category Grid', and the 'Why Choose Us' feature section.
*   **Dynamic Shop Grid**: Migrated the static HTML Store view into a dynamic React catalog with fully interactive Product Cards supporting hover state transformations and shopping cart actions.
*   **Category Sidebar & State Filtering**: Implemented a global state management system allowing users to filter products by category (All, Brownies, Cupcakes, Custom Cakes) instantly.
*   **Product Detail View (Dynamic Routing)**: Constructed the Product Detail component and wired up the `/shop/:id` route parameterized URL.
*   **Interactive Cart Components**: Built quantity selectors with mathematical boundaries (+/- bounds), size dropdowns, and dynamic pricing calculators.
*   **Native HTML Accordions**: Implemented smoothly animating `<details>` components for Product Ingredients and Storage Instructions.

## 3. Bug Resolution & Polish
**Estimated Time:** 2.5 Hours  
**Subtotal:** £87.50

*   **Framer Motion Ghosting Bug**: Diagnosed and resolved a critical React key-indexing and exit-animation flaw that caused filtered product cards to linger and duplicate on the screen and collapse grid layouts.
*   **Responsive Image Anchoring**: Refactored the absolute-positioned `background-image` configurations provided by Stitch into accessible, object-container `<img/>` elements to prevent height collapsing and image distortion on the Detail Page.
*   **Global Localization**: Audited the entire codebase to sweep for USD ($) character strings and localized all hard-coded values to GBP (£).
*   **IDE Linting Fixes**: Cleaned up legacy unexported `lucide-react` icon dependencies left over from the static HTML export.

## 4. Custom Cake Builder Implementation
**Estimated Time:** 4.5 Hours  
**Subtotal:** £157.50

*   **Multi-Step UI Architecture**: Designed a complex, three-stage wizard allowing users to configure and compile cake sizes, sponge flavors, artistic styling, and custom toppings.
*   **Persistent State Management**: Implemented reactive data structures to navigate form progression seamlessly and retain all user selections across components.
*   **Dynamic Summary Cart**: Programmed a persistent, sticky cart sidebar to calculate estimated item pricing dynamically and summarize configuration nodes in real-time.
*   **Interactive Visuals**: Integrated informative aesthetic components including the `Unsure about size?` graphical banner, cautionary alerts, and a dynamic cake preview thumbnail for the final cart stage.
*   **Cross-Selling Routing**: Redirected custom cake standard checkouts into the builder pathway, and engineered a "You Might Also Like" dynamic filtering suggestion view.

## 5. Final Enhancements & Social Integrations
**Estimated Time:** 2.0 Hours  
**Subtotal:** £70.00

*   **Instagram Embed Widget**: Injected and configured a dynamic Elfsight Instagram feed container into the Home screen and the main document `HEAD` script loader context.
*   **Marketing Event Links**: Transitioned the Home page hero Call-to-Action button from static content to an active React Router navigation event targeting the new Custom Builder path.

---

### **Total Estimated Time:** 18.5 Hours
### **Total Invoice Amount:** £647.50
