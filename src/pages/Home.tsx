import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
