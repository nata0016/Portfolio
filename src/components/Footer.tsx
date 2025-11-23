import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#513F3D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-white">Your Name</h3>
            <p className="text-[#E4CFC2]">
              Creating meaningful digital experiences through design and
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[#E4CFC2] hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-[#E4CFC2] hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#E4CFC2] hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-2 text-[#E4CFC2]">
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-white transition-colors"
                >
                  your.email@example.com
                </a>
              </li>
              <li>Your City, Country</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#891824]/30">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#E4CFC2]"
          >
            <p className="flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-[#891824] fill-[#891824]" />{' '}
              by Your Name
            </p>
            <p>&copy; {currentYear} All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}