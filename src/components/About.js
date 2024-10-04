import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>Here are some of my hobbies:</p>
      <ul>
        <li><a href="#crochet">Crochet Shelf</a></li>
        <li><a href="#dance">Dance</a></li>
      </ul>
    </section>
  );
};

export default About;
