import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaHeart, FaCode, FaCoffee } from 'react-icons/fa'

const IconRotator: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState(0)
  const icons = [FaHeart, FaCode, FaCoffee]
  const IconComponent = icons[currentIcon]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.span
      key={currentIcon}
      initial={{ rotateY: -180, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 180, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block text-primary"
    >
      <IconComponent />
    </motion.span>
  )
}

const WaveText: React.FC<{ text: string }> = ({ text }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      y: [0, -10, 0],
      transition: { duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 5 },
    }))
  }, [controls])

  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          animate={controls}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="mt-12 py-8 bg-gradient-to-r from-background to-background-light text-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <WaveText text={`© ${currentYear} Chiemezie Agbo`} />
          </div>
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <IconRotator />
            <span>by Chiemezie</span>
          </div>
        </div>
        <motion.div
          className="mt-4 text-base text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>Empowering the web with innovative solutions</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}