'use client'

import { motion, AnimationControls } from 'framer-motion'

interface HeroSectionProps {
  controls: AnimationControls;
}

export default function HeroSection({ controls }: HeroSectionProps) {
  return (
    <div className="space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={0}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          <span className="gradient-text blue-teal">Full-Stack Developer</span>
          <br />
          <span className="ampersand"> & </span>
          <br />
          <span className="gradient-text purple-pink">Blockchain Enthusiast</span>
        </h2>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        custom={1}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <p className="text-xl text-gray-300 dark:text-gray-600 font-semibold mb-4">
          Bridging Web2 & Web3 | Frontend, Backend, DevOps & Blockchain
        </p>
        <p className="text-gray-300 dark:text-gray-600 text-xl">
          As a seasoned software engineer, I bring a wealth of experience in both Web2 and Web3 technologies. My expertise spans frontend development, backend architecture, DevOps practices, and now, blockchain technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={2}
        transition={{ delay: 0.6 }}
        className="flex space-x-4"
      >
        <motion.a
          href="#project"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects
        </motion.a>
        <motion.a
          href="https://medium.com/@chiemezieagbo1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read My Blog
        </motion.a>
      </motion.div>
    </div>
  )
}