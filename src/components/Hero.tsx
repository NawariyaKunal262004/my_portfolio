import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import resumePDF from '../Kunal Nawaria resume[1].pdf';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Data Science Student', 'DataOps Engineer', 'AI Enthusiast', 'Full Stack Developer'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
      {/* Unified Glassmorphism Overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl" />
      </div>

      {/* Content Card */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-2 sm:px-4 max-w-4xl mx-auto text-center">
        <div className="mb-8 w-full rounded-3xl bg-white/10 backdrop-blur-2xl border-2 border-white/20 shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl">
            Kunal Nawariya
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl mb-6 h-8 flex items-center justify-center">
            <span className="font-light">I'm a </span>
            <span className="font-semibold text-blue-400 border-r-2 border-blue-400 pr-1 ml-2">
              {text}
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about Mathematics and DataOps, building intelligent data pipelines and AI-driven solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 w-full">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden text-base sm:text-lg">
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Hire Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a
              href={resumePDF}
              download
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full font-semibold text-white hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 text-base sm:text-lg"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 w-full flex-wrap">
            {[
              { icon: Github, href: 'https://github.com/NawariyaKunal262004' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/kunal-nawaria-35591629a' },
              { icon: ExternalLink, href: 'https://hub.docker.com/repositories/kunal262004' }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20 shadow-md"
              >
                <Icon size={22} className="sm:size-24" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;