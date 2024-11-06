import React from "react";
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="bars">
        <div className="skill-bar-container">
          <div className="skill-bar-background">
            <div className="skill-bar" style={{ animation: "fillBar1 2s forwards" }}>
              <span>Adobe Premiere Pro</span>
              <span>100%</span>
            </div>
          </div>
        </div>
        <div className="skill-bar-container">
          <div className="skill-bar-background">
            <div className="skill-bar" style={{ animation: "fillBar2 2s forwards" }}>
              <span>Adobe After Effects</span>
              <span>95%</span>
            </div>
          </div>
        </div>
        <div className="skill-bar-container">
          <div className="skill-bar-background">
            <div className="skill-bar" style={{ animation: "fillBar3 2s forwards" }}>
              <span>Adobe photoshop</span>
              <span>90%</span>
            </div>
          </div>
        </div>
        <div className="skill-bar-container">
          <div className="skill-bar-background">
            <div className="skill-bar" style={{ animation: "fillBar4 2s forwards" }}>
              <span>Davinci Resolve</span>
              <span>80%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;