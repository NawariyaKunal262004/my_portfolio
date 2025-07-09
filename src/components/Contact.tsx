import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const socials = [
  { name: 'GitHub', url: 'https://github.com/NawariyaKunal262004', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kunal-nawaria-35591629a', icon: Linkedin },
  { name: 'DockerHub', url: 'https://hub.docker.com/repositories/kunal262004', icon: ExternalLink }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden animate-fade-in-up">
      {/* Animated Particle/Shape Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.5 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x inline-block relative tracking-tight">
            Get In Touch
            <span className="block h-1 w-24 mt-3 mx-auto bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 rounded-full animate-gradient-x animate-pulse-slow"></span>
          </h2>
          <p className="text-gray-200 text-xl max-w-2xl mx-auto font-medium animate-fade-in-up">
            Let's connect and explore how I can contribute to your DataOps initiatives!
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Animated Glowing Border */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 opacity-60 blur-2xl animate-pulse-slow z-0" />
          <div className="relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-white/20 glass flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide animate-fade-in-up bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg animate-glow-bar text-center">
              Kunal Nawariya
            </span>
            <div className="flex flex-col items-center gap-3 mb-8 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                <Mail className="text-white" size={24} />
              </div>
              <a
                href="mailto:kunalnawariya26@gmail.com"
                className="text-blue-200 text-lg md:text-xl font-semibold select-all transition-all duration-300 hover:text-white hover:underline hover:shadow-lg hover:animate-glow-bar text-center"
                style={{ textShadow: '0 0 8px #60a5fa, 0 0 16px #a78bfa' }}
              >
                kunalnawariya26@gmail.com
              </a>
            </div>
            <div className="flex gap-6 mb-4 mt-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 px-5 py-3 bg-white/10 rounded-2xl border border-white/10 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  style={{ minWidth: 90 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 group-hover:from-purple-500 group-hover:to-blue-400 transition-all duration-300 shadow-md">
                    <social.icon className="text-white group-hover:text-blue-200 transition-all duration-300" size={22} />
                  </div>
                  <span className="text-blue-200 text-sm font-medium group-hover:text-white transition-all duration-300">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center animate-fade-in-up">
              <p className="text-gray-300 text-base">Open to collaboration, freelance, and full-time opportunities. Feel free to reach out!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;