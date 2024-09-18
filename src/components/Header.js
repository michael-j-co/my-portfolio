import React from 'react';
import '../styles/Header.css';

const Header = ({ onToggleDarkMode, darkMode }) => {
  return (
    <header className="navbar">
      <div className="logo">MC</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#work">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="dark-mode-toggle" onClick={onToggleDarkMode}>
        {darkMode ? '🌞' : '🌙'} {/* Display sun or moon depending on mode */}
      </button>
    </header>
  );
};

export default Header;
