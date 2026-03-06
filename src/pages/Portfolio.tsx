import { ArrowDown } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Load all images via Vite's glob feature
const productImages = import.meta.glob<{ default: string }>('../assets/Products/**/*.{png,jpg,jpeg,webp,avif}', { eager: true });

const allItems = Object.entries(productImages).map(([path, module]) => {
    const parts = path.split('/');
    const category = parts[parts.length - 2];
    const filename = parts[parts.length - 1];
    const name = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");

    return {
        id: path,
        category: category,
        title: name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        image: module.default
    };
});

export const Portfolio = () => {
    const location = useLocation();
    const initialCategory = location.state?.category || 'All';
    const [activeFilter, setActiveFilter] = useState(initialCategory);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.state?.category) {
            setActiveFilter(location.state.category);
        }
    }, [location.state]);

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = Array.from(new Set(allItems.map(item => item.category)));
        return ['All', ...cats.sort()];
    }, []);

    const filteredItems = useMemo(() => {
        if (activeFilter === 'All') return allItems;
        return allItems.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    return (
        <main className="flex-grow bg-background-light dark:bg-background-dark py-12">
            <div className="flex flex-col items-center w-full">
                <div className="px-4 md:px-10 lg:px-20 w-full max-w-7xl">
                    {/* Page Header */}
                    <div className="flex flex-col items-center text-center mb-12">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2">Our Work</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-main dark:text-white leading-tight mb-6">Culinary Masterpieces</h1>
                        <p className="text-base text-text-subtle dark:text-gray-400 max-w-2xl">
                            Explore our gallery of bespoke creations. From towering wedding cakes to whimsical birthday treats, every slice tells a story of flavor and artistry.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex justify-center flex-wrap gap-3 mb-10">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeFilter === category
                                    ? 'bg-primary text-white font-bold shadow-md shadow-primary/25 translate-y-[-2px]'
                                    : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/30 text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredItems.map(item => (
                            <div key={item.id} className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <img
                                    alt={item.title}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 rounded-xl"
                                    src={item.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-xl">
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">{item.category}</span>
                                    <h3 className="text-white text-xl font-serif font-bold">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    {filteredItems.length === 0 && (
                        <div className="text-center text-text-subtle py-10">No items found for this category.</div>
                    )}

                    {filteredItems.length > 0 && (
                        <div className="flex justify-center mt-16">
                            <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-primary text-sm font-bold text-text-main dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-surface-dark group">
                                <span>View More Projects</span>
                                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};
