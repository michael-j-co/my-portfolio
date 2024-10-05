import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const descriptors = [
    'CS student',
    'problem solver',
    'dancer',
    'director',
    'engineer',
    'mentor',
    'crocheter',
    'bad but trying home cook',
  ];

  const [currentDescriptor, setCurrentDescriptor] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = descriptors[currentIndex];
    const typingSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && currentDescriptor === currentWord) {
      setTimeout(() => setIsDeleting(true), 1300); // Pause before deleting
    } else if (isDeleting && currentDescriptor === '') {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptors.length);
    }

    const timeout = setTimeout(() => {
      setCurrentDescriptor((prev) =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentDescriptor, currentIndex, isDeleting, descriptors]);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Hi, my name is Michael Co.</h1>
        <p>
          I'm a(n) <span className="rotating-text">{currentDescriptor}</span><span className="cursor">|</span>at UCLA who loves to create.
        </p>
        <a href="#contact" className="contact-btn">Contact Me</a>
      </div>
    </div>
  );
};

export default Hero;
