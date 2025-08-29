import { motion } from 'framer-motion';
import nodejs from "../../assets/nodejs.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import tailwind from "../../assets/tailwind.png";
import chakra from "../../assets/chakra.png";
import ps from "../../assets/ps.png";
import git from "../../assets/git.png";
import mongo from "../../assets/mongo.png";

const TechStack = () => {
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
    <section className="py-20 bg-gradient-to-r from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Technologies I Work With
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and tools that power my development workflow
          </p>
        </motion.div>

        {/* Rotating Tech Logos */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...techLogos, ...techLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
                <motion.div
                  className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/30 dark:border-gray-600/30"
                  whileHover={{ scale: 1.2, rotate: 360, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    className="w-16 h-16 object-contain"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
