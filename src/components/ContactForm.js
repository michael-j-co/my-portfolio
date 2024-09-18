import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageStatus, setMessageStatus] = useState('');  // To show status of the message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your own EmailJS Service ID, Template ID, and User ID
    const serviceId = 'service_d5q30in';
    const templateId = 'template_egga89q';
    const userId = '0TRi3xqvkTik70uqw';

    const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        reply_to: formData.email,  // Add reply_to field
      };
    
    emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setMessageStatus('Message sent successfully! ✅');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error('FAILED...', error);
            setMessageStatus('Failed to send message. Please try again. ❌');
        });
    };
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {/* Show the status message */}
      {messageStatus && <p className="message-status">{messageStatus}</p>}
    </section>
  );
};

export default ContactForm;
