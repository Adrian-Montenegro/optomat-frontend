import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MaterialSelection.css';
import OptoMatLogo from '../../assets/OptoMat-Outline.svg'; // Ensure path is correct

interface Material {
  id: number;
  name: string;
  description: string;
  image: string;
  sustainability: number;
  cost: number;
  durability: number;
}

const MaterialSelection = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    carbonFootprint: false,
    recyclability: false,
    locallySourced: false,
    embodiedEnergy: false,
  });

  const materials: Material[] = [
    {
      id: 1,
      name: 'Reinforced',
      description: 'This is a description for Material 1',
      image: '',
      sustainability: 70,
      cost: 50,
      durability: 80,
    },
    {
      id: 2,
      name: 'Precast',
      description: 'This is a description for Material 2',
      image: '',
      sustainability: 60,
      cost: 40,
      durability: 90,
    },
    {
      id: 3,
      name: 'Limecrete',
      description: 'This is a description for Material 3',
      image: '',
      sustainability: 80,
      cost: 30,
      durability: 70,
    },
    {
      id: 4,
      name: 'Polymer',
      description: 'This is a description for Material 4',
      image: '',
      sustainability: 50,
      cost: 60,
      durability: 85,
    },
  ];

  const handleCardClick = (id: number) => {
    setSelectedCard(id);
  };

  const handleFilterToggle = (filter: keyof typeof filters) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  const handleOptimalBalance = () => {
    const bestMaterial = materials.reduce((best, current) =>
      current.sustainability + current.durability - current.cost >
      best.sustainability + best.durability - best.cost
        ? current
        : best
    );
    setSelectedCard(bestMaterial.id);
  };

  return (
    <div className="material-selection-container">
      {/* Main Layout */}
      <div className="main-layout">
        {/* Left Section (2x2 Grid) */}
        <div className="material-grid">
          {materials.map((material) => (
            <div
              key={material.id}
              className={`material-card ${selectedCard === material.id ? 'selected' : ''}`}
              onClick={() => handleCardClick(material.id)}
            >
              {/* Enlarged OptoMat Logo */}
              <img
                src={OptoMatLogo}
                alt="OptoMat Logo"
                className="opto-mat-logo"
                style={{ width: '32px', height: '32px', position: 'absolute', top: '12px', left: '12px', opacity: 0.85, pointerEvents: 'none' }}
              />
              <h3>{material.name}</h3>
              <p>{material.description}</p>
              <div className="color-bars">
                <div className="color-bar-label">Sustainability</div>
                <div
                  className="color-bar sustainability-bar"
                  style={{ width: `${material.sustainability}%` }}
                ></div>
                <div className="color-bar-label">Cost</div>
                <div
                  className="color-bar cost-bar"
                  style={{ width: `${material.cost}%` }}
                ></div>
                <div className="color-bar-label">Durability</div>
                <div
                  className="color-bar durability-bar"
                  style={{ width: `${material.durability}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section (Material Insights Center) */}
        <div className="right-section">
          {/* Sustainability Insights */}
          <div className="feature-panel">
            <h2 style={{ color: 'white' }}>Sustainability Insights</h2>
            {Object.entries(filters).map(([key, value]) => (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleFilterToggle(key as keyof typeof filters)}
                />
                {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </label>
            ))}
            {/* Apply Filter Button */}
            <div className="apply-filter-button">
              <button className="button">Apply Filter</button>
            </div>
          </div>

          {/* Other Viable Alternatives */}
          <div className="viable-alternatives">
            <h4>Other Viable Alternatives</h4>
            <ul>
              {[
                'Glass Fiber Concrete',
                'Hempcrete',
                'Engineered Timber',
                'Geopolymer',
                'High-Volume Fly Ash Concrete',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Optimal Balance Button */}
          <button className="optimal-balance-button" onClick={handleOptimalBalance}>
            Optimal Balance
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="button-container" style={{ marginTop: '60px' }}>
        <button className="button" onClick={() => navigate('/project-setup')}>Previous</button>
        <button className="button black" onClick={() => navigate('/evaluation')}>Next</button>
      </div>
    </div>
  );
};

export default MaterialSelection;
