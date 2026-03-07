import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Checkout = () => {
    const { items, updateQuantity, removeFromCart, cartTotal, cartItemCount, clearCart } = useCart();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Removed shipping and tax lines since this is now an inquiry. We just show estimated total.
    const orderTotal = cartTotal;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRequestSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        if (items.length === 0) return;

        setIsSubmitting(true);

        const orderDetails = items.map(item =>
            `- ${item.quantity}x ${item.title} (£${item.price.toFixed(2)} each)\n  Options: ${item.options?.join(', ') || 'None'}`
        ).join('\n\n');

        const orderDetailsHtmlRows = items.map(item => `
          <tr>
            <td style="padding: 16px 8px 16px 0; border-bottom: 1px dashed #f0eaeb;">
              <div style="font-size: 16px; color: #4a4a4a; font-weight: bold; font-family: Georgia, serif;">${item.title}</div>
              ${item.options && item.options.length > 0 ? `<div style="font-size: 14px; color: #8a7c75; padding-top: 4px; font-style: italic;">${item.options.join(', ')}</div>` : ''}
            </td>
            <td style="padding: 16px 8px; border-bottom: 1px dashed #f0eaeb; text-align: center; color: #5a5a5a;">
              ${item.quantity}
            </td>
            <td style="padding: 16px 0; border-bottom: 1px dashed #f0eaeb; text-align: right; color: #3b2f28;">
              <strong>£${(item.price * item.quantity).toFixed(2)}</strong>
            </td>
          </tr>
        `).join('');

        const orderDetailsHtml = `
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; margin-top: 16px;">
          <thead>
            <tr>
              <th style="text-align: left; padding-bottom: 8px; border-bottom: 2px solid #dfafa3; color: #dfafa3; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Item</th>
              <th style="text-align: center; padding-bottom: 8px; border-bottom: 2px solid #dfafa3; color: #dfafa3; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Qty</th>
              <th style="text-align: right; padding-bottom: 8px; border-bottom: 2px solid #dfafa3; color: #dfafa3; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${orderDetailsHtmlRows}
          </tbody>
        </table>
        `;

        // Generate a random order ID like ORD-1A2B3C
        const orderId = `ORD-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

        const adminTemplateParams = {
            order_id: orderId,
            to_name: 'Naima Cakes',
            from_name: formData.name,
            reply_to: formData.email,
            phone: formData.phone,
            address: formData.address,
            notes: formData.notes,
            order_details: orderDetails, // fallback text
            order_details_html: orderDetailsHtml, // rich table
            estimated_total: `£${orderTotal.toFixed(2)}`,
        };

        const userTemplateParams = {
            order_id: orderId,
            user_name: formData.name,
            user_email: formData.email,
            order_details: orderDetails, // fallback text
            order_details_html: orderDetailsHtml, // rich table
            estimated_total: `£${orderTotal.toFixed(2)}`,
            deposit_amount: `£${(orderTotal / 2).toFixed(2)}`,
        };

        try {
            // Uses fallback defaults if .env isn't configured yet
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
            const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
            const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID || 'user_template_default';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_default';

            await emailjs.send(serviceId, adminTemplateId, adminTemplateParams, publicKey);
            await emailjs.send(serviceId, userTemplateId, userTemplateParams, publicKey);

            // Clear the cart on successful submission
            clearCart();
            setIsSuccess(true);
        } catch (error) {
            console.error('Failed to send order request:', error);
            // It might fail without actual credentials so we simulate a success for demonstration if the API fails just for UI smoothness (optional)
            // But usually we'd alert:
            alert('Since EmailJS keys are not yet configured in .env, this request failed. Please check the console and configure EmailJS.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = formData.name && formData.email && formData.phone && formData.address;

    if (isSuccess) {
        return (
            <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="bg-white dark:bg-surface-dark p-12 rounded-3xl shadow-xl shadow-primary/5 border border-primary/10 flex flex-col items-center">
                    <CheckCircle className="text-green-500 w-24 h-24 mb-6" />
                    <h1 className="text-4xl font-serif font-extrabold text-text-main dark:text-white mb-4">Request Sent!</h1>
                    <p className="text-lg text-text-subtle dark:text-gray-400 mb-8 max-w-md">
                        Thank you for your order request! We've received your details and have sent a confirmation email outlining your requested items.
                        We will get back to you shortly to confirm availability and discuss the initial 50% deposit.
                    </p>
                    <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl transition-all shadow-md text-lg">
                        Continue Browsing
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100">
            {/* Page Title */}
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-serif font-extrabold text-text-main dark:text-white tracking-tight mb-2">Order Request</h1>
                <p className="text-text-subtle dark:text-gray-400">Review your customized treats and share your details to request an order.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Column: Cart Items & Contact Form */}
                <div className="flex-1 space-y-12">

                    {/* Cart Items Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-serif font-bold text-text-main dark:text-white border-b border-primary/10 pb-4">1. Your Items</h2>

                        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-primary/20 dark:border-white/10 text-sm font-bold text-primary dark:text-gray-400 uppercase tracking-widest">
                            <div className="col-span-6">Product</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-2 text-right">Total</div>
                        </div>

                        {items.length === 0 ? (
                            <div className="py-12 flex flex-col items-center justify-center text-center border-b border-primary/10 dark:border-white/10">
                                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                    <ShoppingBag size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Your request is empty</h3>
                                <p className="text-text-subtle mb-6 max-w-md">Looks like you haven't added any sweet treats yet. Let's start filling it up!</p>
                                <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md">
                                    Browse Shop
                                </Link>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="group relative flex flex-col md:grid md:grid-cols-12 md:items-center gap-6 py-6 border-b border-primary/10 dark:border-white/10">
                                    <div className="col-span-6 flex gap-4">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-primary/20 dark:border-white/10 bg-white dark:bg-surface-dark shadow-sm">
                                            <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-lg font-bold text-text-main dark:text-white">
                                                <Link to={item.type === 'custom_cake' ? '/custom-cakes' : '/shop'} className="hover:text-primary transition-colors">
                                                    {item.title}
                                                </Link>
                                            </h3>
                                            <div className="mt-1 flex flex-col gap-1 text-sm text-text-subtle dark:text-gray-400">
                                                {item.options?.map((opt, idx) => (
                                                    <span key={idx} className="inline-flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span> {opt}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex items-center justify-between md:justify-center">
                                        <span className="md:hidden text-sm font-bold text-text-subtle">Price:</span>
                                        <span className="text-base font-semibold text-text-main dark:text-gray-200">£{item.price.toFixed(2)}</span>
                                    </div>
                                    <div className="col-span-2 flex items-center justify-between md:justify-center">
                                        <span className="md:hidden text-sm font-bold text-text-subtle">Quantity:</span>
                                        <div className="flex items-center rounded-lg border border-primary/20 dark:border-white/20 bg-white dark:bg-surface-dark shadow-sm">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                                className="px-2 py-1.5 text-text-subtle hover:text-primary transition-colors disabled:opacity-50"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-sm font-bold text-text-main dark:text-white">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-2 py-1.5 text-text-subtle hover:text-primary transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex items-center justify-between md:justify-end">
                                        <span className="md:hidden text-sm font-bold text-text-subtle">Total:</span>
                                        <span className="text-lg font-bold text-primary dark:text-primary">£{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="absolute top-6 right-0 md:top-auto md:relative md:-ml-8 md:mt-0 text-text-subtle hover:text-red-500 transition-colors bg-white dark:bg-surface-dark md:bg-transparent rounded-full p-1"
                                        title="Remove item"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))
                        )}
                    </section>

                    {/* Contact Form Section */}
                    {items.length > 0 && (
                        <section className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-sm border border-primary/10">
                            <h2 className="text-2xl font-serif font-bold text-text-main dark:text-white mb-6">2. Your Details</h2>
                            <form id="order-request-form" onSubmit={handleRequestSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Full Name</span>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white h-12 px-4 transition-all"
                                            placeholder="Jane Doe"
                                            type="text"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Email Address</span>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white h-12 px-4 transition-all"
                                            placeholder="jane@example.com"
                                            type="email"
                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Phone Number</span>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white h-12 px-4 transition-all"
                                            placeholder="+44 7700 900000"
                                            type="tel"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Delivery Address</span>
                                        <input
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white h-12 px-4 transition-all"
                                            placeholder="123 Sweet St, Cake Town"
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-text-subtle dark:text-gray-300">Additional Notes / Date Request</span>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-0 text-text-main dark:text-white min-h-[120px] p-4 transition-all resize-y"
                                        placeholder="Are there any allergies? When do you need the order?"
                                    />
                                </label>
                            </form>
                        </section>
                    )}

                    {/* Continue Shopping */}
                    <div className="pt-2 pb-8">
                        <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:text-primary-dark transition-colors">
                            <ArrowLeft size={16} />
                            Continue Browsing
                        </Link>
                    </div>
                </div>

                {/* Right Column: Summary Sidebar */}
                <div className="w-full lg:w-[380px] flex-shrink-0">
                    <div className="sticky top-28 rounded-3xl bg-white dark:bg-surface-dark p-8 shadow-xl shadow-primary/5 border border-primary/10 dark:border-white/10">
                        <h2 className="text-2xl font-serif font-bold text-text-main dark:text-white mb-8 border-b border-primary/10 pb-4">Request Summary</h2>

                        <div className="space-y-4 mb-4">
                            <div className="flex justify-between text-sm text-text-subtle dark:text-gray-400">
                                <span>Subtotal ({cartItemCount} items)</span>
                                <span className="font-semibold text-text-main dark:text-gray-200">£{cartTotal.toFixed(2)}</span>
                            </div>

                            {/* Divider */}
                            <div className="my-4 h-px w-full bg-primary/10 dark:bg-white/10"></div>

                            <div className="flex justify-between items-end">
                                <span className="text-base font-bold text-text-main dark:text-white">Estimated Total</span>
                                <span className="text-3xl font-serif font-black text-primary">£{orderTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <p className="text-sm text-text-subtle mb-8 italic">
                            *This is an estimated total. Final price will be confirmed subject to availability and delivery requirements.
                        </p>

                        {/* Request Order Button */}
                        <button
                            type="submit"
                            form="order-request-form"
                            disabled={items.length === 0 || isSubmitting || !isFormValid}
                            className="w-full rounded-xl bg-primary hover:bg-primary-dark text-white py-4 text-center font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {isSubmitting ? 'Sending Request...' : 'Send Order Request'}
                        </button>

                        <p className="mt-6 text-center text-xs font-medium text-text-subtle dark:text-gray-500 tracking-wide uppercase">
                            No Payment Required Yet
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

