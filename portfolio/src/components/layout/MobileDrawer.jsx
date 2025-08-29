import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const MobileDrawer = ({ isOpen, setIsOpen, navItems, scrollToSection, activeSection }) => {
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
            className={`fixed top-0 right-0 h-screen w-80 z-50 shadow-2xl md:hidden
              ${darkMode 
                ? 'bg-gray-900/80 backdrop-blur-2xl border-l border-gray-700/30' 
                : 'bg-white/95 backdrop-blur-xl border-l border-gray-200/50'
              }
              transition-all duration-300
            `}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-end">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    darkMode 
                      ? 'text-gray-300 hover:bg-gray-800/50 backdrop-blur-sm' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? darkMode 
                            ? 'bg-blue-600/20 text-blue-400 backdrop-blur-sm border border-blue-500/30' 
                            : 'bg-blue-100 text-blue-600'
                          : darkMode 
                            ? 'hover:bg-gray-800/50 text-gray-300 hover:text-white' 
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className={`pt-6 mt-auto border-t ${
                darkMode ? 'border-gray-700/50' : 'border-gray-200'
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;