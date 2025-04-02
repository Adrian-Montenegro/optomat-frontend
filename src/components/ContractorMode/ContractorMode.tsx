import React from 'react';
import {
  FaHardHat, FaClipboardList, FaSearch, FaCalendarAlt, FaChartLine, FaExclamationTriangle, FaCloudSun,
} from 'react-icons/fa';
import './ContractorMode.css';

const ContractorMode = () => {
  return (
    <div className="contractor-mode">
      {/* Header */}
      <div className="contractor-header">
        <h1>Contractor Mode</h1>
      </div>

      {/* Quick Access Tools */}
      <div className="contractor-tools">
        <h2>Quick Access Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <FaHardHat className="tool-icon" />
            <h3>Project Overview</h3>
            <p>See live updates on progress.</p>
          </div>
          <div className="tool-card">
            <FaClipboardList className="tool-icon" />
            <h3>Material Tracking</h3>
            <p>Monitor usage and costs.</p>
          </div>
          <div className="tool-card">
            <FaSearch className="tool-icon" />
            <h3>Compliance Checker</h3>
            <p>LEED, OSHA, Local Code verification.</p>
          </div>
          <div className="tool-card">
            <FaCalendarAlt className="tool-icon" />
            <h3>Scheduling & Deadlines</h3>
            <p>Track tasks and deadlines.</p>
          </div>
        </div>
      </div>

      {/* Project Analytics */}
      <div className="contractor-analytics">
        <h2>Project Analytics</h2>
        <div className="analytics-grid">
          <div className="analytics-card">
            <FaChartLine className="analytics-icon" />
            <h3>Cost Breakdown</h3>
            <p>Track expenses in real-time.</p>
          </div>
          <div className="analytics-card">
            <FaClipboardList className="analytics-icon" />
            <h3>Material Inventory</h3>
            <p>Live stock levels and alerts.</p>
          </div>
          <div className="analytics-card">
            <FaExclamationTriangle className="analytics-icon" />
            <h3>Safety Checks</h3>
            <p>Compliance risks highlighted.</p>
          </div>
          <div className="analytics-card">
            <FaCloudSun className="analytics-icon" />
            <h3>Weather & Site Conditions</h3>
            <p>AI-integrated alerts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorMode;