import React, { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ReportTemplate from './PDFReports/ReportTemplate';
import { Material } from './PDFReports/Types';
import './FinalReport.css';

interface FinalReportProps {
  selectedMaterials: {
    id: string;
    name: string;
    type: string;
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
  const [showPreview, setShowPreview] = useState(false);
  
  // Process data for both PDF and preview
  const processedMaterials = selectedMaterials.map((material, index) => ({
    ...material,
    score: (material.sustainability * weights.sustainability) + 
          (material.cost * weights.cost) + 
          (material.durability * weights.durability),
    rank: index + 1,
    costPerUnit: material.cost * 100,
    carbonFootprint: (1 - material.sustainability) * 10
  })).sort((a, b) => b.score - a.score);

  const topMaterial = processedMaterials[0];

  return (
    <div className="final-report-container">
      <div className="report-box">
        {/* Glass Card Header */}
        <header className="card-glass header-section">
          <h1>OptoMat Material Evaluation</h1>
          <h2>Comprehensive Analysis Report</h2>
        </header>

        {/* Project Details - Glass Cards */}
        <section className="card-glass project-section">
          <h3>Project Details</h3>
          <div className="details-grid">
            <div className="detail-card">
              <h4>Project Name</h4>
              <p>{projectName}</p>
            </div>
            <div className="detail-card">
              <h4>Project Type</h4>
              <p>{projectType}</p>
            </div>
            <div className="detail-card">
              <h4>Location</h4>
              <p>{location}</p>
            </div>
            <div className="detail-card">
              <h4>Start Date</h4>
              <p>{startDate}</p>
            </div>
            <div className="detail-card">
              <h4>Duration</h4>
              <p>{duration} days</p>
            </div>
            <div className="detail-card">
              <h4>Priority</h4>
              <p>{isHighPriority ? 'High' : 'Standard'}</p>
            </div>
          </div>
        </section>

        {/* Top Material - Glass Card */}
        <section className="card-glass material-section">
          <h3>Top Recommended Material</h3>
          <div className="top-material-card">
            <div className="material-rank">#{topMaterial.rank}</div>
            <h4>{topMaterial.name}</h4>
            <p className="material-type">{topMaterial.type}</p>
            <div className="material-stats">
              <div className="stat-item">
                <span className="stat-label">Score</span>
                <span className="stat-value">{topMaterial.score.toFixed(1)}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Cost</span>
                <span className="stat-value">${topMaterial.costPerUnit.toFixed(2)}/unit</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Carbon</span>
                <span className="stat-value">{topMaterial.carbonFootprint.toFixed(1)} kgCO₂</span>
              </div>
            </div>
          </div>
        </section>

        {/* Material Comparison - Glass Cards */}
        <section className="card-glass comparison-section">
          <h3>Material Comparison</h3>
          <div className="materials-grid">
            {processedMaterials.map(material => (
              <div key={material.id} className="comparison-card">
                <h4>#{material.rank} {material.name}</h4>
                <div className="comparison-stats">
                  <div>
                    <span className="stat-label">Score:</span>
                    <span>{material.score.toFixed(1)}</span>
                  </div>
                  <div>
                    <span className="stat-label">Cost:</span>
                    <span>${material.costPerUnit.toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="stat-label">Carbon:</span>
                    <span>{material.carbonFootprint.toFixed(1)} kgCO₂</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PDF Export and Preview Buttons */}
        <div className="button-container">
          <button 
            className="preview-button"
            onClick={() => setShowPreview(true)}
          >
            Preview
          </button>
          
          <PDFDownloadLink
            document={
              <ReportTemplate
                clientName={projectName}
                projectName={`${projectType} Project`}
                reportDate={new Date().toLocaleDateString()}
                materialData={processedMaterials}
                financialData={processedMaterials.map(material => ({
                  id: material.id,
                  name: material.name,
                  rawCost: material.costPerUnit,
                  effectiveCost: material.costPerUnit * 0.85,
                  taxImpact: material.costPerUnit * 0.05,
                  lifetimeValue: material.costPerUnit * 10,
                  carbonPerDollar: material.carbonFootprint / material.costPerUnit
                }))}
                sustainabilityData={processedMaterials.map(material => ({
                  id: material.id,
                  name: material.name,
                  leedPoints: Math.round(material.sustainability * 40),
                  carbonFootprint: material.carbonFootprint,
                  recycledContent: Math.round(material.sustainability * 100),
                  energyEfficiency: Math.round((0.6 + material.sustainability * 0.4) * 100),
                  waterEfficiency: Math.round(material.sustainability * 80)
                }))}
                regionalData={{
                  locations: [location, 'CA', 'NV', 'IL'],
                  comparisons: processedMaterials.map(material => ({
                    location,
                    materialScores: [{
                      materialId: material.id,
                      score: material.score,
                      compliance: 'Full'
                    }]
                  }))
                }}
              />
            }
            fileName={`OptoMat_Report_${projectName.replace(/\s+/g, '_')}.pdf`}
          >
            {({ loading }) => (
              <button className="download-button" disabled={loading}>
                {loading ? 'Generating...' : 'Download'}
              </button>
            )}
          </PDFDownloadLink>
        </div>

        {/* PDF Preview Modal */}
        <div className={`pdf-preview-modal ${showPreview ? 'active' : ''}`}>
          <div className="pdf-preview-content">
            <div className="pdf-preview-header">
              <div className="pdf-preview-title">Report Preview: {projectName}</div>
              <button 
                className="close-preview"
                onClick={() => setShowPreview(false)}
                aria-label="Close preview"
              >
                &times;
              </button>
            </div>
            <div className="pdf-viewer-container">
              {showPreview && (
                <PDFViewer width="100%" height="100%">
                  <ReportTemplate
                    clientName={projectName}
                    projectName={`${projectType} Project`}
                    reportDate={new Date().toLocaleDateString()}
                    materialData={processedMaterials}
                    financialData={processedMaterials.map(material => ({
                      id: material.id,
                      name: material.name,
                      rawCost: material.costPerUnit,
                      effectiveCost: material.costPerUnit * 0.85,
                      taxImpact: material.costPerUnit * 0.05,
                      lifetimeValue: material.costPerUnit * 10,
                      carbonPerDollar: material.carbonFootprint / material.costPerUnit
                    }))}
                    sustainabilityData={processedMaterials.map(material => ({
                      id: material.id,
                      name: material.name,
                      leedPoints: Math.round(material.sustainability * 40),
                      carbonFootprint: material.carbonFootprint,
                      recycledContent: Math.round(material.sustainability * 100),
                      energyEfficiency: Math.round((0.6 + material.sustainability * 0.4) * 100),
                      waterEfficiency: Math.round(material.sustainability * 80)
                    }))}
                    regionalData={{
                      locations: [location, 'CA', 'NV', 'IL'],
                      comparisons: processedMaterials.map(material => ({
                        location,
                        materialScores: [{
                          materialId: material.id,
                          score: material.score,
                          compliance: 'Full'
                        }]
                      }))
                    }}
                  />
                </PDFViewer>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalReport;