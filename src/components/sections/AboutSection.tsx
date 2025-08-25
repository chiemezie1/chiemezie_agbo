'use client';

import { motion } from 'framer-motion';
import { FaUser, FaQuoteLeft, FaRocket, FaTrophy, FaHeart, FaCode, FaGraduationCap } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '@/lib/constants';
import { professionalBio, personalMission, keyHighlights, achievements } from '@/data/personal';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerChildren}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center space-y-4 mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaUser className="text-blue-600 dark:text-blue-400 text-3xl" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Professional Snapshot */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-blue-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <FaRocket className="text-blue-600 dark:text-blue-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Professional Snapshot
                  </h3>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                    I'm a <strong className="text-blue-600 dark:text-blue-400">full-stack software engineer</strong> who thrives on turning complex problems into elegant solutions. I specialize in building secure, scalable, and high-performance web applications with Python and JavaScript, leveraging AI to create smart tools and streamline workflows, and developing Solidity smart contracts that power decentralized platforms and deliver real-world value to users.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">

                    During my internship at Grandida LLC, I honed my smart contract development skills, deploying 7+ contracts with a strong focus on security. Collaborating with a multidisciplinary team across different fields enhanced my teamwork and communication skills. My curiosity and eagerness to learn have pushed me to participate in multiple hackathons, where I’ve won prizes, and my technical writing skills were recognized when my privacy protocol research was featured by Scroll. I believe the best software blends seamlessly into daily life while creating meaningful impact.

                    Engineering is my craft, but innovation is my passion.
                  </p>
                </div>
              </div>

            </motion.div>

            {/* Personality Peek & Quick Stats */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="space-y-6"
            >
              {/* Personality Peek */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-purple-200 dark:border-gray-600">
                <div className="flex items-center gap-3 mb-4">
                  <FaHeart className="text-purple-600 dark:text-purple-400 text-xl" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Beyond the Code
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🏓</span>
                    <span className="text-gray-700 dark:text-gray-300">Table tennis fan – reflexes as sharp as my code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">☕</span>
                    <span className="text-gray-700 dark:text-gray-300">Coffee enthusiast – fuel for late-night brainstorming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span className="text-gray-700 dark:text-gray-300">Avid reader & lifelong learner beyond tech</span>
                  </div>
              
                </div>
              </div>

              {/* Personal Mission */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-blue-200 dark:border-gray-600">
                <div className="flex items-start gap-3">
                  <FaQuoteLeft className="text-blue-600 dark:text-blue-400 text-lg mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      My Mission
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm italic">
                     Is to use software to serve others, create opportunities, and make a meaningful difference, all while enjoying the journey (and a good cup of coffee ☕).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
