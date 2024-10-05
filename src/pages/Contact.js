import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Import icons
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>You can reach me via:</p>
      <div className="contact-links">
        <a
          href="mailto:michaelco@gmail.com"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="contact-icon" /> Gmail
        </a>
        <a
          href="https://www.linkedin.com/in/michael-co-b60503296"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
