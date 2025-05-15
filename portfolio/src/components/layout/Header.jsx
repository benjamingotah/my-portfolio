import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';
import MobileDrawer from './MobileDrawer';
import useScroll from '../hooks/useScroll';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/service' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll();
  const { darkMode } = useTheme();

  return (
    <header className={`fixed w-full transition-all duration-300 ${scrolled ? 'py-2 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 shadow-md' : 'py-4 bg-transparent'} z-50`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <NavLink to="/" className="text-xl font-bold">BENJAMIN</NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `relative pb-1 transition-colors ${isActive 
                    ? 'text-gray-500 dark:text-gray-200' 
                    : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-gray-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span 
                        className={`absolute bottom-0 left-0 w-full h-[2px] ${darkMode ? 'bg-white' : 'bg-black'}`}
                        layoutId="activeNavLink"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
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
              p-1 rounded-md transition-colors duration-200
              ${darkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}
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

      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </header>
  );
};

export default Header;