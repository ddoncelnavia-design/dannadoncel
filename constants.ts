import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, CATEGORY_SLUGS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-black tracking-tighter" onClick={() => setIsOpen(false)}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            DANNA<span className="text-brand-emerald">DONCEL</span>
          </motion.div>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item}
              to={`/${CATEGORY_SLUGS[item]}`}
              className={({ isActive }) => 
                `relative px-4 py-2 text-[10px] font-bold tracking-[0.2em] transition-all uppercase ${
                  isActive ? 'text-brand-emerald' : 'text-brand-beige hover:text-brand-black'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="navItemUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-emerald"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden p-2 text-brand-black hover:text-brand-emerald transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item}
                  to={`/${CATEGORY_SLUGS[item]}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all border-b border-gray-50 last:border-0 ${
                      isActive ? 'text-brand-emerald' : 'text-brand-beige'
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
