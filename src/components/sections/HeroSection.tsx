'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaCode, FaRocket, FaHeart, FaCoffee } from 'react-icons/fa';
import { PERSONAL_INFO, SOCIAL_LINKS, ANIMATION_VARIANTS } from '@/lib/constants';
import { useEffect } from 'react';

const SocialIcon = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero-section')?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={ANIMATION_VARIANTS.staggerChildren}
          >
            {/* Fun Greeting */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-lg">
                <span className="text-2xl">👋</span>
                <span className="text-gray-600 dark:text-gray-400">Hey there! I'm</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Developer</span>
                <span className="text-gray-500">•</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Blockchain Enthusiast</span>
                <span className="text-gray-500">•</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">Problem Solver</span>
              </div>
            </motion.div>

            {/* Fun Description */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I turn complex problems into elegant solutions using <span className="font-semibold text-blue-600 dark:text-blue-400">JavaScript</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Python</span>, and <span className="font-semibold text-green-600 dark:text-green-400">Solidity</span>.
                When I'm not coding, you'll find me exploring the latest in Web3 or enjoying a good cup of coffee ☕
              </p>

              {/* Fun Stats */}
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  <FaRocket className="text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-800 dark:text-blue-300">7+ Smart Contracts</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                  <FaCode className="text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-300">Hackathon Winner</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                  <FaHeart className="text-purple-600 dark:text-purple-400" />
                  <span className="text-purple-800 dark:text-purple-300">Web3 Passionate</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                  <FaCoffee className="text-orange-600 dark:text-orange-400" />
                  <span className="text-orange-800 dark:text-orange-300">Coffee Lover</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaRocket className="w-4 h-4" />
                View Projects
              </motion.a>
              <motion.a
                href="/Chiemezie_Agbo_CV.pdf"
                download
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <SocialIcon icon={FaGithub} href={SOCIAL_LINKS.github} label="GitHub" />
              <SocialIcon icon={FaLinkedin} href={SOCIAL_LINKS.linkedin} label="LinkedIn" />
              <SocialIcon icon={FaTwitter} href={SOCIAL_LINKS.twitter} label="Twitter" />
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative w-96 h-96 lg:w-[420px] lg:h-[420px]">
              {/* Professional Image Container */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 border-4 border-white dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/images/Agbo_chiemezie.png"
                  alt="Chiemezie Agbo - Full-Stack Software Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Fun Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaCode className="w-4 h-4" />
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 bg-purple-500 text-white p-3 rounded-full shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <FaRocket className="w-4 h-4" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-3 bg-green-500 text-white p-2 rounded-full shadow-lg"
                  animate={{
                    x: [0, 8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <FaHeart className="w-3 h-3" />
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -left-3 bg-orange-500 text-white p-2 rounded-full shadow-lg"
                  animate={{
                    x: [0, -8, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <FaCoffee className="w-3 h-3" />
                </motion.div>
              </motion.div>

              {/* Fun Status Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Available for projects
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
