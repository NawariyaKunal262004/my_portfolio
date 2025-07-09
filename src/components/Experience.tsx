import React from 'react';
import { getPortfolioData } from '../portfolioData';

const Experience = () => {
  const { certifications } = getPortfolioData();

  return (
    <section id="certifications" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-purple-900 relative overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            My professional certifications and credentials
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl md:max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
              <span className="text-lg md:text-xl font-semibold text-white mb-2">{cert.title}</span>
              <span className="text-blue-300 text-sm mb-1">Issuer: {cert.issuer}</span>
              <span className="text-blue-300 text-sm mb-1">Year: {cert.year}</span>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm mt-2">View Certificate</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;