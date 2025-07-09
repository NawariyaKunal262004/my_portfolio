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
      { name: "GitHub", url: "https://github.com/kunalnawariya" },
      { name: "LinkedIn", url: "https://linkedin.com/in/kunalnawariya" },
      { name: "Twitter", url: "https://twitter.com/kunalnawariya" }
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
      link: ""
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