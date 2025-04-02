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
import OptoMatPortfolio from "./OptoMatPortfolio"; // ✅ Added Portfolio page
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
  const selectedMaterials = [
    { name: "Material A", sustainability: 90, cost: 80, durability: 70 },
    { name: "Material B", sustainability: 70, cost: 60, durability: 80 },
    { name: "Material C", sustainability: 85, cost: 75, durability: 90 },
  ];

  const projectName = "Untitled Project";
  const projectType = "Construction";
  const location = "New York";
  const startDate = "2023-10-01";
  const duration = 90;
  const isHighPriority = true;
  const weights = { sustainability: 40, cost: 30, durability: 30 };

  return (
    <Router>
      <ScrollToTop />

      {/* ✅ Header is hidden on Intro page */}
      {window.location.pathname === "/" ? null : <Header />}

      <div className="page-container">
        <Routes>
          {/* ✅ Show Intro first */}
          <Route path="/" element={<Intro />} />

          {/* ✅ Main Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* ✅ Feature Cards */}
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

          {/* ✅ Final Report */}
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

          {/* ✅ Documents & Contractor Mode */}
          <Route path="/documents" element={<Documents />} />
          <Route path="/contractor-mode" element={<ContractorMode />} />

          {/* ✅ Recent Projects */}
          <Route path="/recent-projects" element={<RecentProjects />} />

          {/* ✅ Portfolio Route */}
          <Route path="/portfolio" element={<OptoMatPortfolio />} />

          {/* ✅ Redirect unknown pages to Dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
