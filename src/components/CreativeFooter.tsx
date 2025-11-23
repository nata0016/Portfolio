import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/5cb1181d87e59a99a6b6dd0b6bfdbe14ad91c5f0.png';

export function CreativeFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t-2 border-black py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center p-2">
                <ImageWithFallback 
                  src={logoImage} 
                  alt="Ghita Natami Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl">Ghita Natami</h3>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm tracking-widest mb-4 text-gray-600">NAVIGATION</h4>
            <ul className="space-y-2">
              {['Home', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg hover:text-[#891824] transition-colors inline-block hover:translate-x-2 transition-transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm tracking-widest mb-4 text-gray-600">CONTACT</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:nata0016@algonquinlive.com"
                  className="text-lg hover:text-[#891824] transition-colors"
                >
                  nata0016@algonquinlive.com
                </a>
              </li>
              <li className="text-gray-600">Gatineau, Canada</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Decorative Shape */}
      <motion.div
        className="absolute -bottom-20 right-0 w-96 h-96 bg-[#891824]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
    </footer>
  );
}