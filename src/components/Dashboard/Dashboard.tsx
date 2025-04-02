import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import logo from '../../assets/OptoMat-Outline.svg';

const Dashboard = () => {
  const navigate = useNavigate();
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const featureLoopRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(0.8); // Slightly faster than original
  const scrollPositionRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const featureCards = [
    {
      title: "Material Decision",
      description: "Smart material guidance for your project",
      buttonText: "Get Started",
      path: "/material-selection",
      bgImage: "/images/materialtool.webp"
    },
    {
      title: "Documents Hub",
      description: "All project blueprints and specs", 
      buttonText: "View Docs",
      path: "/documents",
      bgImage: "/images/documents.webp"
    },
    {
      title: "Contractor Mode",
      description: "Compliance tools and tracking",
      buttonText: "Enter Mode",
      path: "/contractor-mode",
      bgImage: "/images/Contractor.webp"
    },
    {
      title: "Recent Projects",
      description: "Your active and completed work",
      buttonText: "View All",
      path: "/recent-projects",
      bgImage: "/images/recentproject.webp"
    }
  ];

  const animate = () => {
    scrollPositionRef.current -= scrollSpeed;
    
    // Calculate total height of all cards
    const totalHeight = featureCards.length * 15 * 16;
    
    // Seamless looping
    if (scrollPositionRef.current < -totalHeight) {
      scrollPositionRef.current += totalHeight;
    } else if (scrollPositionRef.current > 0) {
      scrollPositionRef.current -= totalHeight;
    }

    if (featureLoopRef.current) {
      featureLoopRef.current.style.transform = `translateY(${scrollPositionRef.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollWrapperRef.current) return;
    
    // Temporary speed boost on wheel (3x normal speed)
    const boost = e.deltaY > 0 ? 2.4 : -2.4;
    setScrollSpeed(boost);
    
    // Return to normal speed after interaction
    setTimeout(() => setScrollSpeed(0.8), 500);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollSpeed]);

  return (
    <div className="dashboard">
      {/* Left Side - Infinite Feature Card Loop */}
      <div className="dashboard-features">
        <div 
          className="scroll-wrapper"
          ref={scrollWrapperRef}
          onWheel={handleWheel}
        >
          <div className="feature-loop" ref={featureLoopRef}>
            {[...featureCards, ...featureCards].map((card, index) => (
              <div
                key={`card-${index}`}
                className="feature-card"
                onClick={() => navigate(card.path)}
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${card.bgImage})`
                }}
              >
                <div className="feature-content">
                  <h2>{card.title}</h2>
                  <p className="card-description">{card.description}</p>
                  <button className="feature-btn">{card.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Hero with Massive Permanent Logo */}
      <div className="dashboard-hero">
        <img src={logo} alt="OptoMat Logo" className="logo-svg" />
        <div className="hero-content">
          <h1>OptoMat</h1>
          <p>
            Construction intelligence that bridges material science 
            with real-world building performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;