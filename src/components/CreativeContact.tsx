import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Instagram, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function CreativeContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ghita-natami-178906263/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/nata0016' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#891824] rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#891824]/20 backdrop-blur-sm rounded-full border border-[#891824] mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#891824]" />
              <span className="text-[#E4CFC2] text-sm tracking-widest">LET'S COLLABORATE</span>
            </motion.div>

            <h1 className="text-7xl md:text-9xl text-white mb-6 leading-none">
              Get In
              <br />
              <span className="italic bg-gradient-to-r from-[#891824] to-[#E4CFC2] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-[#E4CFC2] max-w-2xl mx-auto text-[20px]">
              Have a project in mind? Let's create something amazing together.
              I'm always open to discuss new opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-12"
            >
              <h2 className="text-4xl mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm tracking-widest mb-2 text-gray-600">
                    YOUR NAME
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#891824] transition-colors text-lg"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-widest mb-2 text-gray-600">
                    YOUR EMAIL
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#891824] transition-colors text-lg"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-widest mb-2 text-gray-600">
                    YOUR MESSAGE
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#891824] transition-colors text-lg min-h-[200px] resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#891824] hover:bg-[#513F3D] text-white px-8 py-6 text-lg rounded-xl group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="bg-gradient-to-br from-[#891824] to-[#513F3D] rounded-3xl p-12 text-white group cursor-pointer"
              >
                <Mail className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-sm tracking-widest mb-2 text-[#E4CFC2]">EMAIL</div>
                <a
                  href="mailto:nata0016@algonquinlive.com"
                  className="text-2xl hover:text-[#E4CFC2] transition-colors"
                >
                  nata0016@algonquinlive.com
                </a>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="bg-[#E4CFC2] rounded-3xl p-12 group cursor-pointer"
              >
                <MapPin className="w-12 h-12 mb-6 text-[#891824] group-hover:scale-110 transition-transform" />
                <div className="text-sm tracking-widest mb-2 text-gray-600">LOCATION</div>
                <div className="text-2xl">Gatineau, Canada</div>
              </motion.div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl p-12">
                <h3 className="text-2xl mb-8">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-[#891824] hover:bg-[#E4CFC2]/20 transition-all group"
                    >
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-[#891824] transition-colors">
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-black to-[#513F3D] rounded-3xl p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-sm tracking-widest">AVAILABLE FOR WORK</span>
                </div>
                <p className="text-[#E4CFC2]">
                  Currently accepting new projects for 2026. Let's build something
                  extraordinary!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl text-white mb-8 leading-none">
              Ready to start
              <br />
              <span className="italic text-[#891824]">your project?</span>
            </h2>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-black hover:bg-[#E4CFC2] px-12 py-8 text-xl rounded-full"
            >
              Scroll to Top
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}