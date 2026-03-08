
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import RoyalLogo from '../../assets/Royal-Cakes-Logo.svg';

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-surface-dark py-12 px-6 lg:px-10 border-t border-primary/10">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4 col-span-1 md:col-span-1">
                    <div className="flex items-center mb-4">
                        <div className="flex w-32 md:w-40 items-center justify-start overflow-hidden">
                            <img src={RoyalLogo} alt="Royal Cakes Logo" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <p className="text-sm text-text-subtle dark:text-gray-400">
                        Handcrafted with love and the finest ingredients for your special moments.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="text-text-subtle hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-text-subtle hover:text-primary transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-text-subtle hover:text-primary transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-text-main dark:text-white mb-4">Shop</h3>
                    <ul className="space-y-2 text-sm text-text-subtle dark:text-gray-400">
                        <li><Link to="/shop" className="hover:text-primary transition-colors">All Cakes</Link></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Brownies</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Cupcakes</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Custom Cakes</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-text-main dark:text-white mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-text-subtle dark:text-gray-400">
                        <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Ingredients</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-text-main dark:text-white mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm text-text-subtle dark:text-gray-400">
                        <li>123 Bakery Lane</li>
                        <li>Sweet Town, SW1 1AB</li>
                        <li>hello@sweetcrumb.com</li>
                        <li>(555) 123-4567</li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto max-w-7xl mt-12 pt-8 border-t border-primary/10 text-center text-sm text-text-subtle dark:text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Royal Cakes. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};
