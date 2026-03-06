
import { ArrowRight, Check, Truck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-image.png';

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden px-4 py-12 lg:py-24 lg:px-10 bg-gradient-to-br from-background-light to-[#f5ebed] dark:from-background-dark dark:to-surface-dark">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-10 left-0 w-72 h-72 bg-gold-accent/5 rounded-full blur-3xl -z-10" />

            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-6 lg:gap-10 order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white dark:bg-surface-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
                                <Star size={14} className="fill-primary text-primary" />
                                Premium Confectionery
                            </div>

                            <h1 className="text-5xl font-serif font-bold leading-[1.1] tracking-tight text-text-main dark:text-white sm:text-6xl lg:text-7xl">
                                Artisan Cakes for <br />
                                <span className="text-primary italic">Every Occasion</span>
                            </h1>

                            <p className="max-w-xl text-lg lg:text-xl text-text-subtle dark:text-gray-300 leading-relaxed">
                                Handcrafted with love and the finest ingredients. Create your dream cake or choose from our signature collection of sweet delights.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <Link to="/shop" className="flex h-14 min-w-[160px] items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-2xl hover:-translate-y-1">
                                Order Now
                            </Link>
                            <Link to="/custom-cakes" className="group flex h-14 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-white dark:bg-surface-dark border border-primary/20 px-8 text-base font-bold text-text-main dark:text-white transition-all hover:border-primary/50 hover:bg-primary/5 shadow-sm">
                                Build Your Cake
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-8 pt-6 text-sm font-medium text-text-subtle dark:text-gray-400">
                            <div className="flex items-center gap-3">
                                <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Check size={14} className="text-primary" />
                                </div>
                                <span>Fresh Ingredients</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Truck size={14} className="text-primary" />
                                </div>
                                <span>Delicious Results</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Imagery */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[540px]">
                            <div
                                className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-[0_32px_64px_-16px_rgba(230,76,115,0.2)] ring-1 ring-black/5 dark:ring-white/10 z-10 bg-cover bg-center"
                                style={{ backgroundImage: `url(${heroImage})` }}
                                aria-label="Hero Image of Naima Cakes"
                            />

                            {/* Decorative Badge */}
                            <motion.div
                                initial={{ opacity: 0, rotate: -30 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                                className="absolute -bottom-10 -left-10 z-20 hidden md:flex h-36 w-36 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-2xl p-2 ring-1 ring-black/5"
                            >
                                <div className="h-full w-full rounded-full border border-dashed border-primary/30 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="block text-[10px] font-bold text-primary uppercase tracking-tighter">ESTABLISHED</span>
                                        <span className="block text-2xl font-serif font-bold text-text-main dark:text-white">2023</span>
                                        <span className="block text-[10px] font-bold text-primary uppercase tracking-tighter">QUALITY</span>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-accent/10 rounded-full blur-2xl -z-10" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
