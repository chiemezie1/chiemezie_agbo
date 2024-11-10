// components/SocialLinks.js

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <motion.a href="https://github.com/chiemezie1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-gray-400 hover:text-white">
        <FiGithub size={24} />
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/chiemezieagbo/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-gray-400 hover:text-white">
        <FiLinkedin size={24} />
      </motion.a>
      <motion.a href="https://x.com/ChiemezieAgbo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-gray-400 hover:text-white">
        <FiTwitter size={24} />
      </motion.a>
    </div>
  )
}
