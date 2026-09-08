export const ProjectCard = ({ title, description, tech, systemDesign, links }) => (
  <article className="project-card">
    <h3>{title}</h3>
    <p className="project-description">{description}</p>

    <ul className="project-tech">
      {tech.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>

    <div className="project-design">
      <span className="project-design-label">System design</span>
      <ul className="project-design-list">
        {systemDesign.map((item) => (
          <li key={item}>
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="project-links">
      {links.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
          {link.label} ↗
        </a>
      ))}
    </div>
  </article>
);
