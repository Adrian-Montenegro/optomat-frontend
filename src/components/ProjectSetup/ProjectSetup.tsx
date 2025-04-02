import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectSetup.css';

const ProjectSetup: React.FC = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [location, setLocation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState('');
  const [isHighPriority, setIsHighPriority] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ projectName, projectType, location, zipCode, startDate, duration, isHighPriority });
    navigate('/material-selection');
  };

  return (
    <div className="project-setup-container">
      <div className="form-container">
        <h1 className="project-title">PROJECT SETUP</h1>
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
            >
              <option value="">Project type</option>
              <option value="Construction">Construction</option>
              <option value="Renovation">Renovation</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          <div className="form-group">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="">Select state</option>
              {[
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
              ].map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="form-group zip-code-input">
            <input
              type="text"
              placeholder="Zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group duration-input">
            <input
              type="number"
              placeholder="Days"
              value={duration}
              min="1"
              max="365"
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>

          <div className="form-group full-width">
            <div className="high-priority-container">
              <div className="toggle-group">
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={isHighPriority}
                    onChange={(e) => setIsHighPriority(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
                <span className="toggle-label">High-Priority Mode</span>
              </div>
              <p className="toggle-description">
                To prioritize project for faster processing
              </p>
            </div>
          </div>

          <div className="form-group full-width button-container">
            <button type="submit" className="create-project-btn">Create Project</button>
          </div>
        </form>
      </div>

      <div className="background-container"></div>
    </div>
  );
};

export default ProjectSetup;
