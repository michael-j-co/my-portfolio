import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>You can reach me via:</p>
      <a href="mailto:your-email@gmail.com">Gmail</a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </section>
  );
};

export default Contact;
