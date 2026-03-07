import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import toast from 'react-hot-toast';

export type CartItemType = 'product' | 'custom_cake';

export interface CartItem {
    id: string; // Unique ID for the cart line item (e.g., could be product ID + options, or a UUID for custom cakes)
    type: CartItemType;
    title: string;
    price: number;
    quantity: number;
    image: string;
    options?: string[]; // E.g., Size, Flavor, Tiers, etc.
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (newItem: CartItem) => {
        const isExisting = items.some(item => item.id === newItem.id);

        if (isExisting) {
            toast.success(`Added another ${newItem.title} to order`);
        } else {
            toast.success(`Added ${newItem.title} to order`);
        }

        setItems((prevItems) => {
            // For simple products, we might group by ID and options. 
            // For custom cakes (which usually get unique IDs), they won't group unless they have the exact same ID.
            const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id);

            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += newItem.quantity;
                return updatedItems;
            }

            return [...prevItems, newItem];
        });
    };

    const removeFromCart = (id: string) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) return;
        setItems((prevItems) => prevItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => {
        setItems([]);
    };

    const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

    const cartItemCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartItemCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
