import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/5cb1181d87e59a99a6b6dd0b6bfdbe14ad91c5f0.png';

interface CreativeNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function CreativeNav({ currentPage, onNavigate }: CreativeNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', number: '01' },
    { id: 'portfolio', label: 'WORK', number: '02' },
    { id: 'contact', label: 'CONTACT', number: '03' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Navigation Trigger */}
      <motion.div
        className="fixed top-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#891824] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#513F3D] transition-colors relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#E4CFC2]"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="relative z-10"
              >
                <X className="w-6 h-6 text-white group-hover:text-[#891824]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative z-10"
              >
                <Menu className="w-6 h-6 text-white group-hover:text-[#891824]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Brand Mark */}
      <motion.div
        className="fixed top-8 left-8 z-40"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={() => handleNavigate('home')}
          className="group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center p-3">
              <ImageWithFallback 
                src={logoImage}
                alt="Ghita Natami Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block">
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="h-full flex items-center justify-center">
              <nav className="text-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="mb-8 group cursor-pointer"
                    onClick={() => handleNavigate(item.id)}
                  >
                    <div className="flex items-center justify-center gap-8">
                      <motion.span
                        className="text-[#891824] text-2xl tracking-widest"
                        whileHover={{ x: -10 }}
                      >
                        {item.number}
                      </motion.span>
                      <motion.h2
                        className={`text-6xl md:text-8xl tracking-tight ${
                          currentPage === item.id ? 'text-[#891824]' : 'text-white'
                        }`}
                        whileHover={{ scale: 1.05, color: '#891824' }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.h2>
                      <motion.div
                        className="w-0 h-1 bg-[#891824] group-hover:w-20 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Social Links in Menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-20 flex justify-center gap-8"
                >
                  {[
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ghita-natami-178906263/' },
                    { name: 'GitHub', url: 'https://github.com/nata0016' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E4CFC2] hover:text-[#891824] transition-colors text-sm tracking-widest"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </motion.div>
              </nav>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#891824] rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}