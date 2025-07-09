import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';

function MainApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;