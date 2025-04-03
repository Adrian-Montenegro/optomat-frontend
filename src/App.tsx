import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import ProjectSetup from "./components/ProjectSetup/ProjectSetup";
import MaterialSelection from "./components/MaterialSelection/MaterialSelection";
import Evaluation from "./components/Evaluation/Evaluation";
import FinalReport from "./components/FinalReport/FinalReport";
import Documents from "./components/Documents/Documents";
import ContractorMode from "./components/ContractorMode/ContractorMode";
import Dashboard from "./components/Dashboard/Dashboard";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import OptoMatPortfolio from "./OptoMatPortfolio";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      document.body.classList.remove("fade-out");
    }, 500);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  // Updated selectedMaterials with required id and type fields
  const selectedMaterials = [
    { 
      id: "mat-1",
      name: "Material A", 
      type: "Composite",
      sustainability: 0.9, 
      cost: 80, 
      durability: 0.7 
    },
    { 
      id: "mat-2",
      name: "Material B", 
      type: "Metal",
      sustainability: 0.7, 
      cost: 60, 
      durability: 0.8 
    },
    { 
      id: "mat-3",
      name: "Material C", 
      type: "Polymer",
      sustainability: 0.85, 
      cost: 75, 
      durability: 0.9 
    },
  ];

  const projectName = "Untitled Project";
  const projectType = "Construction";
  const location = "New York";
  const startDate = "2023-10-01";
  const duration = 90;
  const isHighPriority = true;
  
  // Updated weights to use decimal values (0-1 scale)
  const weights = { 
    sustainability: 0.4, 
    cost: 0.3, 
    durability: 0.3 
  };

  return (
    <Router>
      <ScrollToTop />

      {/* Header is hidden on Intro page */}
      {window.location.pathname === "/" ? null : <Header />}

      <div className="page-container">
        <Routes>
          {/* Show Intro first */}
          <Route path="/" element={<Intro />} />

          {/* Main Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Feature Cards */}
          <Route path="/project-setup" element={<ProjectSetup />} />
          <Route path="/material-selection" element={<MaterialSelection />} />
          <Route
            path="/evaluation"
            element={
              <Evaluation
                selectedMaterials={selectedMaterials}
                projectName={projectName}
              />
            }
          />

          {/* Final Report - Updated with all required props */}
          <Route
            path="/final-report"
            element={
              <FinalReport
                selectedMaterials={selectedMaterials}
                projectName={projectName}
                projectType={projectType}
                location={location}
                startDate={startDate}
                duration={duration}
                isHighPriority={isHighPriority}
                weights={weights}
              />
            }
          />

          {/* Documents & Contractor Mode */}
          <Route path="/documents" element={<Documents />} />
          <Route path="/contractor-mode" element={<ContractorMode />} />

          {/* Recent Projects */}
          <Route path="/recent-projects" element={<RecentProjects />} />

          {/* Portfolio Route */}
          <Route path="/portfolio" element={<OptoMatPortfolio />} />

          {/* Redirect unknown pages to Dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;