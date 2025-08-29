import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Download } from 'lucide-react';
import profile from "../../assets/profile.jpg";
import { useEffect, useState } from 'react';
import resumePdf from "../../assets/my-resume.pdf";

const HeroSection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [currentRole, setCurrentRole] = useState('Frontend Developer');
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => 
        prev === 'Frontend Developer' ? 'Graphic Designer' : 'Frontend Developer'
      );
      setAnimationKey(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Social Icons Column */}
        <div className="flex md:flex-col items-center gap-6 mt-8 md:mt-0">
          <motion.a
            href="https://www.linkedin.com/in/benjamin-gotah-145ba5277" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-600 hover:text-[#0077b5] dark:text-gray-300 dark:hover:text-[#0077b5]"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a
            href="mailto:benjamingotah@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-600 hover:text-[#ea4335] dark:text-gray-300 dark:hover:text-[#ea4335]"
            aria-label="Send Email"
          >
            <Mail size={20} />
          </motion.a>

          <motion.a
            href="tel:+233257441210"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            aria-label="Call Phone"
          >
            <Phone size={20} />
          </motion.a>
        </div>

        {/* Text Content */}
        <div className="md:flex-1 text-center md:text-left">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Benjamin
          </motion.h1>
          
          <div className="h-8 md:h-10 overflow-hidden relative mb-4">
            <motion.p
              key={animationKey}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-600 dark:text-blue-400 text-xl absolute w-full"
            >
              {currentRole}
            </motion.p>
          </div>

          <motion.p 
            className="text-gray-500 dark:text-gray-300 mb-6 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
             I build scalable web applications with clean, maintainable code and strong foundations in data structures and algorithms. I thrive in collaborative environments where I can contribute both technical skills and problem-solving abilities.
          </motion.p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Contact Me
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>

            <motion.a
              href={resumePdf} // Update with your actual resume path
              download ="Benjamin-Gotah-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white px-6 py-3 rounded-md transition-colors"
            >
              Download Resume
              <Download className="w-4 h-4 ml-2" />
            </motion.a>
          </div>
        </div>

        {/* Enhanced Profile Image */}
        <motion.div 
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
          </div>
          
          {/* Main image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
            <motion.img 
              src={profile}
              alt="Benjamin - Developer" 
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating elements */}
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>👨‍💻</span>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span>🎨</span>
          </motion.div>
        </motion.div>

        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;