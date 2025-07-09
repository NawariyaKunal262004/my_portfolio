import React, { useState, useEffect } from 'react';
import { PortfolioData, getPortfolioData, setPortfolioData } from '../portfolioData';

const ADMIN_PASSWORD = 'admin123';
const defaultData: PortfolioData = getPortfolioData();

const AdminPanel = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<PortfolioData>(defaultData);
  const [newProject, setNewProject] = useState({ title: '', description: '', tech: '', link: '' });

  useEffect(() => {
    const saved = localStorage.getItem('portfolioData');
    if (saved) setData(JSON.parse(saved));
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) setAuthenticated(true);
    else alert('Incorrect password');
  };

  const handleEducationChange = (field: keyof PortfolioData['education'][0], value: string) => {
    setData((prev) => ({ ...prev, education: [{ ...prev.education[0], [field]: value }] }));
  };

  const handleSkillChange = (idx: number, field: keyof PortfolioData['skills'][0], value: string | number) => {
    setData((prev) => {
      const skills = [...prev.skills];
      (skills[idx] as any)[field] = value;
      return { ...prev, skills };
    });
  };

  // PROJECTS CRUD
  const handleProjectChange = (idx: number, field: string, value: string) => {
    setData((prev) => {
      const projects = [...prev.projects];
      (projects[idx] as any)[field] = value;
      return { ...prev, projects };
    });
  };

  const addProject = () => {
    if (!newProject.title.trim()) return;
    setData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: newProject.title,
          description: newProject.description,
          tech: newProject.tech.split(',').map(t => t.trim()),
          link: newProject.link
        }
      ]
    }));
    setNewProject({ title: '', description: '', tech: '', link: '' });
  };

  const deleteProject = (idx: number) => {
    setData((prev) => {
      const projects = [...prev.projects];
      projects.splice(idx, 1);
      return { ...prev, projects };
    });
  };

  const save = () => {
    setPortfolioData(data);
    alert('Saved! Refresh the site to see changes.');
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <form onSubmit={handleLogin} className="bg-white/10 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Admin Login</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="px-4 py-2 rounded w-full mb-4"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <textarea
          className="w-full p-2 rounded text-black"
          rows={4}
          value={data.profile.about}
          onChange={e => setData({ ...data, profile: { ...data.profile, about: e.target.value } })}
        />
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <input
          className="w-full p-2 rounded text-black mb-2"
          value={data.education[0].degree}
          onChange={e => handleEducationChange('degree', e.target.value)}
        />
        <input
          className="w-full p-2 rounded text-black mb-2"
          value={data.education[0].year}
          onChange={e => handleEducationChange('year', e.target.value)}
        />
        <input
          className="w-full p-2 rounded text-black"
          value={data.education[0].cgpa}
          onChange={e => handleEducationChange('cgpa', e.target.value)}
        />
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        {data.skills.map((skill, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              className="p-2 rounded text-black flex-1"
              value={skill.name}
              onChange={e => handleSkillChange(idx, 'name', e.target.value)}
            />
            <input
              className="p-2 rounded text-black w-20"
              type="number"
              min={0}
              max={100}
              value={skill.level}
              onChange={e => handleSkillChange(idx, 'level', Number(e.target.value))}
            />
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        {data.projects.map((project, idx) => (
          <div key={idx} className="mb-4 p-4 bg-white/10 rounded-lg">
            <input
              className="p-2 rounded text-black w-full mb-2"
              value={project.title}
              onChange={e => handleProjectChange(idx, 'title', e.target.value)}
              placeholder="Project Title"
            />
            <textarea
              className="p-2 rounded text-black w-full mb-2"
              value={project.description}
              onChange={e => handleProjectChange(idx, 'description', e.target.value)}
              placeholder="Description"
            />
            <input
              className="p-2 rounded text-black w-full mb-2"
              value={project.tech.join(', ')}
              onChange={e => handleProjectChange(idx, 'tech', e.target.value)}
              placeholder="Tech (comma separated)"
            />
            <input
              className="p-2 rounded text-black w-full mb-2"
              value={project.link}
              onChange={e => handleProjectChange(idx, 'link', e.target.value)}
              placeholder="Project Link"
            />
            <button onClick={() => deleteProject(idx)} className="bg-red-600 px-4 py-1 rounded text-white">Delete</button>
          </div>
        ))}
        <div className="p-4 bg-white/5 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">Add New Project</h3>
          <input
            className="p-2 rounded text-black w-full mb-2"
            value={newProject.title}
            onChange={e => setNewProject({ ...newProject, title: e.target.value })}
            placeholder="Project Title"
          />
          <textarea
            className="p-2 rounded text-black w-full mb-2"
            value={newProject.description}
            onChange={e => setNewProject({ ...newProject, description: e.target.value })}
            placeholder="Description"
          />
          <input
            className="p-2 rounded text-black w-full mb-2"
            value={newProject.tech}
            onChange={e => setNewProject({ ...newProject, tech: e.target.value })}
            placeholder="Tech (comma separated)"
          />
          <input
            className="p-2 rounded text-black w-full mb-2"
            value={newProject.link}
            onChange={e => setNewProject({ ...newProject, link: e.target.value })}
            placeholder="Project Link"
          />
          <button onClick={addProject} className="bg-blue-600 px-4 py-1 rounded text-white">Add Project</button>
        </div>
      </div>
      <button onClick={save} className="bg-green-600 px-6 py-2 rounded text-white font-bold">Save</button>
    </div>
  );
};

export default AdminPanel; 