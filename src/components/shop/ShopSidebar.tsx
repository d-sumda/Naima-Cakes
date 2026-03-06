
import { Filter, Cake, Gift, Heart, Star } from 'lucide-react';

export const ShopSidebar = ({
    activeCategory,
    onSetCategory
}: {
    activeCategory: string,
    onSetCategory: (cat: string) => void
}) => {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-8">
            {/* Mobile Filter Toggle (Visible on small screens) */}
            <div className="lg:hidden flex justify-between items-center bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-4">
                <span className="font-bold">Filters</span>
                <Filter size={20} />
            </div>

            {/* Categories */}
            <div className="hidden lg:flex flex-col gap-6 bg-white dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm sticky top-24">
                <div className="flex flex-col">
                    <h1 className="text-text-main dark:text-white text-lg font-bold leading-normal">Categories</h1>
                    <p className="text-text-subtle text-sm font-normal leading-normal mt-1">Filter by occasion</p>
                </div>

                <div className="flex flex-col gap-1">
                    <button
                        onClick={() => onSetCategory('all')}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${activeCategory === 'all' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}
                    >
                        <Cake size={20} className={activeCategory === 'all' ? '' : 'text-gray-400 group-hover:text-primary'} />
                        <span className="text-sm font-medium leading-normal">All Products</span>
                    </button>
                    <button
                        onClick={() => onSetCategory('brownies')}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${activeCategory === 'brownies' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}
                    >
                        <Gift size={20} className={activeCategory === 'brownies' ? '' : 'text-gray-400 group-hover:text-primary'} />
                        <span className="text-sm font-medium leading-normal">Brownies</span>
                    </button>
                    <button
                        onClick={() => onSetCategory('cupcakes')}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${activeCategory === 'cupcakes' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}
                    >
                        <Heart size={20} className={activeCategory === 'cupcakes' ? '' : 'text-gray-400 group-hover:text-primary'} />
                        <span className="text-sm font-medium leading-normal">Cupcakes</span>
                    </button>
                    <button
                        onClick={() => onSetCategory('custom')}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${activeCategory === 'custom' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}
                    >
                        <Star size={20} className={activeCategory === 'custom' ? '' : 'text-gray-400 group-hover:text-primary'} />
                        <span className="text-sm font-medium leading-normal">Custom Cakes</span>
                    </button>
                </div>

                <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />

                {/* Price Filter */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-text-main dark:text-white text-base font-semibold">Price Range</h3>
                    <div className="flex items-center gap-2">
                        <div className="relative w-full">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">£</span>
                            <input
                                className="w-full pl-6 pr-2 py-2 text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-text-main dark:text-white"
                                placeholder="Min"
                                type="number"
                            />
                        </div>
                        <span className="text-gray-400">-</span>
                        <div className="relative w-full">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">£</span>
                            <input
                                className="w-full pl-6 pr-2 py-2 text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-text-main dark:text-white"
                                placeholder="Max"
                                type="number"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
