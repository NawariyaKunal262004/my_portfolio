import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';
import kunalPhoto from '../kunal_photo.jpg';

const socials = [
  { name: 'GitHub', url: 'https://github.com/NawariyaKunal262004' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kunal-nawaria-35591629a' },
  { name: 'DockerHub', url: 'https://hub.docker.com/repositories/kunal262004' }
];

const floatingSkills = [
  { name: 'NumPy', icon: Code, delay: '0s' },
  { name: 'Pandas', icon: Database, delay: '0.5s' },
  { name: 'Scikit-learn', icon: Brain, delay: '1s' },
  { name: 'TensorFlow', icon: Zap, delay: '1.5s' },
  { name: 'Docker', icon: Code, delay: '2s' },
  { name: 'Kubernetes', icon: Database, delay: '2.5s' }
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden animate-fade-in-up">
      {/* Subtle Particle Effects Only */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
          {/* Profile Image Overlapping About Card */}
          <div className="relative flex justify-center w-full -mb-16 sm:-mb-20 z-20">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 flex items-center justify-center">
              {/* Neon Rotating Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-8 border-gradient-to-r from-blue-400 via-pink-400 to-purple-400 animate-spin-slow shadow-2xl" style={{ boxShadow: '0 0 40px 10px #a78bfa, 0 0 80px 20px #f472b6' }} />
              </div>
              <div className="relative w-full h-full bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl rounded-full p-2 sm:p-3 border-4 border-white/30 shadow-2xl glass flex items-center justify-center">
                <img
                  src={kunalPhoto}
                  alt="Kunal Nawariya"
                  className="w-full h-full rounded-full object-cover shadow-lg animate-float border-4 border-white/30"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* About/Profile Card (with top padding for overlap) */}
          <div className="space-y-8 sm:space-y-10 bg-white/10 dark:bg-gray-900/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 glass border-2 border-white/20 animate-fade-in-up relative overflow-hidden flex flex-col items-center justify-center w-full mt-0 pt-20 sm:pt-24">
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 opacity-50 blur-2xl animate-pulse-slow z-0" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl inline-block relative tracking-tight text-center">
                About Me
                <span className="block h-1 w-16 sm:w-20 mt-2 sm:mt-3 mx-auto bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 rounded-full animate-gradient-x animate-pulse-slow"></span>
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-2 sm:mb-4 font-medium text-center">
                I'm a Data Science student passionate about Mathematics and DataOps. Since the first year of my engineering journey, I've gained hands-on experience in web scraping (Python, Oxylabs), data cleaning, and visualization, along with working knowledge of NumPy, Pandas, Scikit-learn, LangChain, Generative AI, Agentic AI, and Machine Learning.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                Currently, my focus is on DataOps — learning how to build reliable, automated data pipelines using tools like Apache Airflow, dbt, and CI/CD practices for data workflows. Let's connect and explore how I can contribute to your DataOps initiatives!
              </p>
            </div>
          </div>

          {/* Technical Skills Card (stacked below) */}
          <div className="space-y-6 sm:space-y-8 bg-white/10 dark:bg-gray-900/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 glass border-2 border-white/20 animate-fade-in-up relative overflow-hidden flex flex-col items-center justify-center w-full mt-6 sm:mt-8">
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 opacity-50 blur-2xl animate-pulse-slow z-0" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200 mb-4 sm:mb-6 tracking-wide text-center">Technical Skills</h3>
              {[
                { name: 'Python', level: 90, color: 'from-green-400 to-blue-500' },
                { name: 'Machine Learning', level: 85, color: 'from-purple-400 to-pink-500' },
                { name: 'DataOps', level: 80, color: 'from-yellow-400 to-orange-500' },
                { name: 'DevOps', level: 75, color: 'from-blue-400 to-purple-500' },
                { name: 'React', level: 80, color: 'from-cyan-400 to-blue-500' },
                { name: 'Docker', level: 85, color: 'from-blue-500 to-indigo-500' }
              ].map((skill, index) => (
                <div key={index} className="group" style={{ animationDelay: `${index * 0.12}s`, animationFillMode: 'both' }}>
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <span className="text-blue-100 font-medium text-sm sm:text-lg">{skill.name}</span>
                    <span className="text-blue-300 text-xs sm:text-base">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-blue-900/40 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-y-110 shadow-lg animate-fade-in-up animate-glow-bar`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;