import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header"; // Import the Header
import "./RecentProjects.css";

interface Project {
  id: number;
  name: string;
  dateCreated: string;
  status: "In Progress" | "Completed" | "Archived";
  material: string;
}

const sampleProjects: Project[] = [
  {
    id: 1,
    name: "Bridge Deck Evaluation",
    dateCreated: "2025-03-20",
    status: "Completed",
    material: "Precast Concrete",
  },
  {
    id: 2,
    name: "Sustainable Pavilion",
    dateCreated: "2025-03-18",
    status: "In Progress",
    material: "Hempcrete",
  },
  {
    id: 3,
    name: "Highway Overpass",
    dateCreated: "2025-03-15",
    status: "Archived",
    material: "Steel-Reinforced Concrete",
  },
];

const RecentProjects = () => {
  const navigate = useNavigate();

  const handleViewReport = (projectId: number) => {
    navigate(`/final-report/${projectId}`);
  };

  const handleEditProject = (projectId: number) => {
    console.log("Edit project:", projectId);
  };

  const handleDeleteProject = (projectId: number) => {
    console.log("Delete project:", projectId);
  };

  return (
    <div className="recent-projects-container">
      <Header /> {/* Add the Header */}
      <h1>Recent Projects</h1>
      {/* Kanban Board Layout */}
      <div className="kanban-board">
        {/* In Progress Column */}
        <div className="kanban-column in-progress">
          <h2>In Progress</h2>
          {sampleProjects
            .filter((project) => project.status === "In Progress")
            .map((project) => (
              <div key={project.id} className="project-card">
                <h2>{project.name}</h2>
                <p><strong>Created:</strong> {project.dateCreated}</p>
                <p><strong>Material:</strong> {project.material}</p>
                <div className="action-buttons">
                  <button onClick={() => handleViewReport(project.id)}>🔍 View</button>
                  <button onClick={() => handleEditProject(project.id)}>📝 Edit</button>
                  <button onClick={() => handleDeleteProject(project.id)}>🗑️ Delete</button>
                </div>
              </div>
            ))}
        </div>

        {/* Completed Column */}
        <div className="kanban-column completed">
          <h2>Completed</h2>
          {sampleProjects
            .filter((project) => project.status === "Completed")
            .map((project) => (
              <div key={project.id} className="project-card">
                <h2>{project.name}</h2>
                <p><strong>Created:</strong> {project.dateCreated}</p>
                <p><strong>Material:</strong> {project.material}</p>
                <div className="action-buttons">
                  <button onClick={() => handleViewReport(project.id)}>🔍 View</button>
                  <button onClick={() => handleEditProject(project.id)}>📝 Edit</button>
                  <button onClick={() => handleDeleteProject(project.id)}>🗑️ Delete</button>
                </div>
              </div>
            ))}
        </div>

        {/* Archived Column */}
        <div className="kanban-column archived">
          <h2>Archived</h2>
          {sampleProjects
            .filter((project) => project.status === "Archived")
            .map((project) => (
              <div key={project.id} className="project-card">
                <h2>{project.name}</h2>
                <p><strong>Created:</strong> {project.dateCreated}</p>
                <p><strong>Material:</strong> {project.material}</p>
                <div className="action-buttons">
                  <button onClick={() => handleViewReport(project.id)}>🔍 View</button>
                  <button onClick={() => handleEditProject(project.id)}>📝 Edit</button>
                  <button onClick={() => handleDeleteProject(project.id)}>🗑️ Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Project Milestones Section */}
      <div className="milestones-section">
        <h2>Project Milestones</h2>
        <div className="milestones-tracker">
          <div className="milestone completed">
            <span>🟢</span>
            <p>Project Created</p>
          </div>
          <div className="milestone in-progress">
            <span>📄</span>
            <p>Evaluation</p>
          </div>
          <div className="milestone">
            <span>🏗️</span>
            <p>Material Selected</p>
          </div>
          <div className="milestone">
            <span>📊</span>
            <p>Report Generated</p>
          </div>
          <div className="milestone">
            <span>📦</span>
            <p>Archived</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;