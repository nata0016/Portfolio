import { motion } from 'motion/react';
import { ArrowRight, Code, Palette, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and interactive web experiences',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: Sparkles,
      title: 'Creative Solutions',
      description: 'Innovative approaches to complex problems',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E4CFC2] via-white to-[#E4CFC2]/50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#891824]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#513F3D]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-[#E4CFC2] text-[#513F3D] rounded-full">
                Creative Professional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#891824] to-[#513F3D] bg-clip-text text-transparent">
                Your Name
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              Designer & Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 mb-8 max-w-lg"
            >
              I create meaningful digital experiences through thoughtful design
              and innovative development. Passionate about crafting solutions
              that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => onNavigate('portfolio')}
                className="bg-gradient-to-r from-[#891824] to-[#513F3D] hover:from-[#891824]/90 hover:to-[#513F3D]/90"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="border-[#891824] text-[#891824] hover:bg-[#E4CFC2]"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzYzNjQ0MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#891824]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#891824] to-[#513F3D] rounded-full blur-2xl opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">About Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A passionate creative professional with a keen eye for detail and
              a drive to create exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-gradient-to-br from-[#E4CFC2] to-white rounded-2xl border border-[#E4CFC2] hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#891824] to-[#513F3D] rounded-xl flex items-center justify-center mb-4">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume/Experience Section */}
      <section className="py-24 bg-gradient-to-br from-[#E4CFC2]/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="mb-8">Experience & Education</h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-4 border-[#891824] pl-6"
              >
                <div className="text-[#891824] mb-1">2023 - Present</div>
                <h3 className="mb-2">Multimedia Design Program</h3>
                <p className="text-gray-600">
                  Developing expertise in web development, graphic design, and
                  digital media creation. Focus on creating user-centered
                  designs and interactive experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border-l-4 border-[#513F3D] pl-6"
              >
                <div className="text-[#513F3D] mb-1">2022 - 2023</div>
                <h3 className="mb-2">Freelance Creative Work</h3>
                <p className="text-gray-600">
                  Collaborated with clients on various design and development
                  projects, delivering custom solutions that exceeded
                  expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-gray-400 pl-6"
              >
                <div className="text-gray-600 mb-1">Foundation</div>
                <h3 className="mb-2">Continuous Learning</h3>
                <p className="text-gray-600">
                  Self-taught in modern web technologies, design principles,
                  and creative tools. Always exploring new techniques and
                  staying current with industry trends.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#891824] to-[#513F3D]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white"
        >
          <h2 className="mb-6 text-white">Ready to work together?</h2>
          <p className="mb-8 text-[#E4CFC2]">
            Let's create something amazing. Get in touch to discuss your next
            project.
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            variant="outline"
            className="bg-white text-[#891824] hover:bg-[#E4CFC2] border-none"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}