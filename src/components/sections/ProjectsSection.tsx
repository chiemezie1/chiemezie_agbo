'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaEye, FaStar, FaGlobe } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '@/lib/constants';
import { projects, getFeaturedProjects, getWeb3Projects, getWeb2Projects } from '@/data/projects';
import { Project } from '@/lib/types';

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    layout
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: -50 }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
      layout: { duration: 0.3 }
    }}
    whileHover={{ y: -5 }}
  >
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/images/placeholder-project.png';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badges Container */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        {/* Category Badge */}
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          project.category === 'web3'
            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
            : project.category === 'web2'
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        }`}>
          {project.category?.toUpperCase()}
        </span>

        {/* Featured Badge */}
        {project.featured && (
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </span>
        )}
      </div>
    </div>

    {/* Project Content */}
    <div className="p-5 space-y-4 flex-1 flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-gray-500 dark:text-gray-400 text-xs">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-3 mt-auto">
        <Link
          href={`/projects/${project.id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300"
        >
          <FaEye className="text-sm" />
          View Details
        </Link>

        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="View Source Code"
        >
          <FaGithub className="text-sm" />
        </motion.a>

        {project.demoLink && (
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="View Live Demo"
          >
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const FilterButton = ({
  active,
  onClick,
  children,
  icon: Icon,
  count
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: any;
  count?: number;
}) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 relative ${
      active
        ? 'bg-blue-600 text-white shadow-lg'
        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {Icon && <Icon className="text-sm" />}
    <span>{children}</span>
    {count !== undefined && (
      <span className={`text-xs px-2 py-0.5 rounded-full ${
        active
          ? 'bg-white/20 text-white'
          : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
      }`}>
        {count}
      </span>
    )}
  </motion.button>
);

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'featured' | 'web3' | 'web2'>('featured');

  const getFilteredProjects = () => {
    switch (filter) {
      case 'featured':
        return getFeaturedProjects();
      case 'web3':
        return getWeb3Projects();
      case 'web2':
        return getWeb2Projects();
      default:
        return projects;
    }
  };

  const filteredProjects = getFilteredProjects();

  // Get counts for each filter
  const counts = {
    featured: getFeaturedProjects().length,
    all: projects.length,
    web3: getWeb3Projects().length,
    web2: getWeb2Projects().length
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerChildren}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCode className="text-blue-600 dark:text-blue-400 text-3xl" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Selected projects demonstrating technical expertise and problem-solving capabilities
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <FilterButton
              active={filter === 'featured'}
              onClick={() => setFilter('featured')}
              icon={FaStar}
              count={counts.featured}
            >
              Featured
            </FilterButton>
            <FilterButton
              active={filter === 'all'}
              onClick={() => setFilter('all')}
              icon={FaCode}
              count={counts.all}
            >
              All Projects
            </FilterButton>
            <FilterButton
              active={filter === 'web3'}
              onClick={() => setFilter('web3')}
              icon={FaRocket}
              count={counts.web3}
            >
              Blockchain
            </FilterButton>
            <FilterButton
              active={filter === 'web2'}
              onClick={() => setFilter('web2')}
              icon={FaGlobe}
              count={counts.web2}
            >
              Web Apps
            </FilterButton>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <ProjectCard key={`${filter}-${project.id}`} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always excited to work on innovative projects, especially in the blockchain and DeFi space. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                </motion.a>
                <motion.a
                  href={`https://github.com/chiemezie1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  View All on GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
