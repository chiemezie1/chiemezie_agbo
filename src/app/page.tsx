// pages/index.js

'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Header from '@/components/Navbar'
import MainContent from '@/components/MainContent'
import AboutMe from '@/components/AboutSection'
import Footer from '@/components/Footer'
import { ProjectsSection } from '@/components/Projects/ProjectsSection'
import { TechnicalWritingSection } from '@/components/TechnicalWriting/TechnicalWritingSection'
import { ContactSection } from '@/components/ContactSection'
import  CertificationsSection  from '@/components/Certifications/CertificationsSection'

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return { isDarkMode, toggleDarkMode }
}

export default function HomePage() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }))
  }, [controls])

  return (
    <div className={`min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-black`}>
      <div className="container mx-auto px-4 py-12">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent controls={controls} />
        <AboutMe />
        <ProjectsSection />
        <TechnicalWritingSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
