import React, { useState } from 'react';
import { Code, Database, Brain, Cloud, Wrench, MessageSquare } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technologies');

  const skillCategories = {
    technologies: {
      title: 'Technologies',
      icon: Code,
      skills: ['Frontend', 'ML', 'Gen AI', 'Agentic AI', 'DevOps']
    },
    languages: {
      title: 'Languages',
      icon: Database,
      skills: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS']
    },
    tools: {
      title: 'Libraries & Tools',
      icon: Wrench,
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Docker', 'Kubernetes', 'Jenkins', 'Red Hat']
    },
    soft: {
      title: 'Soft Skills',
      icon: MessageSquare,
      skills: ['Communication', 'English', 'Client Outreach', 'Teamwork', 'Coordination']
    }
  };

  const floatingSkills = [
    'Python', 'React', 'Docker', 'ML', 'AI', 'DataOps', 'Kubernetes', 'Jenkins',
    'TensorFlow', 'NumPy', 'Pandas', 'JavaScript', 'DevOps', 'CI/CD', 'Airflow'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* 3D Floating Skills Cloud */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingSkills.map((skill, index) => (
          <div
            key={index}
            className="absolute animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/60 text-sm font-medium border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-110">
              {skill}
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and professional skills
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <category.icon size={20} />
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">{skill.charAt(0)}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{skill}</h3>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${70 + Math.random() * 30}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;