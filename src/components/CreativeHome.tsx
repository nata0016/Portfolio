import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Sparkles, Code, Palette, Zap, Figma, Github } from 'lucide-react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from 'figma:asset/39584e98a834142eac1f7d08092ad669c6cc2090.png';

// Tool logos
import afterEffectsLogo from 'figma:asset/34d406fa66a3ff76480bbf2c2003e8da22e2a704.png';
import indesignLogo from 'figma:asset/6e1d97b5349bbd149d3d953eb91d6021be6ee8f0.png';
import photoshopLogo from 'figma:asset/883041b081a6b3bbf8be40406bb1017a1f4f1ae3.png';
import premiereLogo from 'figma:asset/e76451866df65e6f7f9346ae1832f552ee60fdb4.png';
import xdLogo from 'figma:asset/8156eb74e6280d300206270ec18bcfd8a0c40d7a.png';
import canvaLogo from 'figma:asset/e47ad916956666420d43e26b05e3fdcd6a15bb7f.png';
import figmaLogo from 'figma:asset/8ebdd5fda39d6f7dc5186a772dab05cb1f3d0576.png';
import githubLogo from 'figma:asset/5a5c2aa6caa674cb04f457343c41ee469620bf05.png';
import illustratorLogo from 'figma:asset/b89fa2d0ecce06aee054e651097e62fa00eb9d84.png';
import excelLogo from 'figma:asset/d0c1e68696051b9d834487581b4659e89679ba17.png';
import wordLogo from 'figma:asset/40d384945871962c2600570dea5804ab695b1000.png';
import powerpointLogo from 'figma:asset/c0fd186f0c45c5c01b8d65bfb38ee4df3bfbcfa9.png';
import reactLogo from 'figma:asset/834235fb8b56acffcb1fb48f338bb91938089f89.png';
import tailwindLogo from 'figma:asset/bd7506b43042a181e6f6a19dabea5814f23e40f7.png';
import vscodeLogo from 'figma:asset/b9bd65818fa0387a381b7253d268518ad53e13c4.png';
import metaAdsLogo from 'figma:asset/30438e3aede81ae4901adfdc71b62355349cbe93.png';

interface CreativeHomeProps {
  onNavigate: (page: string) => void;
}

