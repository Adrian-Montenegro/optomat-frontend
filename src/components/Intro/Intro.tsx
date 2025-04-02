import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";
import OptoMatLogo from "../../assets/OptoMat-Outline.svg";

const Intro: React.FC = () => {
  const navigate = useNavigate();
  const [dimBackground, setDimBackground] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setDimBackground(true), 1000);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  // 🧠 Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEnter = () => {
    navigate("/dashboard");
  };

  return (
    <div className="intro-container">
      <div className="background-image"></div>
      <div className={`overlay ${dimBackground ? "dimmed" : ""}`}>
        {/* 🌀 Pass offset to inline style */}
        <img
          src={OptoMatLogo}
          alt="OptoMat Logo"
          className="logo-svg"
          style={{
            transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
          }}
        />
      </div>

      <div className="content">
        <h1 className="title">OptoMat</h1>
        <button className="enter-button" onClick={handleEnter}>
          enter
        </button>
      </div>
    </div>
  );
};

export default Intro;
