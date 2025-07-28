import React, { useState, useEffect } from 'react';
import { PortfolioData, getPortfolioData, setPortfolioData } from '../portfolioData';
import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const AdminPanel = () => {
  // Remove password and authentication logic
  const [authenticated] = useState(true);
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', tech: '', link: '' });

  // Fetch portfolio data from Firestore
  useEffect(() => {
    if (authenticated) {
      setLoading(true);
      getDoc(doc(db, 'portfolio', 'main')).then((docSnap) => {
        if (docSnap.exists()) {
          setData(docSnap.data() as PortfolioData);
        }
        setLoading(false);
      });
    }
  }, [authenticated]);

  const handleEducationChange = (field: keyof PortfolioData['education'][0], value: string) => {
    if (!data) return;
    setData((prev) => ({ ...prev, education: [{ ...prev.education[0], [field]: value }] }));
  };

  const handleSkillChange = (idx: number, field: keyof PortfolioData['skills'][0], value: string | number) => {
    if (!data) return;
    setData((prev) => {
      const skills = [...prev.skills];
      (skills[idx] as any)[field] = value;
      return { ...prev, skills };
    });
  };

  // PROJECTS CRUD
  const handleProjectChange = (idx: number, field: string, value: string) => {
    if (!data) return;
    const projects = [...data.projects];
    (projects[idx] as any)[field] = value;
    setData({ ...data, projects });
  };

  const addProject = () => {
    if (!data || !newProject.title.trim()) return;
    setData({
      ...data,
      projects: [
        ...data.projects,
        {
          title: newProject.title,
          description: newProject.description,
          tech: newProject.tech.split(',').map(t => t.trim()),
          link: newProject.link
        }
      ]
    });
    setNewProject({ title: '', description: '', tech: '', link: '' });
  };

  const deleteProject = (idx: number) => {
    if (!data) return;
    const projects = [...data.projects];
    projects.splice(idx, 1);
    setData({ ...data, projects });
  };

  // Save all changes to Firestore
  const save = async () => {
    if (!data) return;
    setLoading(true);
    await setDoc(doc(db, 'portfolio', 'main'), data);
    setLoading(false);
    alert('Saved! Refresh the site to see changes.');
  };

  if (loading || !data) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
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