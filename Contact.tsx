import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-white font-sans text-brand-black selection:bg-brand-emerald selection:text-white flex flex-col pt-16 md:pt-20">
      <ProgressBar />
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Navigate to="/about" replace />} />
              
              <Route path="/about" element={
                <div className="space-y-0">
                  <Hero />
                  <About />
                  <Certifications />
                  <Contact />
                </div>
              } />
              
              <Route path="/design" element={<ProjectGrid activeCategory="DESIGN" />} />
              <Route path="/video" element={<ProjectGrid activeCategory="VIDEO" />} />
              <Route path="/photography" element={<ProjectGrid activeCategory="PHOTOGRAPHY" />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/seo" element={<ProjectGrid activeCategory="SEO" />} />
              <Route path="/paid-media" element={<ProjectGrid activeCategory="PAID MEDIA" />} />
              <Route path="/automation" element={<ProjectGrid activeCategory="AUTOMATION" />} />
              
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/about" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}
