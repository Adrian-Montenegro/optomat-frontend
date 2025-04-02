import './FinalReport.css';
import MaterialComparison from './MaterialComparison';
import CostSavingsGraph from './CostSavingsGraph';
import LEEDRadarChart from './LEEDRadarChart';
import SustainabilitySummary from './SustainabilitySummary';

const ReportTemplate = () => {
  return (
    <div className="final-report-container">
      <div className="report-box">

        {/* === Title & Subtitle === */}
        <header className="report-header">
          <h1>OptoMat Engineering Report</h1>
          <h2>Sustainability Material Selection – Executive Summary</h2>
        </header>

        {/* === Project Details Grid === */}
        <section className="project-details">
          <h3>Project Details</h3>
          <div className="details-grid">
            <div className="detail-box"><strong>Project Name:</strong> Untitled Project</div>
            <div className="detail-box"><strong>Project Type:</strong> Construction</div>
            <div className="detail-box"><strong>Location:</strong> New York</div>
            <div className="detail-box"><strong>Start Date:</strong> 2023-10-01</div>
            <div className="detail-box"><strong>Duration:</strong> 90 days</div>
            <div className="detail-box"><strong>High Priority:</strong> Yes</div>
          </div>
        </section>

        {/* === Material Summary Box === */}
        <section className="material-summary report-section">
          <h2>Chosen Material Summary</h2>
          <div className="ai-evaluation summary">
            <p><strong>Recommended Material:</strong> Material C</p>
            <p>Material C offers the optimal balance of:</p>
            <ul>
              <li>High durability over long service life</li>
              <li>Excellent recyclability & low carbon footprint</li>
              <li>Moderate initial cost with high long-term savings</li>
            </ul>
          </div>
        </section>

        {/* === Graph Placeholder === */}
        <section className="material-evaluation report-section">
          <h3>Material Evaluation Overview</h3>
          {/* Replace this with BarChart or RadarChart when ready */}
          <LEEDRadarChart />
        </section>

      </div>
    </div>
  );
};

export default ReportTemplate;
