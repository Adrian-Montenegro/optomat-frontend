import React from "react";
import { Mail, Github, FileText, Linkedin } from "lucide-react";
import OptoMatLogo from "./assets/OptoMat-Outline.svg";
import styles from "./OptoMatPortfolio.module.css";

export default function OptoMatPortfolio() {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "Git", icon: "🔀" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "🟢" },
  ];

  return (
    <main className={styles["portfolio-container"]}>
      <section className={styles["portfolio-header"]}>
        <div className={styles["logo-container"]}>
          <img src={OptoMatLogo} alt="OptoMat Logo" className={styles["portfolio-logo"]} />
          <div className={styles["logo-glow"]}></div>
        </div>
        <h1 className={styles["portfolio-name"]}>Adrian Montenegro</h1>
        <p className={styles["portfolio-subtitle"]}>
          AI-Driven Civil Engineer • Sustainability Innovator • Full-Stack Developer
        </p>
        <div className={styles["portfolio-buttons"]}>
          <a
            href="/AdrianAiResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["portfolio-btn"]} ${styles["resume-btn"]}`}
          >
            <FileText size={16} /> Resume
          </a>
          <a
            href="https://github.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["portfolio-btn"]} ${styles["github-btn"]}`}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/adrian-montenegro-obby"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["portfolio-btn"]} ${styles["linkedin-btn"]}`}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>

      <section className={styles["project-showcase"]}>
        <div className={styles["project-badge"]}>
          <span>Flagship Project</span>
        </div>
        <h2 className={styles["project-title"]}>
          <span className={styles["highlight"]}>OptoMat</span> — Sustainable Material Analysis
        </h2>
        <div className={styles["project-card"]}>
          <div className={styles["project-content"]}>
            <h3>About the Project</h3>
            <p>
              OptoMat is a full-stack sustainability application that evaluates construction materials using LEED-style metrics: 
              <strong> strength, cost, carbon footprint, and recyclability</strong>. This tool empowers engineers and contractors 
              to make environmentally conscious decisions without compromising structural integrity.
            </p>
            <div className={styles["feature-list"]}>
              <div className={styles["feature"]}>
                <div className={styles["feature-icon"]}>📊</div>
                <div className={styles["feature-text"]}>Comparative material analytics dashboard</div>
              </div>
              <div className={styles["feature"]}>
                <div className={styles["feature-icon"]}>🌱</div>
                <div className={styles["feature-text"]}>Sustainability scoring system</div>
              </div>
              <div className={styles["feature"]}>
                <div className={styles["feature-icon"]}>⚙️</div>
                <div className={styles["feature-text"]}>Kubernetes deployment coming soon</div>
              </div>
            </div>
          </div>
          <div className={styles["tech-stack-display"]}>
            <h3>Technical Architecture</h3>
            <div className={styles["tech-stack-grid"]}>
              {techStack.map((tech) => (
                <div key={tech.name} className={styles["tech-item"]}>
                  <div className={styles["tech-icon"]}>{tech.icon}</div>
                  <div className={styles["tech-name"]}>{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles["portfolio-contact"]}>
        <h2>Let's Build a Sustainable Future Together</h2>
        <p className={styles["contact-subtext"]}>
          Interested in engineering solutions that balance performance and sustainability?
        </p>
        <a href="mailto:montea12@unlv.nevada.edu" className={styles["email-link"]}>
          <Mail className={styles["mail-icon"]} /> montea12@unlv.nevada.edu
        </a>
      </section>
    </main>
  );
}
