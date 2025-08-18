'use client';

import { motion } from 'framer-motion';
import { FaUser, FaQuoteLeft } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '@/lib/constants';
import { professionalBio, personalMission } from '@/data/personal';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerChildren}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center space-y-4 mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaUser className="text-blue-600 dark:text-blue-400 text-2xl" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional background and expertise
            </p>
          </motion.div>

          {/* Professional Bio */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {professionalBio}
              </p>
            </div>
          </motion.div>

          {/* Personal Mission (Optional) */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-blue-200 dark:border-gray-600"
          >
            <div className="flex items-start gap-4">
              <FaQuoteLeft className="text-blue-600 dark:text-blue-400 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Personal Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  {personalMission}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
