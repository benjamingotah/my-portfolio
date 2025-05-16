import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Github, Image, Paintbrush } from 'lucide-react';
import bizee from "../../assets/bizee.jpg";
import micado from "../../assets/micado.jpg";
import tombrown from "../../assets/tombrown.jpg";
import data from "../../assets/data.jpg";
import book from "../../assets/book.jpg";
import ben from "../../assets/ben.jpg";
import iyf from "../../assets/iyf.jpg";
import wed from "../../assets/wed.jpg";
import nodejs from "../../assets/nodejs.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import tailwind from "../../assets/tailwind.png";
import chakra from "../../assets/chakra.png";
import free from "../../assets/free.png";
import ps from "../../assets/ps.png";
import pos from "../../assets/pos.png";
import git from "../../assets/git.png";
import mongo from "../../assets/mongo.png";
import portfolio from "../../assets/portfolio.png";
import bank from "../../assets/bank.png";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('software');
  const [selectedDesign, setSelectedDesign] = useState(null);

 
  const softwareProjects = [
    {
      id: 1,
      title: 'POS-Padi',
      description: 'POS-Padi is an agent-friendly fintech solution that simplifies transactions, balances tracking, and bill payments for Nigerian POS operators – delivering speed, reliability, and performance.',
      image:pos,
      stack: ['React', 'Node.js', 'Chakra ui', 'Javascript', 'Postman'],
      github: 'https://github.com/InternPulse/pos-padi-frontend',
      live: 'https://pospadi.com.ng'
    },
    {
      id: 1,
      title: 'Bank Dashboard',
      description: 'Collaborated with team of frontend engineers do implement the figma design of a bank dashboard at InternPulse',
      image: bank,
      stack: ['React', 'Git','Github', 'Tailwindcss'],
      github: 'https://github.com/InternPulse-Frontend-March-2025/bankdash',
      live: 'https://bankdash-team-2025.netlify.app/'
    },
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'Collaborated with team of frontend engineers do implement the figma design of a bank dashboard at InternPulse',
      image: portfolio,
      stack: ['React', 'Git','Github', 'Tailwindcss'],
      github: 'https://github.com/benjamingotah/my-portfolio',
      live: 'https://benjamingotah-portfolio.netlify.app/'
    },
    {
      id: 1,
      title: 'Freelancer Dashboard',
      description: 'A full-featured online store with cart functionality, user authentication, and payment processing.',
      image: free,
      stack: ['React', 'Node.js', 'Javascript', 'Chakra ui'],
      github: 'https://github.com/benjamingotah/Freelancer-Dash',
      live: 'https://super-medovik-320efa.netlify.app/'
    }
  ];

  const designProjects = [
    { id: 1, image: bizee, title: 'Flyer Design' },
    { id: 2, image: micado, title: 'Poster Design' },
    { id: 3, image: book, title: 'Book Cover' },
    { id: 4, image: ben, title: 'Logo Design' },
    { id: 5, image: tombrown, title: 'Social Media' },
    { id: 5, image: iyf, title: 'Brochure' },
    { id: 5, image: wed, title: 'Socia Media' },
    { id: 6, image: data, title: 'Social Media' }
  ];

  const techLogos = [
    { name: 'React', icon: react },
    { name: 'JavaScript', icon: js },
    { name: 'Html', icon: html },
    { name: 'Tailwindcss', icon: tailwind},
    { name: 'Photoshop', icon: ps},
    { name: 'Git', icon: git},
    { name: 'MongoDB', icon: mongo},
    { name: 'Chakra', icon: chakra},
    { name: 'Node.js', icon: nodejs }
  ];

  return (
    <section className=" min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h2>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            <button
              onClick={() => setActiveTab('software')}
              className={`px-6 py-2 rounded-md flex items-center gap-2 transition-colors ${activeTab === 'software' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              <Code2 className="w-5 h-5" />
              Software Projects
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-6 py-2 rounded-md flex items-center gap-2 transition-colors ${activeTab === 'design' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              <Paintbrush className="w-5 h-5" />
              Design Projects
            </button>
          </div>
        </div>

        {/* Software Projects */}
        {activeTab === 'software' && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {softwareProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Design Projects */}
        {activeTab === 'design' && (
          <div className="relative">
            {/* Thumbnail Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              layout
            >
              {designProjects.map((design) => (
                <motion.div
                  key={design.id}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedDesign(design)}
                  layout
                >
                  {/* Thumbnail Image with Cover Style */}
                  <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={design.image} 
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                      }}
                    />
                  </div>
                  
                  {/* Overlay Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <h3 className="text-white font-medium text-sm md:text-base truncate">
                      {design.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Design Viewer Modal */}
            <AnimatePresence>
              {selectedDesign && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedDesign(null)}
                >
                  <motion.div 
                    className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    transition={{ type: 'spring', damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {selectedDesign.title}
                      </h3>
                      <button 
                        onClick={() => setSelectedDesign(null)}
                        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="p-4 h-[calc(90vh-56px)] overflow-auto">
                      <img 
                        src={selectedDesign.image} 
                        alt={selectedDesign.title}
                        className="w-full h-auto max-h-full object-contain"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Rotating Tech Logos */}
        <div className="mt-24 overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...techLogos, ...techLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
                <motion.img
                  src={logo.icon}
                  alt={logo.name}
                  className="w-16 h-16 object-contain"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;