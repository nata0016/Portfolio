import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pokemonImage from 'figma:asset/f84095a532fd1afa38b83681c3c54a0f415eefdf.png';
import contactBookImage from 'figma:asset/525c1436721563e6503934af0382bde754ca3f37.png';
import zaraImage from 'figma:asset/e3a5131134192537e784fc9e5a2b2bde129924d4.png';
import cityeaseImage from 'figma:asset/fe4d29faef8c1b8baa6f1f5175b386e3dabe8b0b.png';

const projects = [
  {
    id: 1,
    title: 'PokeNest App',
    category: 'web',
    description: 'A next-generation shopping experience with AI-powered recommendations and seamless checkout.',
    tags: ['React', 'Node.js', 'AI/ML'],
    image: pokemonImage,
    size: 'large',
  },
  {
    id: 2,
    title: 'Zara Prototype',
    category: 'design',
    description: 'Complete visual identity for a sustainable fashion startup.',
    tags: [],
    image: zaraImage,
    size: 'medium',
  },
  {
    id: 5,
    title: 'CITYEASE App',
    category: 'design',
    description: 'A user-centered map application designed to streamline navigation',
    tags: [],
    image: cityeaseImage,
    size: 'small',
  },
  {
    id: 6,
    title: 'Contact Book',
    category: 'web',
    description: 'Analytics dashboard with real-time data visualization.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Responsive Design'],
    image: contactBookImage,
    size: 'large',
  },
];

export function CreativePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web' },
    { id: 'design', label: 'UX/UI' },
    { id: 'mobile', label: 'E-commerce' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#891824] rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl text-white mb-6 leading-none" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, letterSpacing: '-0.02em' }}>
              Welcome to my Portfolio
            </h1>
            <p className="text-xl text-[#E4CFC2] max-w-2xl">
              A curated collection of my best projects showcasing creativity,
              technical skill, and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#891824] text-white'
                    : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Bento Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group cursor-pointer ${
                    project.size === 'large'
                      ? 'md:col-span-2 md:row-span-2'
                      : project.size === 'medium'
                      ? 'md:col-span-1 md:row-span-2'
                      : ''
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-black">
                    {/* Image */}
                    {project.id === 1 || project.id === 2 || project.id === 6 ? (
                      <motion.div
                        className="absolute inset-0 w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.id === 1 ? (
                            <>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                HTML
                              </Badge>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                CSS
                              </Badge>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                JavaScript
                              </Badge>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                Fetch API
                              </Badge>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                Responsive Design
                              </Badge>
                            </>
                          ) : project.id === 6 ? (
                            <>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                HTML
                              </Badge>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                CSS
                              </Badge>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                JavaScript
                              </Badge>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                Vue.js
                              </Badge>
                              <Badge className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]">
                                Responsive Design
                              </Badge>
                            </>
                          ) : (
                            project.tags.map((tag, index) => (
                              <Badge
                                key={tag}
                                className="bg-[#E4CFC2] text-black hover:bg-[#E4CFC2]"
                              >
                                {tag}
                              </Badge>
                            ))
                          )}
                        </div>
                        <h3 className="text-3xl text-white mb-2 group-hover:text-[#E4CFC2] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[#E4CFC2] opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.id === 1 
                            ? "A single page Pokémon web app built with modular JavaScript, Fetch API data loading, and responsive UI components for fast and fluid interactions."
                            : project.id === 2
                            ? "A full UX redesign of the Zara shopping experience"
                            : project.id === 5
                            ? "A user-centered map application designed to streamline navigation"
                            : project.id === 6
                            ? "A smooth, app like contact manager built with Vue.js, offering instant search, seamless editing, and persistent data powered by local storage. No refreshes, no friction."
                            : project.description}
                        </p>
                      </motion.div>

                      {/* Hover Arrow */}
                      <motion.div
                        className="absolute top-8 right-8 w-12 h-12 bg-[#891824] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.2, rotate: 45 }}
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-[#891824] rounded-full flex items-center justify-center hover:bg-[#513F3D] transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="relative h-96 overflow-hidden rounded-t-3xl">
                {selectedProject.id === 1 || selectedProject.id === 2 || selectedProject.id === 6 ? (
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} className="bg-[#E4CFC2] text-black text-sm px-4 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h2 className="text-5xl mb-4">{selectedProject.title}</h2>
                <p className="text-xl text-gray-600 mb-8">
                  {selectedProject.id === 1 
                    ? "A single page Pokémon web app built with modular JavaScript, Fetch API data loading, and responsive UI components for fast and fluid interactions."
                    : selectedProject.id === 2
                    ? "A full UX redesign of the Zara shopping experience"
                    : selectedProject.id === 5
                    ? "A user-centered map application designed to streamline navigation"
                    : selectedProject.id === 6
                    ? "A smooth, app like contact manager built with Vue.js, offering instant search, seamless editing, and persistent data powered by local storage. No refreshes, no friction."
                    : selectedProject.description}
                </p>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.id === 2 
                      ? "https://www.figma.com/design/FMlCJcNzOh1ttWf1eF1ZvR/zara-hi-fi?node-id=0-1&t=AycOGwmPaTPA7v5Q-1"
                      : selectedProject.id === 5
                      ? "https://www.figma.com/design/htC82DLiCtLGvqxwvxKlVL/team-5_hi-fi-wireframes?node-id=0-1&t=5LWaqVRADuOMEluA-1"
                      : "https://nata0016.github.io/mtm6302-capstone-nata0016/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#891824] text-white rounded-full hover:bg-[#513F3D] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    {selectedProject.id === 2 ? "Zara hi-fi" : selectedProject.id === 5 ? "CE hi-fi" : "View Live"}
                  </motion.a>
                  {selectedProject.id !== 5 && (
                    <motion.a
                      href={selectedProject.id === 2
                        ? "https://www.figma.com/design/8yDrlUxtPUH1tnqo0qNIdj/Zara-Lo-fi?node-id=2021-2&t=2gkxR5r2socu9PP3-1"
                        : "https://github.com/nata0016/mtm6302-capstone-nata0016/tree/part-4"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedProject.id === 2 ? <ExternalLink className="w-5 h-5" /> : <Github className="w-5 h-5" />}
                      {selectedProject.id === 2 ? "Zara lo-fi" : "Source Code"}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}