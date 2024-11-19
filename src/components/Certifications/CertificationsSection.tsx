import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'
import sectionData from './SectionData'

type SectionType = 'experience' | 'certifications' | 'achievements'

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
      active 
        ? 'bg-primary text-white dark:text-gray-900 scale-105 sm:scale-110' 
        : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:bg-opacity-20'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default function CertificationsSection() {
  const [activeSection, setActiveSection] = useState<SectionType>('experience')
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="py-8 sm:py-12 dark:bg-gray-100 bg-gray-900 dark:text-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-around space-x-2 sm:space-x-4 mb-6 sm:mb-10">
          {(Object.keys(sectionData) as SectionType[]).map((section) => (
            <TabButton
              key={section}
              active={activeSection === section}
              onClick={() => setActiveSection(section)}
            >
              <span className="hidden sm:inline-block sm:mr-2">
                {React.createElement(sectionData[section].icon)}
              </span>
              <span className="text-sm sm:text-base">{sectionData[section].title}</span>
            </TabButton>
          ))}
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide pb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {sectionData[activeSection].items.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-72 sm:w-80 mr-4 sm:mr-6">
                  <motion.div
                    className="w-full h-80 sm:h-96 dark:bg-white bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg overflow-y-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    {'company' in item ? (
                      <>
                        <p className="text-base sm:text-lg mb-1">{item.company}</p>
                        <p className="text-xs sm:text-sm dark:text-gray-600 text-gray-400 mb-3">{item.date}</p>
                        <ul className="list-disc list-inside dark:text-gray-700 text-gray-300 text-sm sm:text-base">
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      </>
                    ) : 'issuer' in item ? (
                      <>
                        <p className="text-xs sm:text-sm dark:text-gray-600 text-gray-400 mb-1">{item.issuer}</p>
                        <p className="text-xs sm:text-sm dark:text-gray-600 text-gray-400 mb-3">{item.date}</p>
                        <p className="dark:text-gray-700 text-gray-300 text-sm sm:text-base mb-3">{item.explanation}</p>
                      </>
                    ) : (
                      <>
                        <p className="dark:text-gray-700 text-gray-300 text-sm sm:text-base mb-2">{item.description}</p>
                        <p className="text-xs sm:text-sm font-medium text-end dark:text-gray-600 text-gray-400 pt-2">{item.date}</p>
                      </>
                    )}
                    {'link' in item && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="absolute bottom-0 pb-12 sm:pb-16 mt-3 text-primary hover:underline text-center text-sm sm:text-base"
                      >
                        View Certificate <FaExternalLinkAlt className="ml-1 inline-block" />
                      </a>
                    )}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 dark:bg-gray-200 bg-gray-800 dark:text-gray-800 text-gray-200 p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 dark:bg-gray-200 bg-gray-800 dark:text-gray-800 text-gray-200 p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}