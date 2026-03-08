import { motion } from 'framer-motion';
import { ShoppingBag, SlidersHorizontal, Send, MessageCircle, CreditCard, Truck } from 'lucide-react';

const steps = [
    {
        title: "Select Items",
        description: "Choose from our shop including cupcakes, brownies, and custom cakes.",
        icon: ShoppingBag,
    },
    {
        title: "Customize Your Cake",
        description: "For custom cakes, go through the builder steps to get a rough idea and estimated price.",
        icon: SlidersHorizontal,
    },
    {
        title: "Submit Request",
        description: "Submit your request at checkout and your order details will be sent to us.",
        icon: Send,
    },
    {
        title: "Consultation",
        description: "We'll discuss order dates, additional design notes, and finalize prices.",
        icon: MessageCircle,
    },
    {
        title: "Confirm & Pay",
        description: "Confirm your order details and pay a 50% deposit to secure your booking.",
        icon: CreditCard,
    },
    {
        title: "Delivery or Collection",
        description: "Local delivery or collection on your confirmed date.",
        icon: Truck,
    }
];

export const HowToOrderSection = () => {
    return (
        <section className="bg-white dark:bg-surface-dark py-16 lg:py-24 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Process</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">How to Order</h2>
                    <p className="text-text-subtle dark:text-gray-300 text-lg">
                        Getting your dream cake is simple. Follow these steps and let us handle the rest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-primary/10 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-all hover:border-primary/30 relative"
                        >
                            <div className="absolute -top-4 -left-4 size-10 rounded-full bg-primary/10 text-primary font-bold font-serif flex items-center justify-center text-xl shadow-sm border border-white dark:border-surface-dark">
                                {index + 1}
                            </div>
                            <div className="size-20 rounded-full bg-white dark:bg-surface-dark shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/5">
                                <step.icon size={32} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-text-subtle dark:text-gray-400">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
