'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa';
import { projects } from '@/data/projects';
import { ANIMATION_VARIANTS } from '@/lib/constants';

export default function ProjectPage() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link 
            href="/#projects"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={ANIMATION_VARIANTS.staggerChildren}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Back Button */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
            <Link 
              href="/#projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center space-y-6"
          >
            <div className="space-y-4">
              <div className="flex justify-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.category === 'web3' 
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    : project.category === 'web2'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {project.category?.toUpperCase()}
                </span>
                {project.featured && (
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-4 h-4" />
                View Code
              </motion.a>
              
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder-project.png';
              }}
            />
          </motion.div>

          {/* Project Overview */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {project.overview}
            </p>
          </motion.div>

          {/* Technologies Used */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Details Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-yellow-600 dark:text-yellow-400 text-xl" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Why This Project?
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {project.purpose}
              </p>
            </motion.div>

            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Skills Gained
                </h3>
              </div>
              <div className="space-y-2">
                {project.skillsGained.map((skill, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-orange-600 dark:text-orange-400 text-xl" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Challenges
                </h3>
              </div>
              <div className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Interested in Similar Projects?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              I'm always open to discussing new opportunities and collaborations in {project.category === 'web3' ? 'blockchain and Web3' : 'web development'}.
            </p>
            <Link
              href="/#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
