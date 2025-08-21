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
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Full-Stack Engineer • Blockchain Enthusiast • Problem Solver
            </p>
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
                    I'm a <strong className="text-blue-600 dark:text-blue-400">full-stack software engineer</strong> who
                    specializes in bridging Web2 and Web3 ecosystems. With expertise in <strong>JavaScript, Python, and Solidity</strong>,
                    I transform complex problems into elegant, scalable solutions.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    From traditional web applications to cutting-edge decentralized platforms, I build technology that
                    doesn't just work—it <em>makes a difference</em>. My approach combines technical precision with
                    innovative thinking to create software that seamlessly integrates into daily life while driving meaningful change.
                  </p>
                </div>
              </div>

              {/* Career Highlights */}
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <FaTrophy className="text-yellow-600 dark:text-yellow-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Career Highlights
                  </h3>
                </div>
                <div className="space-y-4">
                  {keyHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:text-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
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
                    <span className="text-gray-700 dark:text-gray-300">Table tennis champion (my reflexes are as fast as my code!)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">☕</span>
                    <span className="text-gray-700 dark:text-gray-300">Coffee enthusiast (fuel for late-night coding sessions)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <span className="text-gray-700 dark:text-gray-300">Problem-solving is my superpower</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🌍</span>
                    <span className="text-gray-700 dark:text-gray-300">Passionate about Web3's potential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span className="text-gray-700 dark:text-gray-300">Lifelong learner & technical writer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🤝</span>
                    <span className="text-gray-700 dark:text-gray-300">Team player who loves collaboration</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <FaCode className="text-green-600 dark:text-green-400 text-xl" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Quick Stats
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Smart Contracts</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">7+ Deployed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">DApps Contributed</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">6+ Projects</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Hackathon Wins</span>
                    <span className="font-bold text-green-600 dark:text-green-400">$1,500 Prize</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Featured Articles</span>
                    <span className="font-bold text-yellow-600 dark:text-yellow-400">Scroll ZKP</span>
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
                      "To create technology that serves others, builds opportunities, and sparks hope—guided by faith,
                      family, and purpose in everything I do."
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
