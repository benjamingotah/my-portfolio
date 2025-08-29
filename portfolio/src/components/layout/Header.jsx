import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';
import MobileDrawer from './MobileDrawer';
import useScroll from '../hooks/useScroll';
import React from 'react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Contact', id: 'contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrolled = useScroll();
  const { darkMode } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 w-full transition-all duration-500 z-50 ${
        scrolled 
          ? darkMode 
            ? 'py-3 bg-gray-900/30 backdrop-blur-2xl border-b border-gray-700/20 shadow-2xl' 
            : 'py-3 bg-white/30 backdrop-blur-2xl border-b border-gray-200/30 shadow-xl'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <button 
            onClick={() => scrollToSection('home')}
            className={`text-xl font-bold cursor-pointer transition-all duration-300 ${
              darkMode 
                ? 'text-white hover:text-blue-400' 
                : 'text-gray-800 hover:text-blue-600'
            }`}
          >
            BENJAMIN
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative pb-1 transition-all duration-300 ${
                  activeSection === item.id
                    ? darkMode 
                      ? 'text-blue-400' 
                      : 'text-blue-600'
                    : darkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${
                      darkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}
                    layoutId="activeNavLink"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </button>
            </motion.div>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${darkMode 
                ? 'text-white hover:bg-gray-800/50 backdrop-blur-sm' 
                : 'text-gray-800 hover:bg-gray-100'
              }
            `}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>
      </div>

      <MobileDrawer 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        navItems={navItems}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    </header>
  );
};

export default Header;