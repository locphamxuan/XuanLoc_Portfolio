import TrackVisibility from "react-on-screen";
import "animate.css";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NodeJS",
  "MongoDB",
  "Java",
];

export const Skills = () => (
  <section className="skills" id="skills">
    <div className="container">
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Skills</h2>
            <p className="section-subtitle">
              Technologies I use to build products
            </p>
            <ul className="skills-grid">
              {SKILLS.map((skill) => (
                <li key={skill} className="skill-badge">{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </TrackVisibility>
    </div>
  </section>
);
