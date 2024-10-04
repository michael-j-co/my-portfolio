import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
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
          {/* Replace this with your actual logo */}
          <NavLink to="/" onClick={() => setMenuOpen(false)}>MC</NavLink>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink exact to="/" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
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
        </ul>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
