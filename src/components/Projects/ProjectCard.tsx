import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <div
    className="w-80 h-96 dark:bg-white bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between"
    onClick={onClick}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-200">{project.title}</h3>
    <p className="text-sm font-medium dark:text-gray-600 text-yellow-600 mt-2">{project.description}</p>
    <div className="flex justify-between mt-4">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary flex items-center"
      >
        <FaGithub className="mr-2" /> GitHub
      </a>
      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex items-center"
        >
          <FaExternalLinkAlt className="mr-2" /> Live Demo
        </a>
      )}
    </div>
  </div>
);
