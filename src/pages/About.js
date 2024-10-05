import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import { FaYarn, FaSignLanguage, FaSign } from 'react-icons/fa'; // Importing relevant icons from react-icons

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>Here are some of my hobbies:</p>
      <ul className="hobby-list">
        <li className="hobby-item">
          <Link to="/crochet" className="hobby-link">
            <FaYarn className="hobby-icon" />
            <div className="hobby-content">
              <span className="hobby-title">Crochet Shelf</span>
              <span className="hobby-subtitle">Meet the buddies</span>
            </div>
          </Link>
        </li>
        <li className="hobby-item">
          <a href="/dance" className="hobby-link">
            <FaSignLanguage className="hobby-icon" />
            <div className="hobby-content">
              <span className="hobby-title">Dance</span>
              <span className="hobby-subtitle">Watch the wiggle</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
