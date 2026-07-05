import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingActions from './components/FloatingActions';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import DigitalCard from './pages/DigitalCard';

// Scroll to Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If the path doesn't contain a hash (e.g. hash routing in Services/Products), scroll to top
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Mock loading duration for premium entry feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const isCardPage = location.pathname === '/card' || location.pathname === '/digital-card';

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen">
        {!isCardPage && <Navbar />}
        
        {/* Main Content Area */}
        <main className="flex-grow pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/card" element={<DigitalCard />} />
                <Route path="/digital-card" element={<DigitalCard />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        {!isCardPage && <Footer />}
        {!isCardPage && <FloatingActions />}
      </div>
    </>
  );
}
