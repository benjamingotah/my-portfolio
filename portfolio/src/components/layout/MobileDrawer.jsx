import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const MobileDrawer = ({ isOpen, setIsOpen, navItems }) => {
  const { darkMode } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed top-0 right-0 h-screen w-64 z-50 shadow-xl md:hidden
              ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}
              transition-colors duration-300
            `}
          >
            <div className="p-5 h-full flex flex-col">
              <div className="flex justify-end">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className={`p-1 rounded-full ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `block py-2 px-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-gray-100 dark:bg-blue-900 text-blue-600 dark:text-purple-300'
                            : 'hover:bg-purple-50 dark:hover:bg-gray-700'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className={`pt-4 mt-25 border-t ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <ThemeToggle showLabel />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;