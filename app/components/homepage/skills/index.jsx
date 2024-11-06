import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Marquee from "react-fast-marquee";
import "./skil.css";

export default function Skills() {
  return (
    <div id="skills" className="skills-container">
      <div className="background-blur"></div>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <div className="skills-header-container">
        <div className="skills-header">
          <span className="skills-header-line"></span>
          <span className="skills-header-text">TESTIMONIALS</span>
          <span className="skills-header-line"></span>
        </div>
      </div>

      <div className="marquee-container">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="skill-card" key={id}>
              <div className="card-inner">
                {/* Front of the card */}
                <div className="card-content">
                  <img 
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    style={{ width: '80px', height: '80px', borderRadius: '50%' }}  
                  />
                  <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{skill}</p>
                </div>

                {/* Back of the card */}
                <div className="card-back">
                  <p>{skill} Details</p> {/* Change this to whatever text you want to display on the back */}
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
