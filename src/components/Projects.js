import TrackVisibility from "react-on-screen";
import "animate.css";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export const Projects = () => (
  <section className="projects" id="projects">
    <div className="container">
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Projects</h2>
            <p className="section-subtitle">
              My personal projects on GitHub
            </p>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  </section>
);
