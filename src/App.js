import React from 'react';

import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import SkillPage from './pages/SkillPage';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <SkillPage />
      <PortfolioPage />
      <Footer />
    </div>
  );
}

export default App;
