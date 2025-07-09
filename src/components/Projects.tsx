import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Database, Bot, Cloud, Globe, Layers } from 'lucide-react';
import { getPortfolioData } from '../portfolioData';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const { projects } = getPortfolioData();

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-indigo-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving capabilities
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 max-w-4xl md:max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 rounded-2xl bg-white/5 hover:bg-white/10 shadow-lg p-6 flex flex-col h-full cursor-pointer ${activeProject === index ? 'scale-105' : 'hover:scale-102'}`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="mb-4 flex items-center gap-2">
                <Layers className="w-7 h-7 text-blue-400" />
                <span className="font-semibold text-lg text-white line-clamp-1">{project.title}</span>
              </div>
              <p className="text-gray-300 text-sm mb-3 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech && project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && project.link.trim() && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium mt-auto"
                >
                  <ExternalLink className="w-4 h-4" /> Visit Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;