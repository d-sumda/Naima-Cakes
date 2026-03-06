import { useParams, Link } from 'react-router-dom';
import { products } from '../components/shop/ProductGrid';
import { ProductCard } from '../components/shop/ProductCard';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, StarHalf, ChevronLeft, Plus, Minus, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedFlavor, setSelectedFlavor] = useState('Classic Signature');
    const { addToCart } = useCart();

    // Find the product based on URL param
    const product = products.find(p => p.id === Number(id));

    // Fallback if product not found
    if (!product) {
        return (
            <main className="flex-1 flex flex-col items-center justify-center py-20">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <Link to="/shop" className="text-primary hover:underline flex items-center gap-2">
                    <ChevronLeft size={16} /> Back to Shop
                </Link>
            </main>
        );
    }

    return (
        <main className="flex-grow">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="mb-8 flex items-center text-sm text-text-muted dark:text-gray-400">
                    <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                    <span className="mx-2">/</span>
                    <Link className="hover:text-primary transition-colors" to="/shop">Shop</Link>
                    <span className="mx-2">/</span>
                    <span className="font-medium text-text-main dark:text-white truncate">{product.title}</span>
                </nav>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Product Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 relative group">
                            <img
                                alt={product.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                                src={product.image}
                            />
                            <button className="absolute top-4 right-4 p-3 bg-white/80 rounded-full text-text-main hover:text-primary hover:bg-white transition-colors backdrop-blur-sm dark:bg-black/50 dark:text-white dark:hover:bg-black/70 shadow-sm z-10">
                                <Heart size={20} />
                            </button>

                            {product.badge && (
                                <div className="absolute top-4 left-4 z-10 hidden sm:block">
                                    <span className={`${product.badgeColor} text-sm font-bold px-3 py-1.5 rounded-md shadow-sm`}>
                                        {product.badge}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Thumbnails (Static Placeholder for now) */}
                        <div className="grid grid-cols-4 gap-4">
                            <button className="aspect-square overflow-hidden rounded-lg border-2 border-primary ring-2 ring-primary/20 ring-offset-2 dark:ring-offset-background-dark block">
                                <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover block" />
                            </button>
                            <button className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-primary/50 transition-colors block">
                                <img src={product.image} alt="Thumbnail 2" className="w-full h-full object-cover block opacity-80 hover:opacity-100 transition-opacity" />
                            </button>
                            <button className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-primary/50 transition-colors bg-gray-100 dark:bg-white/5 flex items-center justify-center text-text-subtle">
                                <span className="font-medium text-sm">+2</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"
                    >
                        <div className="mb-6 border-b border-border-soft pb-6 dark:border-white/10">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h1 className="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-4xl font-serif">
                                    {product.title}
                                </h1>
                                <div className="flex flex-col sm:items-end">
                                    <p className="text-3xl font-bold text-primary">
                                        {product.category === 'custom' && <span className="text-lg text-text-muted font-normal block mb-1">Starts from</span>}
                                        £{product.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-4">
                                <div className="flex items-center">
                                    <Star className="text-yellow-400 fill-current w-5 h-5" />
                                    <Star className="text-yellow-400 fill-current w-5 h-5" />
                                    <Star className="text-yellow-400 fill-current w-5 h-5" />
                                    <Star className="text-yellow-400 fill-current w-5 h-5" />
                                    <StarHalf className="text-yellow-400 fill-current w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-text-muted dark:text-gray-400">4.8 (124 reviews)</span>
                                <span className="hidden sm:block h-4 w-px bg-border-soft dark:bg-white/20"></span>
                                <span className="text-sm font-medium text-green-600 dark:text-green-400">In Stock</span>
                            </div>
                        </div>

                        <div className="prose prose-sm text-text-subtle dark:text-gray-300 text-lg">
                            <p>{product.description}</p>
                            <p className="mt-4">Crafted with premium ingredients to enhance the depth of flavor. Each bite offers a perfect balance of texture, crafted to make your celebration memorable.</p>
                        </div>

                        {product.category === 'custom' ? (
                            <div className="mt-12 flex flex-col gap-4">
                                <Link to="/custom-cakes" className="w-full rounded-lg bg-primary py-4 flex items-center justify-center gap-2 text-base font-bold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all dark:ring-offset-background-dark">
                                    Create a Custom Cake
                                </Link>
                                <button className="hidden sm:flex items-center justify-center rounded-lg border border-border-soft bg-white py-3 px-6 text-text-main hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors dark:bg-surface-dark dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:ring-offset-background-dark w-full mt-2" type="button">
                                    <Heart size={20} className="text-text-muted mr-2" />
                                    Add to Wishlist
                                </button>
                            </div>
                        ) : (
                            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
                                {/* Flavor/Variation Selection */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-text-main dark:text-white">Flavor Variation</h3>
                                    <div className="mt-3 flex flex-wrap gap-3">
                                        {['Classic Signature', 'Salted Caramel', 'Double Chocolate'].map((flavor) => (
                                            <label key={flavor} className="cursor-pointer">
                                                <input
                                                    className="peer sr-only"
                                                    name="flavor"
                                                    type="radio"
                                                    checked={selectedFlavor === flavor}
                                                    onChange={() => setSelectedFlavor(flavor)}
                                                />
                                                <span className="flex items-center rounded-lg border border-border-soft bg-white px-4 py-2 text-sm font-medium text-text-main shadow-sm hover:bg-gray-50 peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary peer-checked:text-primary dark:bg-surface-dark dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:peer-checked:bg-primary/10 transition-colors">
                                                    {flavor}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity and Box Size */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-sm font-medium text-text-main dark:text-white mb-3">Box Size</h3>
                                        <div className="relative">
                                            <select className="w-full appearance-none rounded-lg border border-border-soft bg-white py-2.5 pl-4 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-surface-dark dark:border-gray-700 dark:text-white transition-colors cursor-pointer">
                                                <option>Standard Size</option>
                                                <option>Large Party Box (+£24)</option>
                                                <option>Event Size (+£60)</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
                                                <ChevronDown size={20} />
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-medium text-text-main dark:text-white mb-3">Quantity</h3>
                                        <div className="flex h-[42px] items-center rounded-lg border border-border-soft bg-white dark:bg-surface-dark dark:border-gray-700 overflow-hidden">
                                            <button
                                                className="flex h-full w-12 items-center justify-center text-text-muted hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                                type="button"
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            >
                                                <Minus size={18} />
                                            </button>
                                            <input
                                                className="h-full w-full border-0 bg-transparent text-center text-sm font-medium focus:ring-0 dark:text-white p-0 selection:bg-primary/20"
                                                min="1"
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                                            />
                                            <button
                                                className="flex h-full w-12 items-center justify-center text-text-muted hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                                type="button"
                                                onClick={() => setQuantity(quantity + 1)}
                                            >
                                                <Plus size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button
                                        className="flex-1 rounded-lg bg-primary py-3.5 flex items-center justify-center gap-2 text-sm font-bold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all dark:ring-offset-background-dark group"
                                        type="button"
                                        onClick={() => {
                                            addToCart({
                                                id: `prod-${product.id}-${selectedFlavor}`,
                                                type: 'product',
                                                title: product.title,
                                                price: product.price,
                                                quantity: quantity,
                                                image: product.image,
                                                options: [`Flavor: ${selectedFlavor}`, `Size: Standard Size`]
                                            });
                                        }}
                                    >
                                        <ShoppingBag size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                                        Add to Cart - £{(product.price * quantity).toFixed(2)}
                                    </button>
                                    <button className="hidden sm:flex items-center justify-center rounded-lg border border-border-soft bg-white px-6 text-text-main hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors dark:bg-surface-dark dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:ring-offset-background-dark" type="button">
                                        <Heart size={20} className="text-text-muted hover:text-primary transition-colors" />
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Details Accordion style text */}
                        <div className="mt-10 pt-2 border-t border-border-soft dark:border-gray-800 flex flex-col divide-y divide-border-soft dark:divide-gray-800">
                            <details className="group py-4">
                                <summary className="flex cursor-pointer items-center justify-between font-medium text-text-main dark:text-white list-none [&::-webkit-details-marker]:hidden outline-none">
                                    <span>Ingredients</span>
                                    <span className="transition-transform duration-300 group-open:-rotate-180 text-text-muted">
                                        <ChevronDown size={20} />
                                    </span>
                                </summary>
                                <div className="mt-4 text-sm text-text-subtle leading-relaxed">
                                    <p>Premium flours, free-range eggs, organic sugar, butter, vanilla extract, and specific flavorings based on selection. Contains: Wheat, Eggs, Milk. May contain traces of nuts.</p>
                                </div>
                            </details>

                            <details className="group py-4">
                                <summary className="flex cursor-pointer items-center justify-between font-medium text-text-main dark:text-white list-none [&::-webkit-details-marker]:hidden outline-none">
                                    <span>Storage Instructions</span>
                                    <span className="transition-transform duration-300 group-open:-rotate-180 text-text-muted">
                                        <ChevronDown size={20} />
                                    </span>
                                </summary>
                                <div className="mt-4 text-sm text-text-subtle leading-relaxed">
                                    <p>Store in an airtight container at room temperature for up to 4 days, or refrigerate for up to a week. For best texture, bring to room temperature before serving.</p>
                                </div>
                            </details>
                        </div>

                    </motion.div>
                </div>

                {/* Related Products Section */}
                <div className="mt-24 pt-12 border-t border-border-soft dark:border-white/10">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white font-serif">You Might Also Like</h2>
                        <Link to="/shop" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                            View all <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.filter(p => p.id !== product.id).slice(0, 4).map(recommendedProduct => (
                            <ProductCard key={recommendedProduct.id} product={recommendedProduct} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};
