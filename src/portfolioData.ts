export interface EducationEntry {
  degree: string;
  year: string;
  cgpa: string;
}

export interface SkillEntry {
  name: string;
  level: number;
}

export interface ProjectEntry {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    photo: string;
    about: string;
    contact: string;
    socials: SocialLink[];
  };
  education: EducationEntry[];
  skills: SkillEntry[];
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
}

const defaultData: PortfolioData = {
  profile: {
    name: "Kunal Nawariya",
    photo: "kunal_photo.jpg",
    about: "Data Science student passionate about AI, DataOps, and building intelligent data pipelines.",
    contact: "kunal@example.com",
    socials: [
      { name: "GitHub", url: "https://github.com/NawariyaKunal262004" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kunal-nawaria-35591629a" },
      { name: "DockerHub", url: "https://hub.docker.com/repositories/kunal262004" }
    ]
  },
  education: [
    {
      degree: "B.Tech in AI & Data Science",
      year: "3rd Year",
      cgpa: "6.7"
    }
  ],
  skills: [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "DataOps", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "React", level: 80 },
    { name: "Docker", level: 85 }
  ],
  projects: [
    {
      title: "Grocery Manager",
      description: "A responsive grocery tracking tool...",
      tech: ["Python", "Streamlit"],
      link: ""
    }
    // Add more projects as needed
  ],
  certifications: [
    {
      title: "EXIN Certified in Artificial Intelligence",
      issuer: "EXIN",
      year: "2024",
      link: "https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=C541C945-386B-492D-A2FE-41295AE76B96&ts=259646250"
    }
     {
      title: "Specialization in Redaht certified  cloud native developement with openhift and kubernates",
      issuer: "Redhat in association with coursera",
      year: "september 2025",
      link: "https://coursera.org/share/8f432ebf22e29a54879c0238657a0d65"
    }
    // Add more certifications as needed
  ]
};

export function getPortfolioData(): PortfolioData {
  const saved = localStorage.getItem('portfolioData');
  return saved ? JSON.parse(saved) : defaultData;
}

export function setPortfolioData(data: PortfolioData) {
  localStorage.setItem('portfolioData', JSON.stringify(data));
} 