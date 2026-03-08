
import { ChefHat, PenTool, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Premium Ingredients',
        description: 'We source only the finest Belgian chocolates, Madagascar vanilla, and organic locally-sourced fruits.',
        icon: ChefHat
    },
    {
        title: 'Artisan Design',
        description: 'Our cake artists are masters of their craft, turning your vision into a stunning, edible reality with impeccable detail.',
        icon: PenTool
    },
    {
        title: 'Baked with Love',
        description: 'Every cake is baked fresh to order in small batches, ensuring the perfect taste and texture every single time.',
        icon: Heart
    }
];

export const FeaturesSection = () => {
    return (
        <section className="py-24 px-6 lg:px-10 relative overflow-hidden bg-[#fdf2f4] dark:bg-surface-dark/50">
            <div className="mx-auto max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Promise</span>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-main dark:text-white mb-6 leading-tight">
                        Why Choose Royal Cakes?
                    </h2>
                    <p className="text-lg text-text-subtle dark:text-gray-300 leading-relaxed">
                        We don't just bake cakes; we create edible memories. Every crumb is a testament to our passion for perfection and artisan craft.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group bg-white dark:bg-surface-dark p-10 rounded-3xl shadow-[0_4px_20px_rgba(230,76,115,0.05)] border border-primary/5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="h-20 w-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 transition-colors group-hover:bg-primary/10">
                                    <Icon size={36} className="text-primary" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4 text-text-main dark:text-white">{feature.title}</h3>
                                <p className="text-text-subtle dark:text-gray-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="absolute -bottom-10 right-0 text-[180px] font-serif font-black text-primary/[0.02] select-none pointer-events-none whitespace-nowrap">
                ROYAL CAKES
            </div>
        </section>
    );
};
