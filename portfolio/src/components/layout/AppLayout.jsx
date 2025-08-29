import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import MobileBottomNav from './MobileBottomNav';

const AppLayout = ({ children }) => {
  const { darkMode } = useTheme();

  // Variants for the background transition with Apple liquid glass effects
  const backgroundVariants = {
    light: { 
      backgroundColor: '#faf5ff', // purple-50
      backdropFilter: 'blur(0px)',
    },
    dark: { 
      backgroundColor: 'rgba(17, 24, 39, 0.8)', // gray-900 with transparency
      backdropFilter: 'blur(20px)',
    },
  };

  // Variants for the text color transition
  const textVariants = {
    light: { color: '#1f2937' }, // gray-800
    dark: { color: '#ffffff' }, // white
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={darkMode ? 'light' : 'dark'}
        animate={darkMode ? 'dark' : 'light'}
        variants={backgroundVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : ''}`}
        style={{
          backgroundImage: darkMode ? `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
          ` : 'none'
        }}
      >
        <motion.div
          variants={textVariants}
          initial={darkMode ? 'light' : 'dark'}
          animate={darkMode ? 'dark' : 'light'}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={darkMode ? 'relative' : ''}
        >
          {darkMode && (
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 backdrop-blur-3xl -z-10" />
          )}
          
          <Header />
          
          <main className="relative">
            {children}
          </main>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppLayout;