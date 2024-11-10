import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && project && (
      <motion.div
        className="fixed inset-0 z-10 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} 
      >
        <div className="min-h-screen px-4 text-center bg-black bg-opacity-30 flex items-center justify-center">
          <motion.div
            className="inline-block w-full max-w-3xl p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-900 shadow-xl rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            {/* Title */}
            <h3 className="text-2xl font-bold leading-6 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            
            {/* Overview */}
            <div className="mt-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {project.overview}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-lg font-medium text-yellow-700 bg-primary bg-opacity-20 text-primary px-3 py-1 rounded-full dark:bg-opacity-30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-gray-900 dark:text-gray-200"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-primary bg-primary bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-opacity-20 dark:text-primary-light dark:hover:bg-opacity-30"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
