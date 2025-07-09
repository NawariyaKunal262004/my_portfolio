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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-full shadow-2xl border-2 border-white/20 bg-white/10 backdrop-blur-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 overflow-hidden min-h-[240px] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-6">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{achievement.title.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex flex-col text-sm text-blue-300">
                        <span>Issuer: {achievement.issuer}</span>
                        <span>Year: {achievement.year}</span>
                        {achievement.link && (
                          <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mt-1">View Certificate</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300"></div>
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