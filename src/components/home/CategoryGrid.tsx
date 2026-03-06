
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: 'Birthdays',
        subtitle: 'Make a wish',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbGqWNX29QyG7rkYBt-YZii5ALa6RqH7SQ2RT9SPnoV528vhBzs-lfnxh63bs4rQswLaKw6QzYLFPvOU_c-uTziNYSHIRV_M-NXmpmvems_b1leZcRaRmWUez8XFpWpsFmjO1ZAwj86lvJ6NoSkQaOxmbngLvAk63pBTd2HyGQ3BhXFm9D1Ibvmj6d0wtUOg3FvN6O7AY7vob1CWOnBQsImTGAjlI6Fv_bZOPuJfr66vouSdPGKzvJdL9CTwLBI0pEd8GNzgn0J6o',
        portfolioCategory: 'Birthdays'
    },
    {
        title: 'Weddings',
        subtitle: 'Elegant & Timeless',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiyQsvEVZgIGCE0ij2xfoelhFb5sIqvxfXToO9RhwZIAb3CqLmyDf1pDGb4Dcul745AJqYwu2qovYIvqNk_ImdUxcCKBRKgZHbvmtAZZFxs2uetK1dL8oS2LB94gbQ69457UeOXf3ebfqfLlyDQHbcpMJeAm_aZJ01GgNiXr_8IzTNsU_epTIrM7H_nDPDXaPCDzIDdfeCkdk6F8yBj_puegCgnJtSadzSb0S7G5SrwDuH3OgYC4n4CznTFi8UCpsnPEQV_jvMRb0',
        portfolioCategory: 'Wedding'
    },
    {
        title: 'Seasonal',
        subtitle: 'Festive Treats',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1TAagbCZRHFkzH8lN0vzxaiPAau4Hm830LL1BchfY73rh5TZbxINDrWpShopJuuZegJ55q8uBlN3bCPyXwaE16auqxY-eQxaNtnkXWoqqZ2AQoBonHzwdOfn5SprkpKBBobiQE8v915tXiRCjCgbSar0CkTYAavotibpgClSa2BK9iNhXHgwTkz45ZvACLqiu8rYwwKG3Q8u7I_c3ARwYCPpkpYQf0jO5iZ8rR3Q4BaRjaX_L5kyHyrkuDsrtqJ_7krBGFQcEJRA',
        portfolioCategory: 'Seasonals'
    },
    {
        title: 'Cupcakes',
        subtitle: 'Bite-sized Joy',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVMsa5UxpP6tMWn-uTXQNzZXD-yih4qaC3CVRm6USD_dZ_VgtWBSwoRjF-bpoowHPrpLIg5QcUM4VDHS5naJFmSzVM4u4S2MG4XUx_jLtlY42_G2FJ6YpExWL031POlczH-hSi_OpJUf-BzD9UlfXZoS1SfoheSdUGJ5q46cwlwE1ntDNeTuDQtqCzjtFQsRXdCk01L4s62JxGNSX95R9sMOjtRKbMKHnPeZSm_2YbltR2FkFzxZkrKh3mJvMm6tYaj0HXgUXmCmU',
        portfolioCategory: 'Cupcakes'
    },
    {
        title: 'Brownies',
        subtitle: 'Rich & Fudgy',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO_82hUCDEkDCqmtuPFWNClNaMukCxKXpb2vga8VpaCf2PFmQsGiEnF6tUbQavmPLE1OErq4WpA4yh5DeG6icNYb57lQ4eDPB6j2zNjOV9oEq58ZtWTI6GP-kiDEHO99zO01EiWMHgp281tAArjNaL1qlyTQCPN58n2S3GL7NNZDLHizgbjKDA51n44hb4KOE9sxhbqme1vdCVbiA4Teyz51Hfn3S1YFy48ry7cdf0cHkrF7Q6rI56BkJblrBZXxr1iyb-rFRqwO0',
        portfolioCategory: 'Brownies'
    }
];

export const CategoryGrid = () => {
    return (
        <section className="bg-white dark:bg-surface-dark py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-14 flex flex-col items-end justify-between gap-6 sm:flex-row border-b border-gray-100 dark:border-gray-800 pb-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main dark:text-white sm:text-5xl">Browse by Category</h2>
                        <p className="mt-4 text-lg text-text-subtle dark:text-gray-400">Find the perfect handcrafted treat for your celebration.</p>
                    </div>

                    <Link to="/portfolio" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors">
                        View all categories
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to="/portfolio"
                                state={{ category: category.portfolioCategory }}
                                className="group relative flex flex-col gap-6"
                            >
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div
                                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${category.image}")` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>
                                <div className="text-center px-2">
                                    <h3 className="text-xl font-serif font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">{category.title}</h3>
                                    <p className="mt-1 text-sm text-text-subtle dark:text-gray-400 italic">{category.subtitle}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
