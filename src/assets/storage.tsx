import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import OptoMatLogo from '../../assets/OptoMat-Outline.svg'; // Import the logo from src/assets

const Intro = () => {
  const navigate = useNavigate();
  const [dimBackground, setDimBackground] = useState(false);

  // Dim the background after 1 second
  useEffect(() => {
    const timer = setTimeout(() => setDimBackground(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-container">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Dark Overlay */}
      <div className={`overlay ${dimBackground ? 'dimmed' : ''}`}></div>

      {/* Centered Content */}
      <div className="content">
        {/* Logo */}
        <img src={OptoMatLogo} alt="OptoMat Logo" className="logo-svg" />

        {/* Title */}
        <h1>OPTOMAT</h1>

        {/* Subtitle */}
        <h3>Optimized Materials for Smarter Decisions</h3>

        {/* Enter Button */}
        <button className="enter-button" onClick={() => navigate('/project-setup')}>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Intro;




