import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import projects from './ProjectFile';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

        {/* Scroll Container */}
        <div className="scroll-container overflow-hidden w-full">
          {/* Flex container with increased space between cards */}
          <div className="scroll-content flex items-center space-x-12 w-max  bg-gradient-to-br from-background"> 
            {/* Duplicate the list of projects for the infinite scroll effect */}
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="w-80 h-96 flex-shrink-0 transition-transform transform hover:scale-105">
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for selected project */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
