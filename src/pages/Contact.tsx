import { Send, Phone, Mail, HelpCircle, ChevronDown, Clock } from 'lucide-react';
import contactUsPoster from '../assets/contact-us-poster.png';
export const Contact = () => {
    return (
        <main className="flex-grow bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight text-text-main dark:text-white">
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-lg text-text-subtle dark:text-gray-400 max-w-2xl">
                            We'd love to hear from you about your dream cake. Whether it's a wedding, birthday, or just a Tuesday treat, let's make something sweet together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="px-4 md:px-10 pb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Inquiry Form */}
                    <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-sm border border-primary/10">
                        <h3 className="text-2xl font-serif font-bold mb-6 text-text-main dark:text-white">Send us a Message</h3>
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Name</span>
                                    <div className="relative">
                                        <input className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white h-12 px-4 transition-all" placeholder="Your full name" type="text" />
                                    </div>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Email</span>
                                    <div className="relative">
                                        <input className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white h-12 px-4 transition-all" placeholder="your@email.com" type="email" />
                                    </div>
                                </label>
                            </div>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Phone Number</span>
                                <div className="relative">
                                    <input className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white h-12 px-4 transition-all" placeholder="Your phone number" type="tel" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Event Date</span>
                                <div className="relative">
                                    <input className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white h-12 px-4 transition-all" type="date" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Message</span>
                                <textarea className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white min-h-[160px] p-4 transition-all resize-y" placeholder="Tell us about your event, flavors you love, or any design ideas..."></textarea>
                            </label>
                            <button className="mt-2 w-full md:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-all shadow-md active:scale-95 flex items-center justify-center gap-2" type="button">
                                <span>Send Inquiry</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info & FAQ */}
                    <div className="flex flex-col gap-10">
                        {/* Contact Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/10">
                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                                    <Phone size={20} />
                                </div>
                                <h4 className="font-bold text-lg mb-1 text-text-main dark:text-white">Phone</h4>
                                <p className="text-text-subtle dark:text-gray-400 text-sm mb-2">Mon-Fri from 8am to 5pm.</p>
                                <a className="text-primary font-semibold hover:underline" href="tel:+15550000000">+1 (555) 000-0000</a>
                            </div>
                            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/10">
                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                                    <Mail size={20} />
                                </div>
                                <h4 className="font-bold text-lg mb-1 text-text-main dark:text-white">Email</h4>
                                <p className="text-text-subtle dark:text-gray-400 text-sm mb-2">Friendly team is here to help.</p>
                                <a className="text-primary font-semibold hover:underline" href="mailto:hello@naimacakes.com">hello@naimacakes.com</a>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div>
                            <h3 className="text-xl font-serif font-bold mb-6 text-text-main dark:text-white flex items-center gap-2">
                                <HelpCircle className="text-primary" size={24} />
                                Common Questions
                            </h3>
                            <div className="space-y-4">
                                <details className="group bg-white dark:bg-surface-dark rounded-lg p-4 border border-primary/10 cursor-pointer">
                                    <summary className="flex justify-between items-center font-medium list-none text-text-main dark:text-white">
                                        <span>How far in advance should I order?</span>
                                        <span className="transition group-open:rotate-180 text-text-subtle">
                                            <ChevronDown size={20} />
                                        </span>
                                    </summary>
                                    <p className="text-text-subtle dark:text-gray-400 mt-3 text-sm leading-relaxed">
                                        We recommend booking at least 2-3 weeks in advance for custom cakes. For weddings, we suggest 3-6 months.
                                    </p>
                                </details>
                                <details className="group bg-white dark:bg-surface-dark rounded-lg p-4 border border-primary/10 cursor-pointer">
                                    <summary className="flex justify-between items-center font-medium list-none text-text-main dark:text-white">
                                        <span>Do you offer gluten-free options?</span>
                                        <span className="transition group-open:rotate-180 text-text-subtle">
                                            <ChevronDown size={20} />
                                        </span>
                                    </summary>
                                    <p className="text-text-subtle dark:text-gray-400 mt-3 text-sm leading-relaxed">
                                        Yes! We have a dedicated selection of gluten-free flavors. However, our kitchen processes wheat, so we cannot guarantee 100% cross-contamination free for severe allergies.
                                    </p>
                                </details>
                                <details className="group bg-white dark:bg-surface-dark rounded-lg p-4 border border-primary/10 cursor-pointer">
                                    <summary className="flex justify-between items-center font-medium list-none text-text-main dark:text-white">
                                        <span>Do you deliver?</span>
                                        <span className="transition group-open:rotate-180 text-text-subtle">
                                            <ChevronDown size={20} />
                                        </span>
                                    </summary>
                                    <p className="text-text-subtle dark:text-gray-400 mt-3 text-sm leading-relaxed">
                                        We offer delivery within a 25-mile radius of our boutique. Delivery fees are calculated based on distance and order size.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Info: Map & Hours */}
            <section className="border-t border-primary/10 bg-white dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 min-h-[400px]">
                    {/* Hours Column */}
                    <div className="p-10 md:p-16 flex flex-col justify-center bg-primary/5 dark:bg-primary/10 md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-text-main dark:text-white">
                            <Clock className="text-primary" size={28} />
                            Opening Hours
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center pb-2 border-b border-primary/10 border-dashed">
                                <span className="font-medium text-text-subtle dark:text-gray-300">Monday - Friday</span>
                                <span className="font-bold text-primary">8:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-primary/10 border-dashed">
                                <span className="font-medium text-text-subtle dark:text-gray-300">Saturday</span>
                                <span className="font-bold text-primary">9:00 AM - 5:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-primary/10 border-dashed">
                                <span className="font-medium text-text-subtle dark:text-gray-300">Sunday</span>
                                <span className="font-bold text-text-subtle">Closed</span>
                            </li>
                        </ul>
                        <div className="mt-8 p-4 bg-background-light dark:bg-background-dark rounded-lg border border-primary/20">
                            <p className="text-sm text-center text-text-subtle dark:text-gray-400">
                                <strong>Note:</strong> Consultations are by appointment only.
                            </p>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="md:col-span-2 relative min-h-[300px] w-full bg-gray-200 dark:bg-gray-800">
                        <img
                            alt="Map view showing location in city center"
                            className="absolute inset-0 w-full h-full object-contain object-center opacity-90 dark:opacity-80"
                            src={contactUsPoster}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};
