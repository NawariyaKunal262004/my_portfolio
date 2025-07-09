import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';
import { getPortfolioData } from '../portfolioData';
import kunalPhoto from '../kunal_photo.jpg';

const About = () => {
  const { profile } = getPortfolioData();

  const floatingSkills = [
    { name: 'NumPy', icon: Code, delay: '0s' },
    { name: 'Pandas', icon: Database, delay: '0.5s' },
    { name: 'Scikit-learn', icon: Brain, delay: '1s' },
    { name: 'TensorFlow', icon: Zap, delay: '1.5s' },
    { name: 'Docker', icon: Code, delay: '2s' },
    { name: 'Kubernetes', icon: Database, delay: '2.5s' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden animate-fade-in-up">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Profile Image with Neon Ring */}
          <div className="relative group flex justify-center items-center mb-8 md:mb-0">
            <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
              {/* Neon Rotating Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-8 border-gradient-to-r from-blue-400 via-pink-400 to-purple-400 animate-spin-slow shadow-2xl" style={{ boxShadow: '0 0 40px 10px #a78bfa, 0 0 80px 20px #f472b6' }} />
              </div>
              <div className="relative w-full h-full bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl rounded-full p-3 border-4 border-white/30 shadow-2xl glass flex items-center justify-center">
                <img
                  src={kunalPhoto}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover shadow-lg animate-float border-4 border-white/30"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Content Card with 3D Glassmorphism */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-2xl border border-white/20">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
              {profile.name}
            </h2>
            <p className="text-blue-400 text-base md:text-lg mb-4 font-medium">
              {profile.about}
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
              <span className="text-gray-300 text-sm md:text-base">Contact: {profile.contact}</span>
              <div className="flex gap-3">
                {profile.socials && profile.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-lg md:text-xl"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {/* Optionally, show more info here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;