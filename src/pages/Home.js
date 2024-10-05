import React from 'react';
import Hero from '../components/Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default Home;
