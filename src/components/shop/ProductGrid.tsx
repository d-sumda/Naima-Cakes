import { ProductCard } from './ProductCard';
import type { Product } from './ProductCard';
import brownieBoxImage from '../../assets/brownie-box.png';
import cupcakeBoxImage from '../../assets/cupcake-box.png';

export const products: Product[] = [
    {
        id: 1,
        title: 'Artisan Cupcake Assortment',
        price: 24.00,
        description: 'A box of 4 elegant cupcakes featuring perfect swirls of vanilla, strawberry, lemon, and chocolate buttercream frosting.',
        image: cupcakeBoxImage,
        category: 'cupcakes',
        badge: 'Bestseller',
        badgeColor: 'bg-primary text-white'
    },
    {
        id: 3,
        title: 'Gourmet Fudge Brownies',
        price: 18.00,
        description: 'A box of rich, gourmet chocolate fudge brownies with sea salt and chocolate chunks.',
        image: brownieBoxImage,
        category: 'brownies',
        badge: 'New',
        badgeColor: 'bg-yellow-400 text-yellow-900'
    },
    {
        id: 2,
        title: 'Bespoke Custom Cake Design',
        price: 50.00,
        description: 'A fully personalized custom cake crafted to perfectly match your special occasion. Work with our master bakers to bring your unique vision to life, from flavors to intricate decorations. Price starts at £50 depending on size and complexity.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiFwQYYdrEh-bXOH-TY7SLbUky75yOQdRwfsk-I6LNjunD7dbvqMd_x7kTXMLysc_CMlpJbEnL6ERHyPt_MMUuKwM8-AMXnN-w2CA9Qya1nrly2qST_XtE7l0N6JJH6BPiAeqQVJXrGvITt1fmzdHT_rrPHGuZAGWqvSk6Gs-1EPYYJ7wYcGMNJagYQrI-4Nf7Hwvyymh12krMCfwtWYCarwScG9FiqWJ4HrKJ5FV7zdAiZTGUSNFg9BNut5ujRFWb_e9HFLjKlFY',
        category: 'custom'
    }
];

import { motion, AnimatePresence } from 'framer-motion';

export const ProductGrid = ({ displayProducts }: { displayProducts?: Product[] }) => {
    const itemsToRender = displayProducts || products;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
                {itemsToRender.map((product) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={product.id}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