export function CreativeHome({ onNavigate }: CreativeHomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - Creative Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#891824] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 0.9, 1.2, 1],
              opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
              x: [0, -100, 50, -50, 0],
              y: [0, 50, -30, 100, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#513F3D] rounded-full blur-3xl"
            animate={{
              scale: [1.2, 0.8, 1.4, 1, 1.2],
              opacity: [0.4, 0.6, 0.2, 0.5, 0.4],
              x: [0, 100, -50, 80, 0],
              y: [0, -80, 40, -40, 0],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
          style={{ y, opacity }}
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-[#891824]/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#891824]" />
          </motion.div>

          {/* Main Headline - Staggered Animation */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="overflow-hidden"
            >
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-7xl md:text-9xl text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, letterSpacing: '-0.02em' }}
              >
                Ghita Natami
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-4xl md:text-6xl bg-gradient-to-r from-[#891824] to-[#E4CFC2] bg-clip-text text-transparent"
              >
                UX Designer & Web Developer
              </motion.div>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="text-xl md:text-2xl text-[#E4CFC2] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Crafting iconic digital experiences that blend design excellence
            with technical innovation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              onClick={() => onNavigate('portfolio')}
              className="bg-[#891824] hover:bg-[#891824]/90 text-white px-8 py-6 text-lg rounded-full group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 text-white flex items-center gap-2">
                View My Work
              </span>
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full"
            >
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#E4CFC2]"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="relative min-h-screen bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Large Statement */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[#891824] text-sm tracking-widest mb-4">ABOUT ME</div>
              <h2 className="text-6xl md:text-7xl mb-8 leading-none">
                I create
                <br />
                <span className="italic text-[#513F3D]">memorable</span>
                <br />
                experiences
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                I'm a UX designer and web developer who loves turning wild ideas 
                into delightful digital realities. I blend eye-catching visuals 
                with smooth, intuitive flows to craft experiences that don't just 
                catch your eye—they make you smile while you click.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-black text-white hover:bg-[#891824] rounded-full px-8 py-6"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative Background Elements */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-[#891824] to-[#513F3D] rounded-[3rem] blur-2xl opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-[3rem] border-4 border-black shadow-2xl"
                >
                  <ImageWithFallback
                    src={profileImage}
                    alt="Ghita Natami"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Decorative Corner Element */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-[#891824] rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-2 bg-[#E4CFC2] rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Shape */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-[#891824]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </section>

      {/* Tools & Technologies Section */}
      <section className="relative py-32 bg-[#E4CFC2] overflow-hidden">
        {/* Decorative background blobs */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#891824]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-[#891824] text-sm tracking-widest mb-4">TOOLS & TECHNOLOGIES</div>
            <h2 className="text-6xl md:text-7xl mb-6">My Toolkit</h2>
            <p className="text-xl text-[#513F3D] max-w-2xl mx-auto">
              Mastering industry-leading tools to bring creative visions to life
            </p>
          </motion.div>

          {/* Creative Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {[
              { name: 'Figma', logo: figmaLogo, color: '#F24E1E' },
              { name: 'VS Code', logo: vscodeLogo, color: '#007ACC' },
              { name: 'GitHub', logo: githubLogo, color: '#181717' },
              { name: 'React', logo: reactLogo, color: '#61DAFB' },
              { name: 'Tailwind', logo: tailwindLogo, color: '#06B6D4' },
              { name: 'Adobe Photoshop', logo: photoshopLogo, color: '#31A8FF' },
              { name: 'Adobe Illustrator', logo: illustratorLogo, color: '#FF9A00' },
              { name: 'Adobe InDesign', logo: indesignLogo, color: '#FF3366' },
              { name: 'Adobe XD', logo: xdLogo, color: '#FF61F6' },
              { name: 'Adobe After Effects', logo: afterEffectsLogo, color: '#9999FF' },
              { name: 'Adobe Premiere Pro', logo: premiereLogo, color: '#9999FF' },
              { name: 'Canva', logo: canvaLogo, color: '#00C4CC' },
              { name: 'Microsoft Word', logo: wordLogo, color: '#2B579A' },
              { name: 'Microsoft Excel', logo: excelLogo, color: '#217346' },
              { name: 'Microsoft PowerPoint', logo: powerpointLogo, color: '#D24726' },
              { name: 'Meta Ads', logo: metaAdsLogo, color: '#0668E1' },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: [0.76, 0, 0.24, 1]
                }}
                className="group relative"
              >
                {/* Card Container */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${tool.color}15, ${tool.color}05)`
                    }}
                  />
                  
                  {/* Logo */}
                  <div className="relative z-10 mb-3">
                    <ImageWithFallback
                      src={tool.logo}
                      alt={tool.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Tool Name - Hidden by default, shown on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="relative z-10 text-center overflow-hidden"
                  >
                    <p className="text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tool.name}
                    </p>
                  </motion.div>

                  {/* Border Accent */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-[#891824] rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '60%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Floating Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -5 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {tool.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decorative Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-[#513F3D] italic text-lg">
              ...and always learning more
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills/Services Section - Bento Grid Style */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl text-white mb-6">What I Do</h2>
            <p className="text-xl text-[#E4CFC2]">Expertise across multiple disciplines</p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-[#891824] to-[#513F3D] p-12 rounded-3xl relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-4xl text-white mb-4">Web Development</h3>
                <p className="text-[#E4CFC2] text-lg">
                  Building responsive, performant websites with modern frameworks
                  and cutting-edge technologies. From concept to deployment.
                </p>
              </div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="md:row-span-2 bg-[#E4CFC2] p-12 rounded-3xl flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <h3 className="text-4xl mb-4">UI/UX Design</h3>
                <p className="text-gray-700 text-lg">
                  Creating intuitive interfaces that users love. Focused on
                  accessibility, usability, and beautiful aesthetics.
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 bg-[#891824] rounded-full self-end mt-8"
              />
            </motion.div>

            {/* Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-white p-12 rounded-3xl border-2 border-black group cursor-pointer"
            >
              <h3 className="text-4xl mb-4">Brand Identity</h3>
              <p className="text-gray-700 text-lg">
                Crafting memorable visual identities that tell your story and
                resonate with your audience across all touchpoints.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Minimal */}
      <section className="relative py-32 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-7xl md:text-9xl mb-8 leading-none">
            Let's create
            <br />
            <span className="italic bg-gradient-to-r from-[#891824] to-[#513F3D] bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white hover:bg-[#891824] px-12 py-8 text-xl rounded-full group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[#891824]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Start a Project</span>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}