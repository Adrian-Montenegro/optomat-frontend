import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Evaluation.css';

interface EvaluationProps {
  selectedMaterials: { name: string; sustainability: number; cost: number; durability: number }[];
  projectName: string;
}

const Evaluation: React.FC<EvaluationProps> = ({ selectedMaterials, projectName }) => {
  const navigate = useNavigate();

  const [weights, setWeights] = useState({
    sustainability: 40,
    cost: 30,
    durability: 30,
  });

  const [leedScore, setLeedScore] = useState(0);
  const [leedLevel, setLeedLevel] = useState('Certified');

  // Calculate LEED score based on weights
  useEffect(() => {
    const totalScore =
      (weights.sustainability * 0.6 + weights.cost * 0.3 + weights.durability * 0.1) / 100 * 100;
    setLeedScore(totalScore);

    // Determine LEED level based on exact required points
    if (totalScore >= 90) setLeedLevel('Platinum');
    else if (totalScore >= 80) setLeedLevel('Gold');
    else if (totalScore >= 70) setLeedLevel('Silver');
    else if (totalScore >= 60) setLeedLevel('Certified');
    else setLeedLevel('Not Certified');
  }, [weights]);

  const handleSliderChange = (trait: string, value: number) => {
    const remaining = 100 - value;
    const otherTraits = Object.keys(weights).filter((key) => key !== trait);

    // Calculate the sum of the other traits
    const sumOtherTraits = otherTraits.reduce((sum, key) => sum + weights[key as keyof typeof weights], 0);

    // Distribute the remaining percentage proportionally
    const newWeights = { ...weights, [trait]: value };
    otherTraits.forEach((key) => {
      newWeights[key as keyof typeof weights] = Math.round((weights[key as keyof typeof weights] / sumOtherTraits) * remaining);
    });

    // Ensure the total is exactly 100%
    const total = Object.values(newWeights).reduce((sum, val) => sum + val, 0);
    if (total !== 100) {
      newWeights[otherTraits[0] as keyof typeof weights] += 100 - total;
    }

    setWeights(newWeights);
  };

  return (
    <div className="container">
      {/* Left Card: Material Prioritization */}
      <div className="card">
        <h2 className="card-title">Material Prioritization</h2>
        <p>Adjust the sliders to balance sustainability, cost, and durability</p>
        <p></p> {/* Added extra line */}

        {/* Sustainability Slider */}
        <label htmlFor="sustainability">Sustainability</label>
        <input
          type="range"
          id="sustainability"
          min="0"
          max="100"
          value={weights.sustainability}
          onChange={(e) => handleSliderChange('sustainability', Number(e.target.value))}
        />

        {/* Cost Slider */}
        <label htmlFor="cost">Cost</label>
        <input
          type="range"
          id="cost"
          min="0"
          max="100"
          value={weights.cost}
          onChange={(e) => handleSliderChange('cost', Number(e.target.value))}
        />

        {/* Durability Slider */}
        <label htmlFor="durability">Durability</label>
        <input
          type="range"
          id="durability"
          min="0"
          max="100"
          value={weights.durability}
          onChange={(e) => handleSliderChange('durability', Number(e.target.value))}
        />
      </div>

      {/* Right Card: LEED Certification */}
      <div className="card">
        <h2 className="card-title">LEED Certification</h2>
        <div className="leed-score">
          <p className="score-value">{leedScore.toFixed(1)} / 100 Points</p>
          <h3 className={`leed-level ${leedLevel.toLowerCase()}`}>{leedLevel}</h3>
          <div className="leed-progress">
            <div className="progress-fill" style={{ width: `${leedScore}%` }}></div>
          </div>
          {/* Horizontal Certification Levels */}
          <div className="certification-levels">
            <span>Certified (60+)</span>
            <span>  Silver (70+)</span>
            <span>  Gold (80+)</span>
            <span>  Platinum (90+)</span>
          </div>
        </div>
        <div className="improvement-section">
          <h3>How to Improve?</h3>
          <ul className="improvement-list">
            <li>Switch to low-carbon materials.</li>
            <li>Optimize energy efficiency</li>
            <li>Incorporate supplementary cementitious materials</li>
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="button-container">
        <button className="button" onClick={() => navigate('/project-setup')}>Previous</button>
        <button className="button black" onClick={() => navigate('/final-report')}>Next</button>
      </div>
    </div>
  );
};

export default Evaluation;