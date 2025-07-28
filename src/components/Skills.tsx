import React, { useState } from 'react';
import { Code, Database, Wrench, MessageSquare } from 'lucide-react';

const skillCategories = {
  technologies: {
    title: 'Technologies',
    icon: Code,
    skills: ['Frontend', 'ML', 'Gen AI', 'Agentic AI', 'DevOps']
  },
  languages: {
    title: 'Languages',
    icon: Database,
    skills: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS', 'yaml']
  },
  tools: {
    title: 'Libraries & Tools',
    icon: Wrench,
    skills: [
      'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Docker', 'Kubernetes', 'Jenkins', 'REHL9',
      'Ansible', 'Docker Compose', 'Prometheus', 'Terraform', 'PyTorch', 'Jupyter Notebook',
      'CLI', 'CLI Automation', 'Shell Scripting', 'Anaconda', 'VSCode', 'Git', 'GitHub'
    ]
  },
  storage: {
    title: 'Storage & DB',
    icon: Database,
    skills: ['AWS Cloud', 'MongoDB']
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

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technologies');

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
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
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <category.icon size={20} />
              {category.title}
              {activeTab === key && (
                <span className="absolute left-1/2 -bottom-2 w-2/3 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm animate-pulse-slow" style={{ transform: 'translateX(-50%)' }}></span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="rounded-3xl bg-white/10 backdrop-blur-2xl p-8 md:p-12 shadow-2xl border-2 border-white/20 glass flex flex-col items-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {skillCategories[activeTab].skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                >
                  <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow-bar cursor-default select-none">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;