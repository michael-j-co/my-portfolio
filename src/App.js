import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Load the user's dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  // Handle toggling dark mode
  const handleToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="App">
      <Header onToggleDarkMode={handleToggle} darkMode={darkMode} />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
