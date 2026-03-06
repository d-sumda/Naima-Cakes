import { useState } from 'react';
import { ShopSidebar } from '../components/shop/ShopSidebar';
import { ProductGrid, products } from '../components/shop/ProductGrid';
import type { Product } from '../components/shop/ProductCard';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export const Shop = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState('all');
    const itemsPerPage = 6;

    // Filter by Category
    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter((product: Product) => product.category === activeCategory);

    // Dynamic Pagination Calculations
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage) || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);

    // Create the final array of products to display for this specific page
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1); // Reset to first page when filtering
    };

    return (
        <main className="flex-1 flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full px-4 py-8 gap-8 mt-10">
            {/* Sidebar Filters */}
            <ShopSidebar activeCategory={activeCategory} onSetCategory={handleCategoryChange} />

            {/* Product Grid Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex flex-col gap-8"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-text-subtle">
                            <a className="hover:text-primary transition-colors" href="/">Home</a>
                            <span className="text-gray-300 dark:text-gray-600">/</span>
                            <span className="text-text-main dark:text-white font-medium">Shop</span>
                        </div>
                        <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold tracking-tight font-serif">Signature Cakes</h1>
                        <p className="text-text-subtle mt-1">Handcrafted delights for every celebration</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-text-subtle hidden sm:inline-block">
                            Showing {totalProducts === 0 ? 0 : startIndex + 1}-{endIndex} of {totalProducts} results
                        </span>
                        <div className="relative">
                            <select className="appearance-none bg-white dark:bg-surface-dark pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary transition-colors cursor-pointer">
                                <option>Sort by: Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest Arrivals</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-subtle">
                                <ChevronDown size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <ProductGrid displayProducts={currentProducts} />

                {/* Pagination */}
                {totalPages > 0 && (
                    <div className="flex justify-center mt-8">
                        <nav className="flex items-center gap-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="size-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`size-10 flex items-center justify-center rounded-lg font-medium transition-colors ${currentPage === page
                                        ? 'bg-primary text-white'
                                        : 'border border-gray-200 dark:border-gray-700 text-text-main dark:text-white hover:border-primary hover:text-primary'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="size-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </nav>
                    </div>
                )}
            </motion.div>
        </main>
    );
};
