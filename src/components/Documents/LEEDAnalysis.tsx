import React, { useState } from 'react';
import { FaLeaf, FaSearch, FaChartArea, FaCogs } from 'react-icons/fa';
import './LEEDAnalysis.css';

const LEEDAnalysis = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className={`leed-panel ${isPanelOpen ? 'open' : ''}`}>
      {/* Toggle Button */}
      <button className="toggle-button" onClick={() => setIsPanelOpen(!isPanelOpen)}>
        <FaLeaf /> Sustainability Insights
      </button>

      {/* Panel Content */}
      {isPanelOpen && (
        <div className="panel-content">
          <button><FaCogs /> Auto-Detect Materials</button>
          <button><FaLeaf /> LEED Certification Check</button>
          <button><FaChartArea /> Heatmap Visualization</button>
          <button><FaSearch /> Smart Search</button>
        </div>
      )}
    </div>
  );
};

export default LEEDAnalysis;