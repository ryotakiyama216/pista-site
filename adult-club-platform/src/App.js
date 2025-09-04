import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import TargetUsers from './components/TargetUsers';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Features />
      <TargetUsers />
      <Categories />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;