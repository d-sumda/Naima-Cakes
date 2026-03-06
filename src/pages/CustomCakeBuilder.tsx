import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, ArrowRight, Check, UploadCloud } from 'lucide-react';
import { useCart } from '../context/CartContext';

// --- Data Constants ---
const OCCASIONS = [
    { id: 'birthday', name: 'Birthday', icon: 'cake' },
    { id: 'wedding', name: 'Wedding', icon: 'favorite' },
    { id: 'graduation', name: 'Graduation', icon: 'school' },
    { id: 'babyshower', name: 'Baby Shower', icon: 'child_care' },
    { id: 'anniversary', name: 'Anniversary', icon: 'stars' },
    { id: 'other', name: 'Other', icon: 'more_horiz' },
];

const SHAPES = ['Round', 'Square', 'Heart'];

const SIZES = [
    { name: '6 inch (Small)', price: 45, serves: 'Serves 8-10 people. Perfect for intimate gatherings.' },
    { name: '8 inch (Medium)', price: 65, serves: 'Serves 15-20 people. Our most popular size for parties.' },
    { name: '10 inch (Large)', price: 90, serves: 'Serves 25-30 people. Great for bigger events.' },
    { name: '2 Tier (Custom)', price: 140, serves: 'Serves 40+ people. A showstopper for weddings and big celebrations.' },
];

