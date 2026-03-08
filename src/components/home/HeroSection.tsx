
import { ArrowRight, Check, Truck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import fullWidthHeroImage from '../../assets/Hero-cake.png';

export const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 md:px-6 py-24 lg:px-10">
            {/* Full Width Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-[85%_center] sm:bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${fullWidthHeroImage})` }}
                aria-label="Beautiful artisan cake in a chic bakery"
            />

            {/* Gradient Overlay for Text Readability - Faded Left to Right on Desktop, Top to Bottom on Mobile */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-black/90 sm:via-black/50 sm:to-transparent backdrop-blur-[2px] sm:backdrop-blur-none" />

            <div className="relative z-20 mx-auto max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start gap-6 sm:gap-8 max-w-lg md:max-w-2xl lg:max-w-3xl text-left mt-8 sm:mt-0"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
                        <Star size={14} className="fill-white" />
                        Premium Confectionery
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.1] sm:leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        Artisan Cakes for <br className="hidden sm:block" /><span className="italic text-primary-light">Every Occasion</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md font-medium">
                        Handcrafted with love and the finest ingredients. Create your dream cake or choose from our signature collection of sweet delights.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
                        <Link to="/shop" className="flex h-12 sm:h-14 w-full sm:min-w-[200px] items-center justify-center rounded-lg bg-primary px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-black/20 transition-all hover:bg-primary-dark hover:shadow-2xl hover:-translate-y-1">
                            Order Now
                        </Link>
                        <Link to="/custom-cakes" className="group flex flex-nowrap whitespace-nowrap h-12 sm:h-14 w-full sm:min-w-[200px] items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 px-6 sm:px-8 text-sm sm:text-base font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 shadow-lg">
                            Build Your Cake
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 shrink-0" />
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-8 text-sm font-semibold text-white/90 drop-shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Check size={16} className="text-white" />
                            </div>
                            <span>Fresh Ingredients</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Truck size={16} className="text-white" />
                            </div>
                            <span>Delicious Results</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
