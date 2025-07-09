import React from 'react';

const certifications = [
  {
    title: 'EXIN Certified in Artificial Intelligence',
    description: 'Credential demonstrating foundational and practical knowledge in AI concepts, including machine learning, natural language processing, and ethical AI.',
    issuer: 'EXIN',
    year: '2024',
    link: ''
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    description: 'Validates understanding of AWS Cloud fundamentals, core services, security, architecture, and billing, with exposure to global cloud deployment practices.',
    issuer: 'Amazon',
    year: '2024',
    link: ''
  }
];

const internships = [
  {
    company: 'LinuxWorld Informatics Pvt. Ltd.',
    role: 'Multi-Tech Developer Intern',
    duration: 'June 2024 – Present',
    mentor: 'Vimal Daga Sir',
    description: 'Currently undergoing an intensive hands-on internship involving real-world development across multiple domains—AI, DevOps, Automation, Cloud, and Full-Stack Web Development.',
    technologies: ['Python', 'JavaScript', 'Streamlit', 'Flask', 'Node.js', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub', 'Redis', 'PostgreSQL', 'Supabase', 'LangChain', 'Gemini 1.5 Flash', 'Twilio'],
    achievements: [
      'Built a complete CI/CD pipeline integrating Jenkins, Docker, GitHub, and Flask',
      'Developed over 50 CLI and GUI-based Linux and Docker automation tools',
      'Created AI-powered apps such as Career Roadmap Generator, Grocery Manager, and LangChain Chat Assistant',
      'Co-built ExamVector, a scalable, multilingual PWA for digital exam management',
      'Implemented automation tools for WhatsApp messaging, SMS alerts, photo capture, and social media integration'
    ],
    outcome: 'Gained end-to-end engineering experience in deploying real-world, scalable, production-ready applications with cross-domain integration.',
    current: true
  },
  {
    company: 'Banao Technologies',
    role: 'Business Development Intern',
    duration: 'April 2024 – June 2024',
    description: 'Worked at the intersection of technology and sales to streamline client acquisition using automation tools and strategic outreach campaigns.',
    technologies: ['Command-line automation', 'LinkedIn Sales Navigator', 'Apollo', 'Skrapp', 'Hunter', 'CRM systems', 'Google Sheets'],
    achievements: [
      'Identified and researched high-quality leads across target domains',
      'Executed automated and manual outreach using CRM and LinkedIn tools',
      'Used browser automation extensions for prospecting and engagement',
      'Optimized lead tracking workflows for scalability'
    ],
    outcome: 'Bridged technical and business workflows while improving outreach strategy, CRM efficiency, and data-driven sales pipeline development.',
    current: false
  }
];

const research = [
  {
    title: 'Neuromorphic Edge AI in Military Drones',
    duration: 'April 2024 – Present',
    guide: 'Dr. Rajender Singh (Mechanical Engineer)',
    description: 'This project explores the use of Spiking Neural Networks and neuromorphic chips like Loihi and Edge TPU for real-time decision-making in military drones. It focuses on low-power, high-efficiency AI systems for target detection, navigation, and obstacle avoidance.',
    technologies: ['AirSim', 'Python', 'ROS'],
    status: 'The research aims to enhance drone autonomy and responsiveness in edge-deployed environments. The paper is currently being finalized for journal submission.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Certifications */}
        <div className="mb-20 w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl h-full shadow-2xl border-2 border-white/20 bg-white/10 backdrop-blur-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 overflow-hidden min-h-[240px] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-6">
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{cert.title.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-2">
                          {cert.description}
                        </p>
                        <div className="flex flex-col text-sm text-blue-300">
                          <span>Issuer: {cert.issuer}</span>
                          <span>Year: {cert.year}</span>
                          {cert.link && (
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mt-1">View Certificate</a>
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
        </div>

        {/* Internships Timeline */}
        <div className="mb-20 w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {internships.map((internship, index) => (
                <div key={index} className="relative flex items-start gap-8 mb-12">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                    internship.current 
                      ? 'bg-gradient-to-br from-green-400 to-blue-500 shadow-lg shadow-green-500/20' 
                      : 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20'
                  }`}>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 group">
                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 hover:border-blue-400/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {internship.role}
                          </h3>
                          <p className="text-blue-400 font-semibold text-lg">{internship.company}</p>
                          {internship.mentor && (
                            <p className="text-gray-300 text-sm">Mentor: {internship.mentor}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-gray-300 mb-2">
                            <span>📅</span>
                            {internship.duration}
                          </div>
                          {internship.current && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {internship.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Contributions:</h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-300 flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <p className="text-blue-200 font-medium">Outcome: {internship.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research */}
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Research Projects
          </h2>
          <div className="max-w-4xl mx-auto">
            {research.map((project, index) => (
              <div key={index} className="group relative mb-12 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{project.title.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">
                          Ongoing
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mb-4 text-gray-300">
                        <div className="flex items-center gap-2">
                          <span>📅</span>
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <span>👨‍🏫</span>
                          {project.guide}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                        <p className="text-indigo-200">{project.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;