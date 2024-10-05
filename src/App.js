import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact'; // Reuse Contact component for the contact page
import Crochet from './pages/Crochet';
import Dance from './pages/Dance';
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
            <Route path="/my-portfolio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* Reuse Contact component here */}
            <Route path="/crochet" element={<Crochet />} /> 
            <Route path="/dance" element={<Dance />} />
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
