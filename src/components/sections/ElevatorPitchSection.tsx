'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaVideo, FaQuoteLeft } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '@/lib/constants';
import VideoModal from '@/components/VideoModal';

export default function ElevatorPitchSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // You can add your actual video URL here when ready
  const videoUrl = ""; // e.g., "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"

  return (
    <>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
        title="Chiemezie Agbo - Elevator Pitch"
      />
    <section id="elevator-pitch" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              <FaVideo className="text-blue-600 dark:text-blue-400 text-3xl" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Elevator Pitch
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A quick introduction to who I am and what I bring to the table
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-12"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
              {/* Placeholder for YouTube video */}
              <div className="text-center text-white space-y-4">
                <FaPlay className="text-6xl mx-auto opacity-80" />
                <h3 className="text-2xl font-semibold">Elevator Pitch Video</h3>
                <p className="text-lg opacity-90">Coming Soon</p>
              </div>
              
              {/* Overlay for video */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <FaPlay className="text-sm" />
                  Watch Video
                </motion.button>
              </div>
            </div>
          </motion.div>
          {/* Key Points */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Smart Contracts</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                7+ smart contracts deployed with Solidity expertise at Grandida LLC
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Achievements</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">
                Hackathon winner and featured by Scroll for technical writing
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Innovation</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">
                Co-founded Web3 startup with MVP delivered in 3 months
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in learning more about my work and experience?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
