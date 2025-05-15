import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import MobileBottomNav from './MobileBottomNav';

const AppLayout = () => {
  const { darkMode } = useTheme();

  // Variants for the background transition
  const backgroundVariants = {
    light: { backgroundColor: '#faf5ff' }, // purple-50
    dark: { backgroundColor: '#111827' }, // gray-900
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
        className="min-h-screen"
      >
        <motion.div
          variants={textVariants}
          initial={darkMode ? 'light' : 'dark'}
          animate={darkMode ? 'dark' : 'light'}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Header />
          
          <main className="container mx-auto px-4 pt-20 md:pt-32 pb-24 md:pb-16">
            <Outlet />
          </main>


        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppLayout;