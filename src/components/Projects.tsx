import React, { useState } from 'react';
import { ExternalLink, Database, Bot, Cloud, Layers, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Grocery Manager – Smart Shopping Assistant',
    description: 'A responsive grocery tracking tool that replaces handwritten lists with an intelligent digital interface. Users can add grocery items, track quantities, mark items as purchased, and auto-calculate expenses.',
    tech: ['Python', 'Streamlit'],
    type: 'Internship Project',
    impact: 'Simplifies household budgeting and grocery planning for both offline and online shoppers.',
    enhancements: 'Voice command support, data backup, budget analytics, and AI-based recommendations.',
    icon: Database,
    gradient: 'from-green-400 to-blue-500',
    github: 'https://github.com/NawariyaKunal262004/Grocery_manager.git',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_python-streamlit-linuxworld-activity-7342889835981885444-p4Sd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 2,
    title: 'AI-Powered Career Roadmap Generator',
    description: 'A smart web app that generates personalized, region-specific career roadmaps using Generative AI.',
    tech: ['Python', 'Gradio', 'Gemini 1.5 Flash'],
    type: 'AI Internship Project',
    impact: 'Developed during a Generative AI session at LinuxWorld, this app empowers learners and professionals to explore career paths, analyze skill gaps, and plan learning journeys. It adapts to global education systems, supports hardware-based and practical careers, and enables users to export their roadmap as a PDF. Features Gemini 1.5 Flash for fast, accurate content generation and a beautiful Gradio UI.',
    enhancements: 'Add user accounts for saving progress, integrate more global education frameworks, and support real-time collaboration on roadmaps.',
    icon: Bot,
    gradient: 'from-purple-400 to-pink-500',
    github: 'https://github.com/NawariyaKunal262004/Models/blob/main/rmap.py',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_generativeai-geminiapi-gradio-activity-7345664192588259328-zae7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 3,
    title: 'DevOps CI/CD Project',
    description: 'Built a complete CI/CD pipeline from scratch for a Flask API, including testing, containerization, and automation.',
    tech: ['Python', 'Flask', 'Pytest', 'Docker', 'Jenkins', 'GitHub', 'RHEL'],
    type: 'Personal/Internship Project',
    impact: 'Designed and implemented a Flask API to handle user data, wrote robust test cases with Pytest, and containerized the application using Docker. Automated the entire workflow with Jenkins for seamless integration and deployment, demonstrating end-to-end DevOps skills from coding to production.',
    enhancements: 'Integrate Kubernetes for orchestration, add monitoring with Prometheus, and implement advanced security and secret management.',
    icon: Cloud,
    gradient: 'from-blue-400 to-cyan-500',
    github: 'https://github.com/NawariyaKunal262004/devops-project-.git',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_cicd-slides-activity-7351154166167240704-cjIY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 4,
    title: 'Telegram Bot',
    description: 'A System Monitoring Telegram Bot built with Python and hosted on AWS EC2 (Amazon Linux).',
    tech: ['Python', 'Telegram API', 'psutil', 'AWS EC2'],
    type: 'Personal Project',
    impact: 'Developed a Telegram bot that monitors real-time CPU, RAM, and Disk usage, sending updates directly to Telegram via commands like /status. Utilized async Python with the python-telegram-bot library and deployed the solution on AWS EC2 for 24/7 uptime. This project merged cloud infrastructure with Python automation for practical DevOps monitoring.',
    enhancements: 'Add alert thresholds, historical usage graphs, multi-server support, and Dockerize for easier deployment.',
    icon: Layers,
    gradient: 'from-orange-400 to-red-500',
    github: 'https://github.com/NawariyaKunal262004/Models/blob/main/bot.py',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_python-telegrambot-aws-activity-7354337459603689472-b9vp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 5,
    title: 'Python and MongoDB Integration',
    description: 'Integration of Python with MongoDB for backend development.',
    tech: ['Python', 'MongoDB'],
    type: 'Personal Project',
    impact: 'Built a seamless workflow for interacting with MongoDB using Python. Leveraged Jupyter Notebook and the pymongo library to connect to a local MongoDB server, create databases and collections, and insert structured documents programmatically. Used MongoDB Compass for real-time data visualization and verification.',
    enhancements: 'Expand to support advanced queries, aggregation pipelines, and cloud-hosted MongoDB. Add user authentication and error handling for production use.',
    icon: Globe,
    gradient: 'from-indigo-400 to-purple-500',
    github: 'https://github.com/NawariyaKunal262004/Models/blob/main/pymongo.ipynb',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_mongodb-backenddevelopment-nosql-activity-7354411013703675905-J59d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 6,
    title: 'Linux Sound Card Access',
    description: 'Enabled Docker containers to access and use the host machine’s sound card for real audio playback.',
    tech: ['Docker', 'Linux', 'PulseAudio', 'espeak', 'ffmpeg', 'alsa-utils'],
    type: 'Personal Project',
    impact: 'Explored advanced Docker usage by granting containers access to host audio hardware and PulseAudio server, mounting authentication cookies, and installing audio tools. Successfully played sound from inside the container, unlocking use cases like text-to-speech, audio preprocessing, and multimedia containers. This project was a deep dive into Linux internals and device mounting.',
    enhancements: 'Automate setup with scripts, support more audio servers, and document for broader developer adoption.',
    icon: Database,
    gradient: 'from-green-400 to-blue-500',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_docker-linux-audio-activity-7349256120886022144-u2sW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 7,
    title: 'Custom Firefox Icon in RHEL9',
    description: 'Personalized the Firefox application icon on Red Hat Enterprise Linux 9 by editing .desktop files in GNOME.',
    tech: ['Linux', 'RHEL9', 'GNOME', '.desktop files'],
    type: 'Personal Project',
    impact: 'Explored Linux desktop customization by replacing the default Firefox icon with a custom design. Edited the .desktop file, updated the Icon field, and demonstrated the change with a side-by-side comparison. This project showcased the flexibility and user control available in Linux environments, even at the UI level.',
    enhancements: 'Automate icon replacement with a script, extend to other applications, and document the process for new Linux users.',
    icon: Cloud,
    gradient: 'from-blue-400 to-cyan-500',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_linux-rhel9-opensource-activity-7348199161789411328-1m7z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 8,
    title: 'Python + NumPy Dockerized in Container',
    description: 'Created a Docker image for Python with NumPy pre-installed, enabling instant numerical computing in an isolated environment.',
    tech: ['Python', 'NumPy', 'Docker'],
    type: 'Internship Project',
    impact: 'Built a custom Docker image using a Dockerfile to run Python with NumPy, auto-launching the Python shell for immediate use. Tagged and ran the image as numpy-pandas, and verified NumPy operations inside the container. Gained hands-on experience with Dockerfile instructions, lightweight environment creation, and debugging image issues.',
    enhancements: 'Add support for more scientific libraries (e.g., Pandas, SciPy), publish the image to Docker Hub, and automate testing of the environment.',
    icon: Layers,
    gradient: 'from-orange-400 to-red-500',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_linux-rhel9-opensource-activity-7348199161789411328-1m7z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 9,
    title: 'Docker In Docker',
    description: 'Explored Docker-in-Docker (DIND) to enable containers to build, run, and manage Docker itself.',
    tech: ['Docker', 'CI/CD', 'Linux'],
    type: 'Personal Project',
    impact: 'Implemented and compared two approaches for Docker-in-Docker: running a dedicated Docker daemon inside the container for full isolation, and host-socket binding for seamless integration. Gained hands-on experience with sandboxed CI runners, secure multi-tenant setups, and rapid local development. Learned the trade-offs between isolation, performance, and security.',
    enhancements: 'Automate DIND setup for CI/CD, add security best practices, and document use cases for different workflows.',
    icon: Globe,
    gradient: 'from-indigo-400 to-purple-500',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_docker-devops-cicd-activity-7349118601028673536-Ol-l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 10,
    title: 'RAM Swap Using Python',
    description: 'A Python script for real-time monitoring of system RAM and swap memory usage.',
    tech: ['Python', 'psutil', 'Terminal', 'System Monitoring'],
    type: 'Personal Project',
    impact: 'Developed a script using Python and psutil to track total, available, used, and free RAM, as well as swap memory statistics and usage percentages. This project deepened my understanding of system-level operations, memory management, and DevOps automation. Inspired by the Linux World ecosystem and mentorship of Vimal Daga Sir.',
    enhancements: 'Add alerting for high usage, logging to file, graphical dashboard, and cross-platform support.',
    icon: Database,
    gradient: 'from-green-400 to-blue-500',
    github: 'https://github.com/NawariyaKunal262004/Automations/blob/main/ram.py',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_python-linux-systemmonitoring-activity-7352512999200346112-J4Nb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 11,
    title: 'Email Automation',
    description: 'A robust Email Automation app built with Python and Streamlit for easy, no-setup email sending.',
    tech: ['Python', 'Streamlit', 'smtplib', 'Email Automation'],
    type: 'Personal Project',
    impact: 'Developed a user-friendly web app that allows anyone to send emails quickly and efficiently, without technical setup. Supports bulk emails, alerts, reports, and reminders. This project highlighted the power of automation and the value of simple scripts paired with an intuitive UI.',
    enhancements: 'Add attachment support, scheduling, email templates, and integration with third-party APIs for analytics.',
    icon: Bot,
    gradient: 'from-purple-400 to-pink-500',
    github: 'https://github.com/NawariyaKunal262004/Automations/blob/main/my_email_app.py',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_learningbydoing-emailautomation-pythonprojects-activity-7350728324165349376-mEHY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 12,
    title: 'WhatsApp Automation',
    description: 'A lightweight WhatsApp messaging automation tool built with Python, Streamlit, and PyWhatKit.',
    tech: ['Python', 'Streamlit', 'PyWhatKit', 'WhatsApp Web Automation'],
    type: 'Personal Project',
    impact: 'Developed a browser-based app that enables users to send instant WhatsApp messages via WhatsApp Web, using sendwhatmsg_instantly() for smooth automation. Designed for personal use, marketing, or client communication, this project demonstrates the power of Python for real-world task automation.',
    enhancements: 'Add message scheduling, group messaging, media attachments, and improved error handling.',
    icon: Cloud,
    gradient: 'from-blue-400 to-cyan-500',
    github: 'https://github.com/NawariyaKunal262004/Automations/blob/main/whatsapp.py',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_whatsappautomation-pythonprojects-streamlit-activity-7350441454130896896-dJ4E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 13,
    title: 'LinkedIn Automation',
    description: 'An automated LinkedIn posting tool built with Python, Selenium, and Streamlit.',
    tech: ['Python', 'Selenium', 'Streamlit', 'LinkedIn'],
    type: 'Personal Project',
    impact: 'Created a tool that allows users to log in, schedule posts, and upload images to LinkedIn programmatically via a user-friendly interface. This project strengthened my skills in browser automation, form handling, and clean backend workflows, with a focus on real-world automation.',
    enhancements: 'Add support for post analytics, multi-account management, and integration with other social platforms.',
    icon: Layers,
    gradient: 'from-orange-400 to-red-500',
    github: 'https://github.com/NawariyaKunal262004/Automations/blob/main/linkedin.py',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_linkedinautomation-pythonautomation-selenium-activity-7350365951827038208-ge62?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  },
  {
    id: 14,
    title: 'Instagram Automation',
    description: 'A fully functional Instagram automation tool built with Python and instabot, featuring a Streamlit interface.',
    tech: ['Python', 'instabot', 'Streamlit', 'Instagram'],
    type: 'Personal Project',
    impact: 'Developed a tool that enables users to log in, upload images, and post captions to Instagram automatically from a web interface. This project deepened my understanding of function-based programming, Python automation, and real-time integration of user inputs with backend logic.',
    enhancements: 'Add support for stories, scheduled posts, analytics, and multi-account management.',
    icon: Globe,
    gradient: 'from-indigo-400 to-purple-500',
    github: 'https://github.com/NawariyaKunal262004/Automations/blob/main/insta.py',
    linkedin: 'https://www.linkedin.com/posts/kunal-nawaria-35591629a_instagramautomation-pythonproject-instabot-activity-7350172614817959936-EQlq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhlB3EBHD64VN_puCbRV72gW1oKB2rHTGI'
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving capabilities
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-500 ${activeProject === project.id ? 'scale-105' : 'hover:scale-102'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border-2 border-white/20 overflow-hidden shadow-2xl">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Project Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon size={32} className="text-white" />
                    </div>
                    {/* Project Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {/* Expandable Details */}
                      <button
                        onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-4"
                      >
                        <span>View Details</span>
                        <span className={`transform transition-transform duration-300 ${activeProject === project.id ? 'rotate-90' : ''}`}>
                        </span>
                      </button>
                      {/* Expanded Content */}
                      {activeProject === project.id && (
                        <div className="space-y-4 p-6 bg-white/10 rounded-2xl border border-white/20 animate-fade-in">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                            <p className="text-gray-300">{project.impact}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Future Enhancements</h4>
                            <p className="text-gray-300">{project.enhancements}</p>
                          </div>
                          <div className="flex gap-4 pt-4">
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                GitHub Repo
                              </a>
                            )}
                            {project.linkedin && (
                              <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/>
                                </svg>
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;