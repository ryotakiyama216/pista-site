import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import PistaPage from './pages/PistaPage';
import PlatformPage from './pages/PlatformPage';
import CrfPage from './pages/CrfPage';
import ModelPage from './pages/ModelPage';
import MembersPage from './pages/MembersPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <AnimatedBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/pista" element={<PistaPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/crf" element={<CrfPage />} />
          <Route path="/model" element={<ModelPage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;