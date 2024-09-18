import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
        <h1>Michael Co</h1>
            <p>
              Hi, I'm Michael Co, a UCLA student passionate about crafting exceptional web experiences.
            </p>
        <button className="cta-button">
            <a href="https://www.linkedin.com/in/michael-co-b60503296/" target="_blank" rel="noopener noreferrer">
                Let's Connect
             </a>
        </button>

    </section>
  );
};

export default Hero;
