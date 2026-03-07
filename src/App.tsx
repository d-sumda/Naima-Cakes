
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { CustomCakeBuilder } from './pages/CustomCakeBuilder';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Checkout } from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="relative flex min-h-screen w-full flex-col font-display text-text-main dark:text-gray-100 antialiased overflow-x-hidden">
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'font-display font-medium shadow-xl border border-primary/10 text-text-main dark:text-gray-100 dark:bg-surface-dark bg-white',
              duration: 3000
            }}
          />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/custom-cakes" element={<CustomCakeBuilder />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
