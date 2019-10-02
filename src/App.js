import React from 'react';

import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import SkillPage from './pages/SkillPage';
import Footer from './layout/Footer';

import './App.css';

const App = () => {
  return (
    <main className="App">
      <LandingPage />
      <SkillPage />
      <ProjectPage />
      <Footer />
    </main>
  );
}

export default App;
