import React from 'react';

const education = [
  {
    degree: 'B.Tech in AI & Data Science',
    year: '3rd Year',
    cgpa: '6.7'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-white/10 dark:bg-gray-900/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 glass border-2 border-blue-400/30 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x animate-fade-in-up inline-block relative">
            Education
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <span className="text-2xl font-semibold text-blue-200">B.Tech in AI & Data Science</span>
              <span className="text-base text-blue-300 bg-blue-900/40 rounded-full px-3 py-1 ml-auto">3rd Year</span>
            </div>
            <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <span className="text-lg text-gray-200">CGPA (till 3rd semester):</span>
              <span className="text-lg font-bold text-blue-300">6.7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 