const SPONGES = [
    { name: 'Vanilla Bean', desc: 'Classic & Airy', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX06P8ok9Tcw8v-wMn0BVuhe_4UYY-AtCfNyHenORrbdjKxnqqW4MrKyd9-wzX-aFxgzvKx2kJCggncSLjU9Xd6M6UDPr6-xtDRd0NZTs8qL0Z09Da-Dx6SR5bXEKgSvcm-eeGoI4AD7Ic9qATf9FV2AVhufZ9rI8O1AfkR-pYt62DUtDgM5Wj5NZ6GhwXx9olBeRaV2BglkMGW8mDt66wx6nW_WA39XXRquIbt0CqAfZy4lUdisiDJJTMXArZKMl5xmOUxDniTw0' },
    { name: 'Dark Chocolate', desc: 'Rich & Decadent', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRLQqdWu8zZidLDxQ6JiNy_nvpHww0r7SYA9_3dgaHm2CXeg7u-cNd2Gd-cTmMRoTGZdHw7OmjiArelXikXduDNnWksb4XmnwnDX2vuNAjstOTlMr8fxVLoo6yEeDgFuY_BCSXsaCssO0FSGcVSE7tn9yFpbM00OoGLRTZgbyN7fTDlcJzmF_Hru-fUJ-QOAgjhCP4CJukBEM50imurmWERKt53uYZpRUeeXjssaGDJSSU2XEXk83l3cKRVBh5oC3qZia921gyjU8' },
    { name: 'Red Velvet', desc: 'Smooth Cocoa', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8qM5o-0k4QNJEbXcDmlOb5Hcs1AichrvRGD8DzEHWkDKe2GWfuT81zR2QfFWoYfmR2B0051i4w_MN0syIlShIx-XGsT7Be2FYP28AEvh7tWryUuPhes33yDVHfH75KXLcE-DHfCFK4CT6MKZIXzoimRyWQFgOkw7ODtuaxG1eaH8BG_Wvmzfb9ZktCCR_XLtmJsOY_mb4di6fc42uPafQVq98Viw2YFw0yXUK9-Gg0xY7XChu96zLQEaDLH8zWm4V26QkSKLU0qE' },
    { name: 'Lemon Zest', desc: 'Bright & Citrusy', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACfOeoX_Cj3f4tB9JdEEXmtXj8FGUwpjZ8Lj33ni33RdjqNoPt-d8x0Fup8gtbs0IUmsu1WkVOftLmOPE6HwpLxlaJ_69GkeJQHmrrC0kjj4dL3N9iOQb8_nBw3LesNow-3G7WCboKHJPa3Bfc23Qsc78TakwU2hahoq-aMAN7p406C1_MPyOIJQxB4dAptLq6xR1GjEY3fbCmTDpZmjyyKZ8qwTfsgsy_NCSBcOsNMNzE9BQgLndA-4hl9k84wOMUss5Qmrj2JcY' },
    { name: 'Spiced Carrot', desc: 'Nutty & Moist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaDkfrCGXSFfkIoSa5eghUk6GEFLCgIb7Hes7TptEQXzq0mH0_8dxDehPW3bdFV87HGdyyl4YztgiWrtwln4dvdqY0kRuTa4ht0K5LJeO_mlh2i0rNz0HnmsyJS0Q5xK-LyQyLPw41FIOiXOgjJAIf1e-P4ErGOdK5Q1lkjOQgTCDmG12Zex4g1gfN_zvwzI0DbDl1RiXK5RLbvAVdaS3W_qnpvMhMiqlZjDqz5S0-BZLm0BUXa6WvTDi0bB1EZ_R2O_8s4b9AV7Q' },
];

const FILLINGS = [
    { name: 'Vanilla Buttercream', price: 0 },
    { name: 'Strawberry Jam', price: 5 },
    { name: 'Salted Caramel', price: 8 },
    { name: 'Dark Chocolate Ganache', price: 10 },
];

const FROSTINGS = [
    { name: 'Swiss Meringue', price: 0 },
    { name: 'American Buttercream', price: 0 },
    { name: 'Cream Cheese', price: 5 },
    { name: 'Fondant Finish', price: 25 },
];

const DESIGNS = [
    { name: 'Minimalist', desc: 'Clean lines', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe32-jMFlG1YIeAyrL3Zcztfp3tk0BcYweuXadIqGHXH8l7dKMB3IcClqei-GGxfMXaAles3VKk0Ymlu37Zhhh4valmcfYC0Cj0ASS4z9O4V781aH53CQT662xeoB0nFDEIssXewWATnoS_7McoOeY8NGo1higCxuP25Ztx1_fi9jTqKNgtvRlZnxop3BePya-ObN-pEgqtnIsgTox0ye6zLPRJIGsnJLgBfX72U1Ip55FMJLaFyr36ldaVIPuVAgGBt9jtTKSLRg' },
    { name: 'Floral Fantasy', desc: 'Fresh blooms', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFX1C07nV0VvDmYC-k8xvbxURAUISZEonpkfJS6lqRKBs3Y8d-rpJpnFyyGTpi8Azc-ljC1zgwfH5b3OPFQU4zr5i42t5BLDYFoiF7rXmRqOP8MsKakJnIOPFuT1RoUQ5dxIGjDzGLKQKAj4KTBp5pbP5hSMdOHmiBYHegAY67gi-j_sl63AKGXSNai2e2ysQyCAsEEzrwtEUxAJnr35-5oNgdXZxkUAJPsyoKJeEnnVIq0bw-aAK68zpcCY9gAj9mBFbPX5soJP0' },
    { name: 'Classic Drip', desc: 'Elegant drips', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhwWaT490PVHgvYrJ8_1P8SR3UamCvbyKXa5sag_FocTK3v4s9gVnEOK9FdTKRqrunG7b1A3sdNtsxdeFEypcVhyUgtUGt2OIaDFnOe2cg7-GxFUNveW86cLYnPm3XaA3g4g_wNb5KAhVCiZwh6bIGIJ8mawcWEoChc5AwYnWNpqVNTtqwTWj9zTw9Rrs1EUzzhpGQEk9iVn6mCm4JU4X2Xrry_39ABj6OQFlSPvTEHpodgC8fB9EEZypkPmj1s7valJwF1yz1toc' },
    { name: 'Vintage Piping', desc: 'Retro style', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo3gbGd1Zz8xDXWk7_0HWr9-RgQHD602SvbH-qb1R9pYgRgRuZ5wTXoCWu3exrKPuSEd3pkwQ1_s1I5YUJI1NmUMBauGtxGOWlo-KNJ9n73CWIX_wdhb3wHyWA6yCYxAR0SxZfWCbCQPcAp8gX8WWI-jFMpNOYgBdOCifSDXTRNUm1X3A7aUTfHYPGK0dV_utkm2RAQjlBdq2QhqXzqqhO4cYOELWQoD5s63MKloxKUUI9Ch-7l4m6WxyqPC_tAZ_xmjGuMgRA0UI' },
];

const COLORS = [
    { name: 'Blush', hex: '#f8e8ea', textClass: 'text-primary/50' },
    { name: 'Sky', hex: '#e3f2fd', textClass: 'text-blue-400' },
    { name: 'Lilac', hex: '#f3e5f5', textClass: 'text-purple-400' },
    { name: 'Mint', hex: '#e8f5e9', textClass: 'text-green-400' },
    { name: 'Cream', hex: '#fff8e1', textClass: 'text-yellow-400' },
    { name: 'White', hex: '#ffffff', textClass: 'text-slate-400', border: 'border border-slate-200 dark:border-slate-600' },
];

const TOPPINGS = [
    { name: 'Fresh Berries', icon: 'nutrition', price: 15 },
    { name: 'Macarons', icon: 'cookie', price: 12 },
    { name: 'Edible Flowers', icon: 'local_florist', price: 18 },
    { name: 'Gold Leaf', icon: 'auto_awesome', price: 10 },
    { name: 'Sprinkles', icon: 'grain', price: 5 },
    { name: 'Choc Shards', icon: 'bolt', price: 8 },
];

export const CustomCakeBuilder = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // --- State ---
    const [step, setStep] = useState(1);

    // Step 1 State
    const [occasion, setOccasion] = useState('Birthday');
    const [shape, setShape] = useState('Round');
    const [size, setSize] = useState(SIZES[1]); // 8 inch

    // Step 2 State
    const [sponge, setSponge] = useState(SPONGES[0].name);
    const [filling, setFilling] = useState(FILLINGS[0]);
    const [frosting, setFrosting] = useState(FROSTINGS[0]);
    const [design, setDesign] = useState(DESIGNS[1].name);
    const [color, setColor] = useState(COLORS[0].name);

    // Step 3 State
    const [toppings, setToppings] = useState<string[]>(['Fresh Berries', 'Gold Leaf']);
    const [message, setMessage] = useState('');
    const [dietary, setDietary] = useState<string[]>([]);
    const [dateRequired, setDateRequired] = useState('');
    const [fulfillment, setFulfillment] = useState('Pickup');

    // --- Computed Values ---
    const calculateTotal = () => {
        let total = size.price + filling.price + frosting.price;
        toppings.forEach(tName => {
            const topping = TOPPINGS.find(t => t.name === tName);
            if (topping) total += topping.price;
        });
        return total;
    };

    const toggleTopping = (toppingName: string) => {
        if (toppings.includes(toppingName)) {
            setToppings(toppings.filter(t => t !== toppingName));
        } else {
            setToppings([...toppings, toppingName]);
        }
    };

    const toggleDietary = (req: string) => {
        if (dietary.includes(req)) {
            setDietary(dietary.filter(d => d !== req));
        } else {
            setDietary([...dietary, req]);
        }
    };

    const nextStep = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep(Math.min(3, step + 1)); };
    const prevStep = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep(Math.max(1, step - 1)); };

    // --- Render Helpers ---
    const renderProgressBar = () => {
        const progress = step === 1 ? 33 : step === 2 ? 66 : 100;
        return (
            <div className="w-full max-w-xl flex flex-col gap-2 mb-8">
                <div className="flex justify-between text-sm font-medium">
                    <span className="text-text-main dark:text-white">Builder Progress</span>
                    <span className="text-primary">{progress}%</span>
                </div>
                <div className="h-2 w-full bg-border-soft dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        );
    };

    return (
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-10 py-8">
            {/* Breadcrumbs & Title */}
            <div className="flex flex-col gap-6 mb-8">
                <nav className="flex flex-wrap items-center gap-2 text-sm text-text-muted dark:text-gray-400">
                    <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                    <span className="text-border-soft dark:text-gray-600">/</span>
                    <Link className="hover:text-primary transition-colors" to="/custom-cakes">Custom Builder</Link>
                    <span className="text-border-soft dark:text-gray-600">/</span>
                    <span className="font-medium text-primary">
                        {step === 1 ? 'Size & Shape' : step === 2 ? 'Flavors & Design' : 'Finalize'}
                    </span>
                </nav>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-4xl font-bold font-serif text-text-main dark:text-white tracking-tight">
                            {step === 1 ? 'The Foundation' : step === 2 ? 'Build Your Dream Cake' : 'Finalize Your Creation'}
                        </h1>
                        <p className="text-text-subtle dark:text-gray-400 text-base">
                            Step {step} of 3: {step === 1 ? "Let's start by choosing dimensions." : step === 2 ? "Choose your flavors and aesthetic details." : "Add the finishing touches."}
                        </p>
                    </div>
                </div>
                {renderProgressBar()}
            </div>

            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 relative">
                {/* Left Column: Form Content */}
                <div className="flex-1 flex flex-col gap-10">
                    <AnimatePresence mode="popLayout">
                        {step === 1 && (
                            <motion.div
                                key="step-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-8"
                            >
                                {/* Occasion */}
                                <section>
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 dark:text-white">
                                        <span className="material-symbols-outlined text-primary">celebration</span>
                                        Select Occasion
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {OCCASIONS.map(occ => (
                                            <label key={occ.id} className="cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="occasion"
                                                    value={occ.name}
                                                    checked={occasion === occ.name}
                                                    onChange={() => setOccasion(occ.name)}
                                                    className="peer sr-only"
                                                />
                                                <div className="h-full px-4 py-3 rounded-xl border border-border-soft dark:border-white/10 bg-white dark:bg-surface-dark peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary hover:border-primary/50 transition-all flex flex-col items-center justify-center text-center gap-2 cursor-pointer text-text-main dark:text-white">
                                                    <span className="material-symbols-outlined text-2xl mb-1">{occ.icon}</span>
                                                    <span className="text-sm font-medium">{occ.name}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </section>

                                <div className="w-full h-px bg-border-soft dark:bg-white/10"></div>

                                {/* Shape */}
                                <section>
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 dark:text-white">
                                        <span className="material-symbols-outlined text-primary">category</span>
                                        Choose Shape
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {SHAPES.map(s => (
                                            <label key={s} className="cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="shape"
                                                    value={s}
                                                    checked={shape === s}
                                                    onChange={() => setShape(s)}
                                                    className="peer sr-only"
                                                />
                                                <div className="w-32 h-32 text-text-main dark:text-white rounded-xl border-2 border-border-soft dark:border-white/10 bg-white dark:bg-surface-dark peer-checked:border-primary peer-checked:bg-primary/5 flex flex-col items-center justify-center gap-3 transition-all hover:border-primary/50 cursor-pointer">
                                                    {s === 'Round' && <div className="w-12 h-12 rounded-full border-2 border-current text-text-muted dark:text-gray-500 peer-checked:text-primary"></div>}
                                                    {s === 'Square' && <div className="w-12 h-12 border-2 border-current text-text-muted dark:text-gray-500 peer-checked:text-primary"></div>}
                                                    {s === 'Heart' && <div className="material-symbols-outlined text-4xl text-text-muted dark:text-gray-500 peer-checked:text-primary">favorite</div>}
                                                    <span className="text-sm font-medium peer-checked:text-primary">{s}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </section>

                                <div className="w-full h-px bg-border-soft dark:bg-white/10"></div>

                                {/* Size */}
                                <section>
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 dark:text-white">
                                        <span className="material-symbols-outlined text-primary">straighten</span>
                                        Select Size
                                    </h3>
                                    <div className="space-y-3">
                                        {SIZES.map(s => (
                                            <label key={s.name} className={`relative flex items-center p-4 rounded-xl border bg-white dark:bg-surface-dark cursor-pointer transition-all ${size.name === s.name ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-border-soft dark:border-white/10 hover:border-primary/50'}`}>
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    value={s.name}
                                                    checked={size.name === s.name}
                                                    onChange={() => setSize(s)}
                                                    className="peer sr-only"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-text-main dark:text-white">{s.name}</span>
                                                        <span className="font-medium text-text-main dark:text-white">£{s.price.toFixed(2)}</span>
                                                    </div>
                                                    <p className="text-sm text-text-subtle dark:text-gray-400">{s.serves}</p>
                                                </div>
                                                <div className={`ml-4 w-5 h-5 flex items-center justify-center rounded-full border ${size.name === s.name ? 'border-primary bg-primary' : 'border-border-soft dark:border-gray-600'}`}>
                                                    {size.name === s.name && <Check size={14} className="text-white" />}
                                                </div>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Estimated Price Warning */}
                                    <div className="mt-6 flex items-start gap-3 rounded-xl bg-rose-50 p-4 text-sm text-rose-800 dark:bg-rose-950/30 dark:text-rose-200 border border-rose-100 dark:border-rose-900/50">
                                        <span className="material-symbols-outlined shrink-0 text-rose-500">info</span>
                                        <p>Prices are estimates. Final price may vary based on complex customizations in later steps. Allergens can be specified at checkout.</p>
                                    </div>
                                </section>

                                {/* Size Guide Banner */}
                                <div className="mt-2 mb-4 relative overflow-hidden rounded-2xl bg-slate-800 text-white shadow-md">
                                    <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                                        <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop" alt="Cake Background" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="relative p-8 md:p-10 max-w-lg z-10 flex flex-col items-start">
                                        <h3 className="text-2xl font-bold mb-2 text-white">Unsure about size?</h3>
                                        <p className="text-white/90 text-sm mb-6 leading-relaxed">Check our detailed serving guide with visual examples to ensure everyone gets a slice of happiness.</p>
                                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition-colors text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm" onClick={(e) => { e.preventDefault(); alert("Size guide visual pop-up will open here. You can add your image to this modal later."); }}>
                                            Open Visual Size Guide
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step-2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-10"
                            >
                                {/* Sponge */}
                                <section>
                                    <h2 className="text-xl font-bold mb-4 dark:text-white">Sponge Flavor</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {SPONGES.map(s => (
                                            <label key={s.name} className="group cursor-pointer relative">
                                                <input
                                                    type="radio"
                                                    name="sponge"
                                                    checked={sponge === s.name}
                                                    onChange={() => setSponge(s.name)}
                                                    className="peer sr-only"
                                                />
                                                <div className="h-full flex flex-col items-center p-4 rounded-xl border-2 bg-white dark:bg-surface-dark transition-all peer-checked:border-primary peer-checked:bg-primary/5 border-transparent hover:border-border-soft dark:hover:border-gray-700">
                                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full overflow-hidden shadow-sm">
                                                        <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <h3 className="font-bold text-sm text-text-main dark:text-white text-center leading-tight">{s.name}</h3>
                                                    <p className="text-xs text-text-subtle dark:text-gray-400 mt-1 text-center">{s.desc}</p>
                                                    {sponge === s.name && (
                                                        <div className="absolute top-2 right-2 text-primary">
                                                            <Check size={18} />
                                                        </div>
                                                    )}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </section>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Filling */}
                                    <section>
                                        <h2 className="text-xl font-bold mb-4 dark:text-white">Filling</h2>
                                        <div className="flex flex-col gap-3">
                                            {FILLINGS.map(f => (
                                                <label key={f.name} className="flex items-center p-3 rounded-lg border border-border-soft dark:border-white/10 hover:border-primary cursor-pointer bg-white dark:bg-surface-dark transition-colors">
                                                    <input
                                                        type="radio"
                                                        name="filling"
                                                        checked={filling.name === f.name}
                                                        onChange={() => setFilling(f)}
                                                        className="text-primary focus:ring-primary w-5 h-5 accent-primary cursor-pointer"
                                                    />
                                                    <span className="ml-3 font-medium text-text-main dark:text-white text-sm">{f.name}</span>
                                                    <span className="ml-auto text-sm text-primary">{f.price > 0 ? `+£${f.price.toFixed(2)}` : 'Included'}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Frosting */}
                                    <section>
                                        <h2 className="text-xl font-bold mb-4 dark:text-white">Outer Frosting</h2>
                                        <div className="flex flex-col gap-3">
                                            {FROSTINGS.map(f => (
                                                <label key={f.name} className="flex items-center p-3 rounded-lg border border-border-soft dark:border-white/10 hover:border-primary cursor-pointer bg-white dark:bg-surface-dark transition-colors">
                                                    <input
                                                        type="radio"
                                                        name="frosting"
                                                        checked={frosting.name === f.name}
                                                        onChange={() => setFrosting(f)}
                                                        className="text-primary focus:ring-primary w-5 h-5 accent-primary cursor-pointer"
                                                    />
                                                    <span className="ml-3 font-medium text-text-main dark:text-white text-sm">{f.name}</span>
                                                    <span className="ml-auto text-sm text-primary">{f.price > 0 ? `+£${f.price.toFixed(2)}` : 'Included'}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Design */}
                                <section>
                                    <h2 className="text-xl font-bold mb-4 dark:text-white">Design Aesthetic</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {DESIGNS.map(d => (
                                            <label key={d.name} className="group cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="design"
                                                    checked={design === d.name}
                                                    onChange={() => setDesign(d.name)}
                                                    className="peer sr-only"
                                                />
                                                <div className={`rounded-xl overflow-hidden border-2 relative aspect-[4/5] transition-all ${design === d.name ? 'border-primary ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark' : 'border-transparent'}`}>
                                                    <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                                                        <span className="text-white font-bold leading-tight">{d.name}</span>
                                                        <span className="text-white/80 text-xs mt-0.5">{d.desc}</span>
                                                    </div>
                                                    {design === d.name && (
                                                        <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                                                            <Check size={16} />
                                                        </div>
                                                    )}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </section>

                                {/* Color Theme */}
                                <section>
                                    <h2 className="text-xl font-bold mb-4 dark:text-white">Primary Color Theme</h2>
                                    <div className="flex flex-wrap gap-4">
                                        {COLORS.map(c => (
                                            <label key={c.name} className="cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="color"
                                                    checked={color === c.name}
                                                    onChange={() => setColor(c.name)}
                                                    className="peer sr-only"
                                                />
                                                <div
                                                    className={`w-12 h-12 rounded-full ring-2 ring-offset-2 ring-transparent peer-checked:ring-primary dark:ring-offset-background-dark hover:scale-110 transition-all flex items-center justify-center ${c.border || ''}`}
                                                    style={{ backgroundColor: c.hex }}
                                                >
                                                    {color === c.name && <Check size={20} className={c.textClass} />}
                                                </div>
                                                <span className="block text-center text-xs mt-1 text-text-subtle dark:text-gray-400 font-medium">{c.name}</span>
                                            </label>
                                        ))}
                                    </div>
                                </section>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step-3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-10"
                            >
                                {/* Toppings */}
                                <section>
                                    <h3 className="mb-4 text-xl font-bold text-text-main dark:text-white">Select Toppings</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {TOPPINGS.map(t => (
                                            <label key={t.name} className="group relative cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={toppings.includes(t.name)}
                                                    onChange={() => toggleTopping(t.name)}
                                                    className="peer sr-only"
                                                />
                                                <div className={`flex h-24 flex-col items-center justify-center rounded-xl border-2 border-border-soft bg-white dark:bg-surface-dark dark:border-white/10 p-3 text-center transition-all peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50`}>
                                                    <span className={`material-symbols-outlined mb-2 text-2xl ${toppings.includes(t.name) ? 'text-primary' : 'text-text-muted dark:text-gray-400 group-hover:text-primary'}`}>{t.icon}</span>
                                                    <span className="text-sm font-medium text-text-main dark:text-white">{t.name} (+£{t.price})</span>
                                                </div>
                                                {toppings.includes(t.name) && (
                                                    <div className="absolute right-2 top-2 flex bg-primary text-white rounded-full p-0.5">
                                                        <Check size={14} />
                                                    </div>
                                                )}
                                            </label>
                                        ))}
                                    </div>
                                </section>

                                {/* Message & File Upload */}
                                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-base font-bold text-text-main dark:text-white">Custom Message on Cake</label>
                                        <p className="text-xs text-text-muted dark:text-gray-400">Max 30 characters. Hand piped.</p>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            maxLength={30}
                                            className="min-h-[140px] w-full resize-none rounded-xl border border-border-soft bg-white p-4 text-sm text-text-main focus:border-primary focus:ring-1 focus:outline-none focus:ring-primary dark:border-white/10 dark:bg-surface-dark dark:text-white"
                                            placeholder="Happy Birthday Sarah!"
                                        ></textarea>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-base font-bold text-text-main dark:text-white">Reference Images (Optional)</label>
                                        <p className="text-xs text-text-muted dark:text-gray-400">Upload sketches or inspiration photos.</p>
                                        <label className="flex min-h-[140px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border-soft bg-white transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-surface-dark dark:hover:bg-white/5">
                                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                                <UploadCloud className="mb-2 text-primary" size={28} />
                                                <p className="mb-1 text-sm text-text-muted dark:text-gray-300"><span className="font-semibold text-primary">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-text-muted dark:text-gray-500">SVG, PNG, JPG (MAX. 5MB)</p>
                                            </div>
                                            <input type="file" className="hidden" />
                                        </label>
                                    </div>
                                </section>

                                {/* Order Logistics */}
                                <section className="rounded-2xl bg-white p-6 shadow-sm border border-border-soft dark:bg-surface-dark dark:border-white/10">
                                    <h3 className="mb-6 text-xl font-bold text-text-main dark:text-white">Order Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted dark:text-gray-400">Dietary</h4>
                                            <div className="space-y-3">
                                                {['Gluten Free Layer', 'Nut Free Preparation', 'Vegan Frosting'].map(req => (
                                                    <label key={req} className="flex items-center gap-3 cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={dietary.includes(req)}
                                                            onChange={() => toggleDietary(req)}
                                                            className="w-5 h-5 rounded border-border-soft text-primary focus:ring-primary accent-primary cursor-pointer"
                                                        />
                                                        <span className="text-sm font-medium text-text-main dark:text-gray-200">{req}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted dark:text-gray-400">Date Required</h4>
                                                <input
                                                    type="date"
                                                    value={dateRequired}
                                                    onChange={(e) => setDateRequired(e.target.value)}
                                                    className="w-full rounded-lg border border-border-soft bg-white px-4 py-2 text-sm text-text-main focus:border-primary focus:ring-1 focus:outline-none focus:ring-primary dark:border-white/10 dark:bg-surface-dark dark:text-white dark:[color-scheme:dark]"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted dark:text-gray-400">Fulfillment Method</h4>
                                                <div className="flex gap-4">
                                                    {['Pickup', 'Delivery'].map(method => (
                                                        <label key={method} className="flex-1 cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name="fulfillment"
                                                                checked={fulfillment === method}
                                                                onChange={() => setFulfillment(method)}
                                                                className="peer sr-only"
                                                            />
                                                            <div className="flex items-center justify-center gap-2 rounded-lg border border-border-soft bg-white py-2.5 text-sm font-medium text-text-main peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary dark:border-white/10 dark:bg-surface-dark dark:text-gray-300 dark:peer-checked:bg-primary/10">
                                                                <span className="material-symbols-outlined text-lg">{method === 'Pickup' ? 'storefront' : 'local_shipping'}</span>
                                                                {method}
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Column: Sticky Summary */}
                <div className="lg:w-[380px] shrink-0">
                    <div className="sticky top-28 flex flex-col gap-4">
                        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-border-soft dark:border-white/10 overflow-hidden">
                            <div className="p-6 border-b border-border-soft dark:border-white/10 bg-gray-50/50 dark:bg-white/5">
                                <h3 className="font-bold text-lg text-text-main dark:text-white">Your Cake Summary</h3>
                                <p className="text-sm text-text-subtle dark:text-gray-400">Review your choices.</p>
                            </div>

                            {step === 3 && (
                                <div className="px-6 pt-6 -mb-2">
                                    <div className="relative aspect-square min-h-[250px] w-full overflow-hidden rounded-xl bg-primary/5 dark:bg-surface-dark border border-border-soft dark:border-white/10 group">
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-black/5">
                                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDowlV7on03yu9F9CC00cIsd2PgOBEz47NnUBmCvWgEkW1X0UysvAciIn6KrXpRQlx3aGGSBidjuREO8_fkK3BX1CMxMYwl5ONE9me2LVr8-4UqqQ2OpOlHIcypLXzNuIWn1UwaM38tLJoqZma0ZtSn9IPRL_uX91M2U0p79PagmpnwJC4PopkTJpB4Ev2fTs183VCXkHGngEBNRf5IbJ2Ssu-6Dw5d1sinx-u7aHVJh42QrOFspW3ClwliTdYWOa3AWD7E6_3e-A8" alt="Cake Preview" className="w-full h-full object-cover opacity-90 mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded shadow-sm text-xs font-bold text-text-main">
                                            {size.name.split(' (')[0]} • {sponge.split(' ')[0]}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="p-6 flex flex-col gap-4">
                                {step >= 1 && (
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs text-text-muted dark:text-gray-400 uppercase font-bold">Base</p>
                                            <p className="text-text-main dark:text-white font-medium text-sm">{size.name} • {shape}</p>
                                        </div>
                                        <span className="text-text-main dark:text-white font-bold text-sm">£{size.price.toFixed(2)}</span>
                                    </div>
                                )}

                                {step >= 2 && (
                                    <>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-xs text-text-muted dark:text-gray-400 uppercase font-bold">Flavor</p>
                                                <p className="text-text-main dark:text-white font-medium text-sm">{sponge} Sponge</p>
                                            </div>
                                            <span className="text-text-subtle dark:text-gray-400 text-sm">Included</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-xs text-text-muted dark:text-gray-400 uppercase font-bold">Filling</p>
                                                <p className="text-text-main dark:text-white font-medium text-sm">{filling.name}</p>
                                            </div>
                                            <span className="text-text-main dark:text-white font-bold text-sm">{filling.price > 0 ? `+£${filling.price.toFixed(2)}` : 'Included'}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-xs text-text-muted dark:text-gray-400 uppercase font-bold">Design</p>
                                                <p className="text-text-main dark:text-white font-medium text-sm">{design} • {color}</p>
                                            </div>
                                            <span className="text-text-subtle dark:text-gray-400 text-sm">Included</span>
                                        </div>
                                    </>
                                )}

                                {step >= 3 && toppings.length > 0 && (
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs text-text-muted dark:text-gray-400 uppercase font-bold">Toppings</p>
                                            <p className="text-text-main dark:text-white font-medium text-sm">{toppings.join(', ')}</p>
                                        </div>
                                        <span className="text-text-main dark:text-white font-bold text-sm">
                                            +£{toppings.reduce((acc, tName) => acc + (TOPPINGS.find(t => t.name === tName)?.price || 0), 0).toFixed(2)}
                                        </span>
                                    </div>
                                )}

                                <div className="h-px bg-border-soft dark:bg-white/10 my-2"></div>

                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-text-main dark:text-white">Total</span>
                                    <span className="text-2xl font-black text-primary">£{calculateTotal().toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-white/5 border-t border-border-soft dark:border-white/10">
                                {step < 3 ? (
                                    <button
                                        onClick={nextStep}
                                        className="w-full flex items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold shadow-md hover:bg-primary-dark transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:ring-offset-background-dark group"
                                    >
                                        Next Step
                                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            addToCart({
                                                id: `custom-${Date.now()}`,
                                                type: 'custom_cake',
                                                title: `Custom ${occasion} Cake (${shape})`,
                                                price: calculateTotal(),
                                                quantity: 1,
                                                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDowlV7on03yu9F9CC00cIsd2PgOBEz47NnUBmCvWgEkW1X0UysvAciIn6KrXpRQlx3aGGSBidjuREO8_fkK3BX1CMxMYwl5ONE9me2LVr8-4UqqQ2OpOlHIcypLXzNuIWn1UwaM38tLJoqZma0ZtSn9IPRL_uX91M2U0p79PagmpnwJC4PopkTJpB4Ev2fTs183VCXkHGngEBNRf5IbJ2Ssu-6Dw5d1sinx-u7aHVJh42QrOFspW3ClwliTdYWOa3AWD7E6_3e-A8',
                                                options: [
                                                    `Size: ${size.name}`,
                                                    `Sponge: ${sponge}`,
                                                    `Filling: ${filling.name}`,
                                                    `Frosting: ${frosting.name}`,
                                                    `Design: ${design} (${color})`,
                                                    ...(toppings.length > 0 ? [`Toppings: ${toppings.join(', ')}`] : []),
                                                ]
                                            });
                                            navigate('/checkout'); // Optional: redirect to checkout upon order
                                        }}
                                        className="w-full flex items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold shadow-md hover:bg-primary-dark transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:ring-offset-background-dark group"
                                    >
                                        <ShoppingBag className="mr-2" size={18} />
                                        Add to Cart (£{calculateTotal().toFixed(2)})
                                    </button>
                                )}

                                {step > 1 && (
                                    <button
                                        onClick={prevStep}
                                        className="w-full flex items-center justify-center mt-3 text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white transition-colors gap-1"
                                    >
                                        <ChevronLeft size={16} /> Back
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Need Help Box */}
                        <div className="mt-4 flex items-center gap-4 rounded-xl border border-border-soft bg-white p-5 shadow-sm dark:border-white/10 dark:bg-surface-dark">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-2xl">support_agent</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-text-main dark:text-white tracking-tight">Need help deciding?</h4>
                                <a href="tel:07584943232" className="mt-0.5 block text-sm font-semibold text-primary hover:text-primary-dark transition-colors">Call us now: 07584943232</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};
