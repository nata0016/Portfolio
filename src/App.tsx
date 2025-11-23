import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreativeNav } from './components/CreativeNav';
import { CreativeHome } from './components/CreativeHome';
import { CreativePortfolio } from './components/CreativePortfolio';
import { CreativeContact } from './components/CreativeContact';
import { CreativeFooter } from './components/CreativeFooter';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Custom cursor tracking
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="w-24 h-24 border-4 border-[#891824] border-t-transparent rounded-full"
        />
      </motion.div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="hidden lg:block fixed w-6 h-6 border-2 border-[#891824] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 500,
          mass: 0.5,
        }}
      />

      {/* Navigation */}
      <CreativeNav currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {currentPage === 'home' && <CreativeHome onNavigate={handleNavigate} />}
          {currentPage === 'portfolio' && <CreativePortfolio />}
          {currentPage === 'contact' && <CreativeContact />}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <CreativeFooter />
    </div>
  );
}

export default App;