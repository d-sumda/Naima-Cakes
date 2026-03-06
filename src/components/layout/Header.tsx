
import { User, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NaimaLogo from '../../assets/Naima-Cakes-Logo.svg';
import { useCart } from '../../context/CartContext';

export const Header = () => {
    const location = useLocation();
    const { cartItemCount } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getLinkClass = (path: string) => {
        const isActive = location.pathname === path;
        return `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-main dark:text-white hover:text-primary dark:hover:text-primary'}`;
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4 lg:px-10 transition-colors duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg overflow-hidden">
                        <img src={NaimaLogo} alt="Naima Cakes Logo" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white font-serif">Naima Cakes</h2>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    <Link className={getLinkClass('/')} to="/">Home</Link>
                    <Link className={getLinkClass('/portfolio')} to="/portfolio">Portfolio</Link>
                    <Link className={getLinkClass('/menu')} to="/menu">Menu</Link>
                    <Link className={getLinkClass('/shop')} to="/shop">Shop</Link>
                    <Link className={getLinkClass('/custom-cakes')} to="/custom-cakes">Custom Cakes</Link>
                    <Link className={getLinkClass('/about')} to="/about">About</Link>
                    <Link className={getLinkClass('/contact')} to="/contact">Contact</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link to="/shop" className="hidden sm:flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all hover:bg-primary-dark shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        Order Now
                    </Link>
                    <button className="hidden md:flex size-10 items-center justify-center rounded-full border border-primary/20 bg-white dark:bg-surface-dark text-text-main dark:text-white hover:bg-primary/5 transition-colors">
                        <User size={20} />
                    </button>
                    <Link to="/checkout" className="flex size-10 items-center justify-center rounded-full border border-primary/20 bg-white dark:bg-surface-dark text-text-main dark:text-white hover:bg-primary/5 transition-colors relative">
                        <ShoppingBag size={20} />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open mobile menu"
                        className="lg:hidden flex size-10 items-center justify-center rounded-full border border-primary/20 bg-white dark:bg-surface-dark text-text-main dark:text-white hover:bg-primary/5 transition-colors"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex flex-col bg-background-light dark:bg-background-dark px-6 py-4 lg:hidden h-[100dvh]"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                                <div className="flex size-10 items-center justify-center rounded-lg overflow-hidden">
                                    <img src={NaimaLogo} alt="Naima Cakes Logo" className="w-full h-full object-contain" />
                                </div>
                                <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white font-serif">Naima Cakes</h2>
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close mobile menu"
                                className="flex size-10 items-center justify-center rounded-full border border-primary/20 bg-white dark:bg-surface-dark text-text-main dark:text-white hover:bg-primary/5 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 flex-1 overflow-y-auto pb-8">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Portfolio', path: '/portfolio' },
                                { name: 'Menu', path: '/menu' },
                                { name: 'Shop', path: '/shop' },
                                { name: 'Custom Cakes', path: '/custom-cakes' },
                                { name: 'About', path: '/about' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-2xl font-serif font-bold transition-colors ${location.pathname === item.path
                                            ? 'text-primary'
                                            : 'text-text-main dark:text-white hover:text-primary dark:hover:text-primary'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="mt-8 pt-8 border-t border-border-soft dark:border-white/10 flex flex-col gap-4">
                                <Link
                                    to="/shop"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex h-14 items-center justify-center rounded-xl bg-primary px-6 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-dark"
                                >
                                    Order Now
                                </Link>

                                <div className="flex gap-4 justify-center mt-4">
                                    <Link
                                        to="/checkout"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white dark:bg-surface-dark text-text-main dark:text-white font-medium"
                                    >
                                        <ShoppingBag size={20} />
                                        Cart ({cartItemCount})
                                    </Link>
                                    <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white dark:bg-surface-dark text-text-main dark:text-white font-medium">
                                        <User size={20} />
                                        Account
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
