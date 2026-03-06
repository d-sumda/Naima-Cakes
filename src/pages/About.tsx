import { Leaf, Paintbrush, Heart, MessageSquare, ChefHat, Palette, Truck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <main className="flex-1 bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="px-4 py-12 md:py-20 lg:px-40">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
                        <div className="flex-1 space-y-6">
                            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">Est. 2015</span>
                            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                                Baking the world a <span className="text-primary">sweeter place</span>, one slice at a time.
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                What started as a humble kitchen experiment has blossomed into a sanctuary for cake lovers. At Naima Cakes, we believe that every celebration deserves a centerpiece that tastes as miraculous as it looks.
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
                                <img alt="Boutique Cake Display" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7cfluQpQ-0cU9Xpk1evmO8unaAiK3ChGZbpA-x-sRXkS6-YJ6unlJCz1tFCgqiI_q1QKCXowL5KvC4pRl8gxMhYp2MnccO8GzONP29ovXbp7Y37u9H-qCAFMlWwk3wvYSquyEE_0E9pu2HHomjTvgX3MeRxUaRG7ikYZgw2-OdebN1e8DOLGEQ3zioo5O7XN2iGvQBcHA-N_NN1Z9zu895Q6tnZN39wOU5fm5TWmL8uPEp1jr1oIPbzSNlQaDevTry0EXbzHwRLY" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values / Craftsmanship */}
            <section className="bg-white dark:bg-slate-900/50 py-16 px-4 lg:px-40">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Our Craftsmanship</h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            We don't just bake cakes; we engineer edible joy. Our commitment to quality is unwavering, from the first scoop of flour to the final fondant flower.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Card 1 */}
                        <div className="group rounded-2xl border border-slate-100 bg-background-light p-8 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Leaf size={24} />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Premium Ingredients</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                We source locally whenever possible, using organic dairy, free-range eggs, and the finest imported chocolates. No shortcuts, just pure flavor.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="group rounded-2xl border border-slate-100 bg-background-light p-8 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Paintbrush size={24} />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Artisan Design</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Every cake is a canvas. Our decorators are artists trained in sculpting, painting, and intricate piping to bring your vision to life.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="group rounded-2xl border border-slate-100 bg-background-light p-8 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Heart size={24} />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Made with Passion</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Passion is our secret ingredient. We love what we do, and that joy is baked into every layer, ensuring your celebration is truly special.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section className="py-16 px-4 lg:px-40 relative overflow-hidden">
                <div className="mx-auto max-w-5xl">
                    <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">From Sketch to Slice</h2>
                    <div className="relative">
                        {/* Vertical Line for desktop */}
                        <div className="absolute left-[27px] top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
                        <div className="flex flex-col gap-10">
                            {/* Step 1 */}
                            <div className="flex gap-6 md:gap-10">
                                <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-white border-2 border-primary text-primary dark:bg-slate-800">
                                    <MessageSquare size={24} />
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Consultation &amp; Sketching</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                                        We sit down with you (virtually or in-person) to discuss themes, flavors, and dietary needs. We then sketch a custom design for your approval.
                                    </p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex gap-6 md:gap-10">
                                <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-slate-400 dark:bg-slate-800 dark:border-slate-700">
                                    <ChefHat size={24} />
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Baking &amp; Assembly</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                                        Our bakers get to work using fresh ingredients. Layers are baked, cooled, and stacked with our signature Swiss meringue buttercream.
                                    </p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex gap-6 md:gap-10">
                                <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-slate-400 dark:bg-slate-800 dark:border-slate-700">
                                    <Palette size={24} />
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Decoration</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                                        This is where the magic happens. Fondant work, gold leaf application, and delicate piping turn a delicious cake into a stunning masterpiece.
                                    </p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="flex gap-6 md:gap-10">
                                <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-slate-400 dark:bg-slate-800 dark:border-slate-700">
                                    <Truck size={24} />
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">White Glove Delivery</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                                        We personally deliver and set up your cake at the venue, ensuring it arrives in perfect condition and is displayed beautifully.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-primary/5 dark:bg-primary/10 py-16 px-4 lg:px-40">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Sweet Words</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Review 1 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
                            <div className="mb-4 flex text-yellow-400 gap-1">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                            <p className="mb-6 text-slate-700 dark:text-slate-300 italic">"The custom cake for my daughter's wedding was absolutely breathtaking. Not only did it look like art, but the raspberry lemon flavor was divine!"</p>
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                                    <img alt="Sarah J." className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwA2VubugJ6CcHhYUIdXRWfxVfAGGB7bl7n08LUL1InqIDtTE551uQ2p8RMwUqHr78HOO0BLfs6q-GqS1nKJ1yjx98fkuNJ4NLoRADK9n1AFUOWHiJSv14leIjX5LxsY1_hYVSYjeZWiV5xIMfB16HPlLyBtXBj9BX2ewsfBN6eYDi3s2g8WGb-sAGllKhMuWGVoXvg_Sj9prghaYY4YrihFQvTKgqU390Wk6HKnA_M_vS1qjBTTtrar3dE3qcSlrkZkWPGM2UGYE" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Sarah Jenkins</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Wedding Cake</p>
                                </div>
                            </div>
                        </div>
                        {/* Review 2 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
                            <div className="mb-4 flex text-yellow-400 gap-1">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                            <p className="mb-6 text-slate-700 dark:text-slate-300 italic">"Naima Cakes made the ordering process so easy. The custom builder on the site is fun to use, and the final product exceeded my expectations."</p>
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                                    <img alt="Michael C." className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-aBCCgJhhgghg1a5O_6uJ8CyXJHJucvoyxWjDoVciktuSyGrA6IV0FohMyXjJV7b_RWGWsNBHAALblQJOVrdqfDwOm7SWRDclOx7Q1UojyIEFzjUp2d_IQCGs7H36vaugadfJnvDPexrvx01tNnEm6og_5yLjRXj4JA-k-dDdPD5tiU62nT8wEwDRqwzzG0xBMKA6JCn_zInYLi3qcSKTiJEtjILuGtxlvfw3BSGhBtWdIEXUAViJvC3l5XtHVKkMEtnM_0l6qiY" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Michael Chen</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Birthday Cake</p>
                                </div>
                            </div>
                        </div>
                        {/* Review 3 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800 hidden lg:block">
                            <div className="mb-4 flex text-yellow-400 gap-1">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                            <p className="mb-6 text-slate-700 dark:text-slate-300 italic">"I'm a repeat customer because no one else gets the texture so perfect. Moist, flavorful, and just the right amount of sweetness."</p>
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                                    <img alt="Emily R." className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB81IjBmJP1rdpxrWJT90YMrCTwuRTtKfr_LHI0bwxVbj8m3shcbzgjAddq9lDtUefmI3jAGmO7Il03XH8Q4HXAm6a1fLjs8ogAQMKaZdfnZdQX0AcaMO66MZkfUwBZKkLl3eQBQdYTfkePxZxo9794BVchkMOvw7JaVWPcv6HQ4OfQ5vOz9LR4wGxOuU3HtnOmRnBBLYi-vt4N0bUkoc9Nj0edOP604h4DxU6wCe1EGNTO3fhKjd5v6iDK0kTCOghTPrrjfborpM" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Emily Rose</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Anniversary Cake</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-20 lg:px-40">
                <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-primary text-white shadow-2xl relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-16 text-center md:px-12">
                        <h2 className="text-3xl font-bold md:text-5xl">Ready to Design Your Dream Cake?</h2>
                        <p className="max-w-2xl text-lg text-white/90">
                            Whether you have a specific vision or need some inspiration, our custom builder tool lets you create the perfect cake for your event.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/custom-cakes"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-primary transition-colors hover:bg-slate-100"
                            >
                                Start Building
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex items-center justify-center rounded-full border border-white px-8 py-3 text-base font-bold text-white transition-colors hover:bg-white/10"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
