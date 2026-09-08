import TrackVisibility from "react-on-screen";
import "animate.css";

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
    <g fill="none" stroke="#61dafb" strokeWidth="1.3">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#0f172a" stroke="#e5e9f0" strokeWidth="1" />
    <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#e5e9f0">
      N
    </text>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <path
      d="M12 2c3.2 3.7 5.2 7.6 5.2 11.4a5.2 5.2 0 1 1-10.4 0C6.8 9.6 8.8 5.7 12 2z"
      fill="#47a248"
    />
    <path d="M12 12v8.5" stroke="#e5e9f0" strokeWidth="1" fill="none" />
  </svg>
);

const RedisIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <path d="M12 3l8.5 3.6L12 10.2 3.5 6.6 12 3z" fill="#dc382d" />
    <path d="M3.5 11.6 12 15.2l8.5-3.6" stroke="#dc382d" strokeWidth="1.4" fill="none" />
    <path d="M3.5 16.4 12 20l8.5-3.6" stroke="#dc382d" strokeWidth="1.4" fill="none" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <g fill="#2496ed">
      <rect x="3" y="10.5" width="3.6" height="3.4" rx="0.4" />
      <rect x="7.2" y="10.5" width="3.6" height="3.4" rx="0.4" />
      <rect x="11.4" y="10.5" width="3.6" height="3.4" rx="0.4" />
      <rect x="7.2" y="6.4" width="3.6" height="3.4" rx="0.4" />
      <rect x="11.4" y="6.4" width="3.6" height="3.4" rx="0.4" />
    </g>
    <path
      d="M1.5 14.2c1.4 3.6 4.8 5.8 10.5 5.8s9.3-2.6 10.7-6.4c-.9-.6-2-.8-3.1-.4-.4-1-1.4-1.6-2.4-1.5-.5-1-1.6-1.6-2.7-1.4"
      fill="none"
      stroke="#2496ed"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <g fill="none" stroke="#f05032" strokeWidth="1.6" strokeLinecap="round">
      <line x1="7.5" y1="15.5" x2="10.5" y2="12.5" />
      <line x1="13.5" y1="10.5" x2="16" y2="8" />
    </g>
    <circle cx="6" cy="17" r="2.1" fill="#f05032" />
    <circle cx="18" cy="6" r="2.1" fill="#f05032" />
    <circle cx="12" cy="12" r="2.1" fill="#f05032" />
  </svg>
);

const DatabaseIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <g fill="none" stroke={color} strokeWidth="1.4">
      <ellipse cx="12" cy="5.5" rx="8" ry="2.8" />
      <path d="M4 5.5v6c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8v-6" />
      <path d="M4 11.5v6c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8v-6" />
    </g>
  </svg>
);

const SKILL_GROUPS = [
  {
    category: "Frontend",
    items: [
      { name: "ReactJS", icon: <ReactIcon /> },
      { name: "NextJS", icon: <NextIcon /> },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "MongoDB", icon: <MongoIcon /> },
      { name: "Redis", icon: <RedisIcon /> },
      { name: "SQL Server", icon: <DatabaseIcon color="#cc2927" /> },
      { name: "PostgreSQL", icon: <DatabaseIcon color="#336791" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", icon: <DockerIcon /> },
      { name: "Git", icon: <GitIcon /> },
    ],
  },
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
            <div className="skills-groups">
              {SKILL_GROUPS.map((group) => (
                <div className="skills-group" key={group.category}>
                  <h3 className="skills-group-title">{group.category}</h3>
                  <ul className="skills-grid">
                    {group.items.map((skill) => (
                      <li key={skill.name} className="skill-badge">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  </section>
);
