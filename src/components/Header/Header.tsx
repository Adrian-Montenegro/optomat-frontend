import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';
import logo from '../../assets/OptoMat-Outline.svg';

const Header: React.FC = () => {
  const location = useLocation();

  // ✅ Hide Header on Intro page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo">
        <NavLink to="/dashboard"> {/* ✅ Goes to dashboard */}
          <img src={logo} alt="OptoMat Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* Center: Navigation */}
      <nav className="nav">
        <NavLink
          to="/project-setup"
          className={`nav-link ${location.pathname === '/project-setup' ? 'active' : ''}`}
        >
          Project Setup
        </NavLink>
        <NavLink
          to="/material-selection"
          className={`nav-link ${location.pathname === '/material-selection' ? 'active' : ''}`}
        >
          Material Selection
        </NavLink>
        <NavLink
          to="/evaluation"
          className={`nav-link ${location.pathname === '/evaluation' ? 'active' : ''}`}
        >
          Evaluation
        </NavLink>
        <NavLink
          to="/final-report"
          className={`nav-link ${location.pathname === '/final-report' ? 'active' : ''}`}
        >
          Final Report
        </NavLink>
        <NavLink
          to="/documents"
          className={`nav-link ${location.pathname === '/documents' ? 'active' : ''}`}
        >
          Documents
        </NavLink>
        <NavLink
          to="/contractor-mode"
          className={`nav-link ${location.pathname === '/contractor-mode' ? 'active' : ''}`}
        >
          Contractor Mode
        </NavLink>
      </nav>

      {/* Right: Login Button */}
      <div className="login-button">
        <NavLink to="/login" className="nav-link">
          <FaUserCircle className="login-icon" />
          <span>Login</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
