import { motion } from 'framer-motion';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ showLabel = false }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
    >
      {darkMode ? <Sun size={20} /> : <MoonStar size={20} />}
      {showLabel && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
    </motion.button>
  );
};

export default ThemeToggle;