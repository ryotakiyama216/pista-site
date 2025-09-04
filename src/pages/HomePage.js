import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TargetUsers from '../components/TargetUsers';
import Categories from '../components/Categories';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <TargetUsers />
      <Categories />
      <HowItWorks />
      <CTA />
    </>
  );
};

export default HomePage;