import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: 'brownies' | 'cupcakes' | 'custom' | string;
    badge?: string;
    badgeColor?: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();

    return (
        <div
            className="group flex flex-col h-full bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}
        >
            <Link
                to={`/shop/${product.id}`}
                className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary block"
                style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}
            >
                <img
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                    style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                    src={product.image}
                />

                <div className="absolute top-3 right-3 z-10">
                    <button className="bg-white/90 dark:bg-surface-dark/90 backdrop-blur-sm p-2 rounded-full text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary shadow-sm transition-colors">
                        <Heart size={20} />
                    </button>
                </div>

                {product.badge && (
                    <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        <span className={`${product.badgeColor} text-xs font-bold px-2.5 py-1 rounded-md shadow-sm pointer-events-auto`}>
                            {product.badge}
                        </span>
                    </div>
                )}
            </Link>

            <div className="p-5 flex flex-col flex-1 z-10 bg-white dark:bg-surface-dark relative">
                <div className="flex justify-between items-start mb-2">
                    <Link to={`/shop/${product.id}`} className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm">
                        <h3 className="font-bold text-lg text-text-main dark:text-white group-hover:text-primary transition-colors line-clamp-2 pr-2">{product.title}</h3>
                    </Link>
                    <div className="flex flex-col items-end">
                        {product.category === 'custom' && <span className="text-[10px] text-text-muted font-normal uppercase tracking-wider mb-0.5">Starts from</span>}
                        <span className="font-semibold text-primary">£{product.price.toFixed(2)}</span>
                    </div>
                </div>

                <p className="text-text-subtle text-sm line-clamp-2 mb-4">{product.description}</p>

                <div className="mt-auto">
                    {product.category === 'custom' ? (
                        <Link to="/custom-cakes" className="w-full py-2.5 rounded-lg bg-text-main dark:bg-gray-100 text-white dark:text-text-main font-medium text-sm hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors flex items-center justify-center gap-2">
                            Create Custom Cake
                        </Link>
                    ) : (
                        <button
                            className="w-full py-2.5 rounded-lg bg-text-main dark:bg-gray-100 text-white dark:text-text-main font-medium text-sm hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors flex items-center justify-center gap-2"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent accidental navigation if nested
                                addToCart({
                                    id: `prod-${product.id}`,
                                    type: 'product',
                                    title: product.title,
                                    price: product.price,
                                    quantity: 1,
                                    image: product.image,
                                    options: ['Size: Standard Size'] // Default for quick adds from catalog
                                });
                            }}
                        >
                            <ShoppingBag size={18} />
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
