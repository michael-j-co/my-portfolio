import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'; // Reuse Contact component for the contact page
import './App.css';
import './styles/FadeTransition.css'; // Import the CSS for transitions

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* Reuse Contact component here */}
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

// Wrap App component with Router to use useLocation
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
