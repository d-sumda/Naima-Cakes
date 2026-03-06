import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Checkout = () => {
    const { items, updateQuantity, removeFromCart, cartTotal, cartItemCount } = useCart();

    const shipping = cartItemCount > 0 ? 15.00 : 0; // Flat shipping rate
    const taxEstimate = cartTotal * 0.08; // 8% tax example
    const orderTotal = cartTotal + shipping + taxEstimate;

    return (
        <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100">
            {/* Page Title */}
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-serif font-extrabold text-text-main dark:text-white tracking-tight mb-2">Your Shopping Cart</h1>
                <p className="text-text-subtle dark:text-gray-400">Review your customized treats before proceeding to checkout.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Column: Cart Items */}
                <div className="flex-1 space-y-6">
                    {/* Cart Header (Desktop) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-primary/20 dark:border-white/10 text-sm font-bold text-primary dark:text-gray-400 uppercase tracking-widest">
                        <div className="col-span-6">Product</div>
                        <div className="col-span-2 text-center">Price</div>
                        <div className="col-span-2 text-center">Quantity</div>
                        <div className="col-span-2 text-right">Total</div>
                    </div>

                    {items.length === 0 ? (
                        <div className="py-12 flex flex-col items-center justify-center text-center border-b border-primary/10 dark:border-white/10">
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                <ShoppingBag size={32} />
                            </div>
                            <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
                            <p className="text-text-subtle mb-6 max-w-md">Looks like you haven't added any sweet treats yet. Let's start filling it up!</p>
                            <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md">
                                Browse Shop
                            </Link>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="group relative flex flex-col md:grid md:grid-cols-12 md:items-center gap-6 py-6 border-b border-primary/10 dark:border-white/10">
                                <div className="col-span-6 flex gap-4">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-primary/20 dark:border-white/10 bg-white dark:bg-surface-dark shadow-sm">
                                        <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">
                                            <Link to={item.type === 'custom_cake' ? '/custom-cakes' : '/shop'} className="hover:text-primary transition-colors">
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <div className="mt-1 flex flex-col gap-1 text-sm text-text-subtle dark:text-gray-400">
                                            {item.options?.map((opt, idx) => (
                                                <span key={idx} className="inline-flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span> {opt}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center justify-between md:justify-center">
                                    <span className="md:hidden text-sm font-bold text-text-subtle">Price:</span>
                                    <span className="text-base font-semibold text-text-main dark:text-gray-200">£{item.price.toFixed(2)}</span>
                                </div>
                                <div className="col-span-2 flex items-center justify-between md:justify-center">
                                    <span className="md:hidden text-sm font-bold text-text-subtle">Quantity:</span>
                                    <div className="flex items-center rounded-lg border border-primary/20 dark:border-white/20 bg-white dark:bg-surface-dark shadow-sm">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                            className="px-2 py-1.5 text-text-subtle hover:text-primary transition-colors disabled:opacity-50"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-8 text-center text-sm font-bold text-text-main dark:text-white">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-2 py-1.5 text-text-subtle hover:text-primary transition-colors"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center justify-between md:justify-end">
                                    <span className="md:hidden text-sm font-bold text-text-subtle">Total:</span>
                                    <span className="text-lg font-bold text-primary dark:text-primary">£{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="absolute top-6 right-0 md:top-auto md:relative md:-ml-8 md:mt-0 text-text-subtle hover:text-red-500 transition-colors bg-white dark:bg-surface-dark md:bg-transparent rounded-full p-1"
                                    title="Remove item"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}

                    {/* Continue Shopping */}
                    <div className="pt-6">
                        <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:text-primary-dark transition-colors">
                            <ArrowLeft size={16} />
                            Continue Shopping
                        </Link>
                    </div>
                </div>

                {/* Right Column: Summary Sidebar */}
                <div className="w-full lg:w-[380px] flex-shrink-0">
                    <div className="sticky top-28 rounded-3xl bg-white dark:bg-surface-dark p-8 shadow-xl shadow-primary/5 border border-primary/10 dark:border-white/10">
                        <h2 className="text-2xl font-serif font-bold text-text-main dark:text-white mb-8 border-b border-primary/10 pb-4">Order Summary</h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm text-text-subtle dark:text-gray-400">
                                <span>Subtotal ({cartItemCount} items)</span>
                                <span className="font-semibold text-text-main dark:text-gray-200">£{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-text-subtle dark:text-gray-400">
                                <span>Estimated Shipping</span>
                                <span className="font-semibold text-text-main dark:text-gray-200">£{shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-text-subtle dark:text-gray-400">
                                <span>Tax Estimate</span>
                                <span className="font-semibold text-text-main dark:text-gray-200">£{taxEstimate.toFixed(2)}</span>
                            </div>

                            {/* Divider */}
                            <div className="my-4 h-px w-full bg-primary/10 dark:bg-white/10"></div>

                            <div className="flex justify-between items-end">
                                <span className="text-base font-bold text-text-main dark:text-white">Order Total</span>
                                <span className="text-3xl font-serif font-black text-primary">£{orderTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Discount Code Input */}
                        <div className="mb-8 flex flex-col gap-2">
                            <label className="sr-only" htmlFor="promo">Discount Code</label>
                            <div className="flex gap-2">
                                <input
                                    className="w-full rounded-lg bg-background-light dark:bg-black/20 border-primary/20 dark:border-white/10 px-4 py-3 text-sm text-text-main placeholder:text-text-subtle focus:border-primary focus:ring-primary dark:text-white"
                                    id="promo"
                                    placeholder="Gift card or discount code"
                                    type="text"
                                />
                                <button className="rounded-lg border border-primary/20 dark:border-white/20 px-6 py-3 text-sm font-bold text-text-subtle hover:bg-primary hover:text-white transition-colors">
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button
                            disabled={items.length === 0}
                            className="w-full rounded-xl bg-primary hover:bg-primary-dark text-white py-4 text-center font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                        >
                            Proceed to Checkout
                        </button>

                        <p className="mt-6 text-center text-xs font-medium text-text-subtle dark:text-gray-500 tracking-wide uppercase">
                            Secure Checkout • 100% Satisfaction
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
