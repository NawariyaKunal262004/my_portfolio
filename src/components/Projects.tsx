import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Database, Bot, Cloud, Globe, Layers } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Grocery Manager – Smart Shopping Assistant',
      description: 'A responsive grocery tracking tool that replaces handwritten lists with an intelligent digital interface. Users can add grocery items, track quantities, mark items as purchased, and auto-calculate expenses.',
      tech: ['Python', 'Streamlit'],
      type: 'Internship Project',
      impact: 'Simplifies household budgeting and grocery planning for both offline and online shoppers.',
      enhancements: 'Voice command support, data backup, budget analytics, and AI-based recommendations.',
      icon: Database,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 2,
      title: 'AI-Powered Career Roadmap Generator',
      description: 'An intelligent application that generates personalized, region-specific career and skill development roadmaps. It supports global education frameworks and offers PDF export.',
      tech: ['Python', 'Gradio', 'Gemini 1.5 Flash'],
      type: 'AI Internship Project',
      impact: 'Solves decision paralysis in career planning by using Generative AI for fast, structured, and adaptive roadmaps.',
      enhancements: 'Multilingual support, calendar-based tracking, and API integration with certification platforms.',
      icon: Bot,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'DevOps CI/CD Pipeline with Cross-Platform Support',
      description: 'Designed and implemented a robust CI/CD pipeline that automates build, testing, and deployment workflows for a Flask-based web application across multiple operating systems.',
      tech: ['Python', 'Flask', 'Pytest', 'Jenkins', 'Docker', 'GitHub', 'RHEL'],
      type: 'Personal/Internship Project',
      impact: 'Showcased ability to engineer platform-independent, production-grade DevOps solutions.',
      enhancements: 'Kubernetes support, secret management, monitoring (Prometheus), and security tools (Trivy).',
      icon: Cloud,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 4,
      title: 'All-in-One Automation and AI-Integrated DevOps Platform',
      description: 'A unified system that blends system automation, AI assistance, cloud-native CI/CD pipelines, and real-time utilities into one dashboard.',
      tech: ['Python', 'JavaScript', 'Flask', 'Streamlit', 'Docker', 'Jenkins', 'Linux', 'LangChain', 'Gemini 1.5', 'Twilio'],
      type: 'Internship Project',
      impact: 'Demonstrated versatility in integrating tools across DevOps, AI, system scripting, and UI design.',
      enhancements: 'Enhanced monitoring, multi-cloud support, and advanced AI capabilities.',
      icon: Layers,
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'ExamVector – Scalable Exam & Result Management System',
      description: 'A platform designed to modernize and digitize exam form filling and result publishing for Indian boards and government institutions.',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'PWA'],
      type: 'Full-Stack Cloud-Native Internship Project',
      impact: 'Built to support millions of users under peak load using scalable infrastructure and DPDP-compliant practices.',
      enhancements: 'Blockchain-based audit logging, advanced analytics, and multi-language support.',
      icon: Globe,
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving capabilities
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-500 ${
                activeProject === project.id ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Project Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon size={32} className="text-white" />
                    </div>

                    {/* Project Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                          {project.type}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Details */}
                      <button
                        onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-4"
                      >
                        <span>View Details</span>
                        <ChevronRight
                          size={16}
                          className={`transform transition-transform duration-300 ${
                            activeProject === project.id ? 'rotate-90' : ''
                          }`}
                        />
                      </button>

                      {/* Expanded Content */}
                      {activeProject === project.id && (
                        <div className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/10 animate-fade-in">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                            <p className="text-gray-300">{project.impact}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Future Enhancements</h4>
                            <p className="text-gray-300">{project.enhancements}</p>
                          </div>
                          <div className="flex gap-4 pt-4">
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
                              <ExternalLink size={16} />
                              Live Demo
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300">
                              <Github size={16} />
                              Source Code
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;