import React, { useState, useEffect } from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button
      className="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
