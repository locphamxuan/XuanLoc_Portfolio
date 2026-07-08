export const ProjectCard = ({ title, description, tech, links }) => (
  <article className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <ul className="project-tech">
      {tech.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <div className="project-links">
      {links.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
          {link.label} ↗
        </a>
      ))}
    </div>
  </article>
);
