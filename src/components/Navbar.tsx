'use client'

import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-6 px-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-gray-600 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text">
          Chiemezie Agbo        </h1>
      </motion.div>

      <motion.button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>
    </header>
  )
}