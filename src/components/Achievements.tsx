import React from 'react';
import { Trophy, Award, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Web Development Bootcamp – WsCubeTech',
      description: 'Completed a hands-on bootcamp where I learned the fundamentals of front-end development using HTML, CSS, JavaScript, and full-stack workflows. This laid the foundation for my understanding of web technologies and responsive design practices.',
      icon: Star,
      type: 'Certification',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Innovation Sprint Challenge – 4th Place Winner',
      description: 'Secured fourth place among nationwide participants by building an AI-based Career Pathway Finder. The tool featured a personalized chatbot that guided users through career decisions using intelligent prompts. Recognized for solving a real-world problem with creativity, scalability, and user-centric design.',
      icon: Trophy,
      type: 'Competition',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'CODE RED 4.0 Hackathon – Mental Health Bot Developer',
      description: 'Developed an AI-powered Mental Health Assessment Bot designed to guide users through a structured self-assessment using behavioral analytics and context-aware questioning. The bot focused on offering empathetic, tech-driven support to those experiencing stress or anxiety. The project stood out for its social relevance and use of natural language processing.',
      icon: Award,
      type: 'Hackathon',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      title: 'Google Cloud 2.0 Program – Learning Roadmap Builder',
      description: 'Participated in the Google Cloud 2.0 initiative where I helped design structured, domain-specific learning pathways for beginner developers and career-switchers. Focused on simplifying complex CS topics into curated roadmaps supported by certification links, tutorials, and open-source resources.',
      icon: Target,
      type: 'Program',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <Trophy size={20 + Math.random() * 20} className="text-yellow-400" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Milestones that showcase my dedication to excellence and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-6">
                  {/* Icon with Trophy Glow */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <achievement.icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className={`px-3 py-1 bg-gradient-to-r ${achievement.gradient} bg-opacity-20 text-white rounded-full text-sm font-medium`}>
                        {achievement.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '5+', label: 'Major Projects', icon: Target },
            { number: '2+', label: 'Internships', icon: Award },
            { number: '4+', label: 'Competitions', icon: Trophy },
            { number: '2+', label: 'Certifications', icon: Star }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={32} className="text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;