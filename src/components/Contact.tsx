import React from 'react';
import { getPortfolioData } from '../portfolioData';

const Contact = () => {
  const { profile } = getPortfolioData();

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Get in touch with me
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white/10 rounded-2xl p-8 shadow-lg flex flex-col items-center">
          <span className="text-lg md:text-xl font-semibold text-white mb-2">{profile.name}</span>
          <span className="text-blue-300 text-sm mb-4">{profile.contact}</span>
          <div className="flex gap-4 mb-4">
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
      </div>
    </section>
  );
};

export default Contact;