import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,
} from 'recharts';
import './FinalReport.css';

interface FinalReportProps {
  selectedMaterials: {
    name: string;
    sustainability: number;
    cost: number;
    durability: number;
  }[];
  projectName: string;
  projectType: string;
  location: string;
  startDate: string;
  duration: number;
  isHighPriority: boolean;
  weights: {
    sustainability: number;
    cost: number;
    durability: number;
  };
}

const FinalReport: React.FC<FinalReportProps> = ({
  selectedMaterials,
  projectName,
  projectType,
  location,
  startDate,
  duration,
  isHighPriority,
  weights,
}) => {
  const navigate = useNavigate();

  const barData = selectedMaterials.map((material) => ({
    name: material.name,
    sustainability: material.sustainability,
    cost: material.cost,
    durability: material.durability,
  }));

  return (
    <div className="final-report-container">
      <div className="report-box">
        {/* Header */}
        <header className="report-header">
          <h1>ENGINEERING REPORT</h1>
          <h2>Sustainability Material Selection</h2>
        </header>

        {/* Project Details */}
        <section className="project-details">
          <h3>Project Details</h3>
          <div className="details-grid">
            <div className="detail-box"><strong>Project Name:</strong> {projectName}</div>
            <div className="detail-box"><strong>Project Type:</strong> {projectType}</div>
            <div className="detail-box"><strong>Location:</strong> {location}</div>
            <div className="detail-box"><strong>Start Date:</strong> {startDate}</div>
            <div className="detail-box"><strong>Duration:</strong> {duration} days</div>
            <div className="detail-box"><strong>High-Priority:</strong> {isHighPriority ? 'Yes' : 'No'}</div>
          </div>
        </section>

        {/* Evaluation Section */}
        <section className="evaluation-section">
          <div className="material-evaluation">
            <h3 className="graph-title">Material Evaluation & Comparison</h3>
            {barData.length > 0 ? (
              <BarChart width={500} height={300} data={barData}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 600 }} />
                <YAxis tick={{ fontSize: 12, fontWeight: 600 }} />
                <Tooltip contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                <Legend wrapperStyle={{ fontWeight: 600 }} />
                <Bar dataKey="sustainability" fill="url(#sustainabilityGradient)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cost" fill="url(#costGradient)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="durability" fill="url(#durabilityGradient)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="sustainabilityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2ecc71" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#27ae60" stopOpacity={0.8} />
                  </linearGradient>
                  <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3498db" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#2980b9" stopOpacity={0.8} />
                  </linearGradient>
                  <linearGradient id="durabilityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e74c3c" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#c0392b" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            ) : (
              <p>No material data available for comparison.</p>
            )}
          </div>

          {/* AI Final Evaluation */}
          <div className="ai-evaluation">
            <h3>AI Final Evaluation</h3>
            <p className="summary">
              Based on your material selection and evaluation criteria, the AI recommends the best material balancing sustainability, cost, and durability.
            </p>
            <p><strong>Recommended Material:</strong> Material C</p>
            <p>
              Material C offers the best balance of sustainability, cost, and durability
              for this project.
            </p>
          </div>
        </section>

        {/* Footer Buttons */}
        <footer className="export-options">
          <button onClick={() => window.print()}>
            <span role="img" aria-label="Print"></span> Print Report
          </button>
          <button onClick={() => alert('Downloading PDF...')}>
            <span role="img" aria-label="Download"></span> Download PDF
          </button>
        </footer>
      </div>
    </div>
  );
};

export default FinalReport;