import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import lightLogo from '../assets/lightmc.png';
import darkLogo from '../assets/darkmc.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/my-portfolio" onClick={() => setMenuOpen(false)}>
            <img
              src={darkMode ? darkLogo : lightLogo}
              alt="Logo"
              className="logo-image"
            />
          </NavLink>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink exact to="/my-portfolio" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
          {/* Dark Mode toggle as text inside dropdown when menu is open */}
          {menuOpen && (
            <li className="dark-mode-menu-item">
              <button onClick={toggleDarkMode} className="dark-mode-menu-button">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          )}
        </ul>
        {/* Dark Mode icon in the navbar when menu is closed */}
        {!menuOpen && (
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
