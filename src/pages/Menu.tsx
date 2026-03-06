import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Menu1 from '../assets/Menu/1.png';
import Menu2 from '../assets/Menu/2.png';

export const Menu = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="flex-1 bg-[#fbf8f8] dark:bg-background-dark py-16 md:py-24 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-serif font-black text-primary/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
                MENU
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                            Discover Our Selection
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-text-main dark:text-white leading-tight mb-6">
                            The Sweet Menu
                        </h1>
                        <p className="text-lg text-text-subtle dark:text-gray-400">
                            Explore our artisan collection of passionately baked goods. From decadent celebration cakes to delicate everyday treats, everything holds a pinch of magic.
                        </p>
                    </motion.div>
                </div>

                {/* Creative Asymmetric Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Image 1 - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group cursor-pointer"
                        onClick={() => setSelectedImage(Menu1)}
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl z-10 border-8 border-white dark:border-surface-dark">
                            <img
                                src={Menu1}
                                alt="Menu Page 1"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        {/* Decorative floating badge */}
                        <div className="absolute -top-6 -left-6 z-20 hidden md:flex h-32 w-32 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-xl p-2 animate-[spin_20s_linear_infinite]">
                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible text-primary">
                                <path id="curve" d="M 50 10 a 40 40 0 1 1 -0.01 0" fill="transparent" />
                                <text width="100" className="text-[10.5px] font-bold uppercase tracking-[0.25em] fill-current">
                                    <textPath href="#curve">
                                        • FRESHLY BAKED • ARTISAN CRAFTED
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </motion.div>

                    {/* Image 2 - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative group cursor-pointer md:mt-16"
                        onClick={() => setSelectedImage(Menu2)}
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl z-10 border-8 border-white dark:border-surface-dark">
                            <img
                                src={Menu2}
                                alt="Menu Page 2"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 rounded-full p-2 transition-all shadow-lg"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={32} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                            className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Menu Zoomed View"
                                className="w-full h-full object-contain max-h-[90vh] rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};
