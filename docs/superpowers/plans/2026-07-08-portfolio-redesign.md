# Portfolio Redesign (Dark Modern Developer) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign portfolio thành giao diện dark modern, bỏ Contact, hiển thị 6 dự án GitHub thật, dọn sạch dependencies thừa.

**Architecture:** Single-page React (CRA) với 5 section component thuần (NavBar, Hero, Skills, Projects, Footer) + 1 file data (`src/data/projects.js`). CSS custom trong `App.css` với CSS variables, không dùng UI framework. Điều hướng bằng anchor `#id`.

**Tech Stack:** React 19 (CRA), animate.css, react-on-screen, Testing Library/Jest.

## Global Constraints

- **KHÔNG commit** — user sẽ tự yêu cầu lệnh commit khi muốn (quy tắc của user, override mọi bước commit).
- Làm việc trên nhánh `feature/portfolio-redesign` (đã tạo).
- Nội dung hiển thị tiếng Việt, xưng "tôi"; định vị **Fullstack Developer**.
- Màu: nền `#0a0e17`/`#111827`, accent cyan `#22d3ee`.
- GitHub profile: `https://github.com/locphamxuan`.
- Dependencies giữ lại: react, react-dom, react-scripts, animate.css, react-on-screen, @testing-library/*, web-vitals.
- Chạy test bằng `npm test -- --watchAll=false`; build bằng `npm run build`.

---

### Task 1: Viết test mới (failing) cho cấu trúc trang mới

**Files:**
- Modify: `src/App.test.js` (thay toàn bộ nội dung)

**Interfaces:**
- Produces: bộ test định nghĩa contract cho App mới — hero h1 chứa "Xuân Lộc", đoạn giới thiệu fullstack, heading "Skills"/"Projects", card "Football Community Platform" & "Parking Management System", footer "© 2026 Phạm Xuân Lộc", KHÔNG còn Contact.

- [ ] **Step 1: Thay toàn bộ `src/App.test.js`**

```js
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Portfolio', () => {
  test('hiển thị hero với tên và giới thiệu fullstack developer', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /Xuân Lộc/i })).toBeInTheDocument();
    expect(screen.getByText(/fullstack developer/i)).toBeInTheDocument();
  });

  test('hiển thị section Skills với các công nghệ', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('ReactJS')).toBeInTheDocument();
  });

  test('hiển thị section Projects với dự án GitHub thật', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByText('Parking Management System')).toBeInTheDocument();
    expect(screen.getByText('Football Community Platform')).toBeInTheDocument();
    expect(screen.getByText('Shoes E-Commerce')).toBeInTheDocument();
  });

  test('không còn section Contact / Newsletter', () => {
    render(<App />);
    expect(screen.queryByText(/get in touch/i)).toBeNull();
    expect(screen.queryByText(/newsletter/i)).toBeNull();
    expect(document.querySelector('#connect')).toBeNull();
  });

  test('hiển thị footer với copyright', () => {
    render(<App />);
    expect(screen.getByText(/© 2026 Phạm Xuân Lộc/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Chạy test xác nhận FAIL**

Run: `npm test -- --watchAll=false`
Expected: FAIL (App hiện tại vẫn render Contact, chưa có dự án GitHub).

---

### Task 2: File data dự án

**Files:**
- Create: `src/data/projects.js`

**Interfaces:**
- Produces: named export `projects` — mảng object `{ title: string, description: string, tech: string[], links: { label: string, url: string }[] }`. Task 6 (Projects component) tiêu thụ.

- [ ] **Step 1: Tạo `src/data/projects.js`**

```js
export const projects = [
  {
    title: "Parking Management System",
    description:
      "Hệ thống quản lý bãi đỗ xe: đặt chỗ, quản lý phương tiện và thanh toán, gồm web frontend, backend API và ứng dụng mobile.",
    tech: ["ReactJS", "NodeJS", "React Native"],
    links: [
      { label: "Frontend", url: "https://github.com/locphamxuan/ParkingManagement_FE_SWP391" },
      { label: "Backend", url: "https://github.com/locphamxuan/ParkingManagement_BE" },
      { label: "Mobile", url: "https://github.com/locphamxuan/ParkingManagement_Mobile" },
    ],
  },
  {
    title: "Football Community Platform",
    description:
      "Nền tảng cộng đồng bóng đá: đặt sân, kết nối đội bóng và quản lý trận đấu.",
    tech: ["ReactJS", "NodeJS", "MongoDB"],
    links: [
      { label: "GitHub", url: "https://github.com/locphamxuan/Football-Community-Platform" },
    ],
  },
  {
    title: "Shoes E-Commerce",
    description:
      "Website thương mại điện tử bán giày: danh mục sản phẩm, giỏ hàng và đặt hàng.",
    tech: ["TypeScript", "ReactJS"],
    links: [
      { label: "GitHub", url: "https://github.com/locphamxuan/Shoes-E-Commerce" },
    ],
  },
  {
    title: "Smoking Support System",
    description:
      "Hệ thống hỗ trợ cai thuốc lá: theo dõi tiến trình, kế hoạch cai thuốc và tư vấn.",
    tech: ["JavaScript", "NodeJS"],
    links: [
      { label: "GitHub", url: "https://github.com/locphamxuan/SmokingSupportSystem" },
    ],
  },
  {
    title: "Movie Web App",
    description:
      "Ứng dụng web xem thông tin phim: tìm kiếm, chi tiết phim và danh sách yêu thích.",
    tech: ["JavaScript", "ReactJS"],
    links: [
      { label: "GitHub", url: "https://github.com/locphamxuan/MovieWebApp" },
    ],
  },
  {
    title: "Child Vaccine",
    description:
      "Hệ thống quản lý tiêm chủng cho trẻ em: lịch tiêm, hồ sơ và nhắc lịch.",
    tech: ["JavaScript", "NodeJS"],
    links: [
      { label: "GitHub", url: "https://github.com/locphamxuan/ChildVaccine" },
    ],
  },
];
```

- [ ] **Step 2: Kiểm tra import được (chạy lại test — vẫn fail vì App chưa đổi, không lỗi syntax mới)**

Run: `npm test -- --watchAll=false`
Expected: FAIL như Task 1 (không có lỗi compile từ file mới).

---

### Task 3: CSS foundation mới

**Files:**
- Modify: `src/App.css` (thay toàn bộ)
- Modify: `src/index.css` (thay toàn bộ)

**Interfaces:**
- Produces: các class CSS mà Task 4-7 dùng: `.navbar`, `.navbar.scrolled`, `.navbar-inner`, `.navbar-logo`, `.navbar-links`, `.navbar-github`, `.dot`, `.container`, `.hero`, `.hero-tagline`, `.hero-role`, `.hero-cursor`, `.hero-intro`, `.hero-actions`, `.btn`, `.btn-primary`, `.btn-ghost`, `.skills`, `.section-subtitle`, `.skills-grid`, `.skill-badge`, `.projects`, `.projects-grid`, `.project-card`, `.project-tech`, `.project-links`, `.footer`, `.footer-inner`.

- [ ] **Step 1: Thay toàn bộ `src/index.css`**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 2: Thay toàn bộ `src/App.css`**

```css
/* ===== Fonts ===== */
@font-face {
  font-family: Centra;
  src: url("./assets/font/CentraNo2-Bold.ttf");
  font-weight: 700;
}
@font-face {
  font-family: Centra;
  src: url("./assets/font/CentraNo2-Medium.ttf");
  font-weight: 500;
}
@font-face {
  font-family: Centra;
  src: url("./assets/font/CentraNo2-Book.ttf");
  font-weight: 400;
}

/* ===== Design tokens ===== */
:root {
  --bg: #0a0e17;
  --bg-soft: #111827;
  --card: #151c2c;
  --border: #1f2a3d;
  --text: #e5e9f0;
  --text-muted: #94a3b8;
  --accent: #22d3ee;
  --accent-soft: rgba(34, 211, 238, 0.12);
}

body {
  font-family: "Centra", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  font-weight: 400;
}

.container {
  width: min(1100px, 90%);
  margin-inline: auto;
}

h1, h2, h3 {
  font-weight: 700;
  line-height: 1.2;
}

section h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}

a {
  color: var(--accent);
  text-decoration: none;
}

/* ===== Buttons ===== */
.btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.25s ease;
}

.btn-primary {
  background-color: var(--accent);
  color: #06222a;
}

.btn-primary:hover {
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.45);
  transform: translateY(-2px);
}

.btn-ghost {
  border: 1px solid var(--border);
  color: var(--text);
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ===== Navbar ===== */
.navbar {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: background-color 0.3s ease, padding 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(10, 14, 23, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  padding: 0.75rem 0;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.05em;
}

.navbar-logo .dot {
  color: var(--accent);
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  color: var(--text-muted);
  font-weight: 500;
  transition: color 0.2s ease;
}

.navbar-links a:hover {
  color: var(--accent);
}

.navbar-github {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: var(--text);
  font-weight: 500;
  transition: all 0.25s ease;
}

.navbar-github:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.navbar-github svg {
  fill: currentColor;
}

/* ===== Hero ===== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 4rem;
  background:
    radial-gradient(ellipse 60% 40% at 70% 20%, rgba(34, 211, 238, 0.08), transparent),
    var(--bg);
}

.hero-tagline {
  display: inline-block;
  padding: 0.4rem 1rem;
  border: 1px solid var(--accent);
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1.25rem;
}

.hero-role {
  color: var(--accent);
}

.hero-cursor {
  animation: blink 1s step-end infinite;
  font-weight: 400;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-intro {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ===== Skills ===== */
.skills {
  padding: 5rem 0;
  background-color: var(--bg-soft);
}

.skills-grid {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-badge {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background-color: var(--card);
  font-weight: 500;
  transition: all 0.25s ease;
}

.skill-badge:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-3px);
}

/* ===== Projects ===== */
.projects {
  padding: 5rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem;
  border: 1px solid var(--border);
  border-radius: 14px;
  background-color: var(--card);
  transition: all 0.25s ease;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.project-card h3 {
  font-size: 1.25rem;
}

.project-card > p {
  color: var(--text-muted);
  flex-grow: 1;
}

.project-tech {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tech li {
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border);
}

.project-links a {
  font-weight: 500;
  font-size: 0.95rem;
}

.project-links a:hover {
  text-decoration: underline;
}

/* ===== Footer ===== */
.footer {
  padding: 2.5rem 0;
  background-color: var(--bg-soft);
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-inner p {
  color: var(--text-muted);
}

/* ===== Responsive ===== */
@media (max-width: 640px) {
  .navbar-links {
    display: none;
  }
}
```

- [ ] **Step 3: Chạy test (vẫn fail như cũ, không lỗi compile)**

Run: `npm test -- --watchAll=false`
Expected: FAIL như Task 1.

---

### Task 4: NavBar mới

**Files:**
- Modify: `src/components/NavBar.js` (thay toàn bộ)

**Interfaces:**
- Consumes: class CSS từ Task 3.
- Produces: named export `NavBar` (không props). App dùng ở Task 8.

- [ ] **Step 1: Thay toàn bộ `src/components/NavBar.js`**

```js
import { useEffect, useState } from "react";

const GITHUB_URL = "https://github.com/locphamxuan";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          XL<span className="dot">.</span>
        </a>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <a
          className="navbar-github"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
      </div>
    </nav>
  );
};
```

- [ ] **Step 2: Chạy test (vẫn fail, không lỗi compile)**

Run: `npm test -- --watchAll=false`
Expected: FAIL như Task 1 (App vẫn dùng component cũ).

---

### Task 5: Hero mới (thay Banner)

**Files:**
- Create: `src/components/Hero.js`
- Delete: `src/components/Banner.js` (xóa ở Task 9 cùng đợt cleanup)

**Interfaces:**
- Consumes: class CSS từ Task 3.
- Produces: named export `Hero` (không props), section `id="home"`. App dùng ở Task 8.

- [ ] **Step 1: Tạo `src/components/Hero.js`**

```js
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";

const ROLES = ["Fullstack Developer", "Frontend Developer", "Backend Developer"];
const GITHUB_URL = "https://github.com/locphamxuan";

export const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const ticker = setInterval(() => {
      const fullText = ROLES[loopNum % ROLES.length];
      const updated = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updated);

      if (!isDeleting && updated === fullText) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && updated === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
        setDelta(150);
      } else {
        setDelta(isDeleting ? 60 : 150);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum, delta]);

  return (
    <section className="hero" id="home">
      <div className="container">
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="hero-tagline">Welcome to my Portfolio</span>
              <h1>
                {"Hi! I'm Xuân Lộc"}
                <br />
                <span className="hero-role">
                  {text}
                  <span className="hero-cursor">|</span>
                </span>
              </h1>
              <p className="hero-intro">
                Tôi là một fullstack developer — xây dựng ứng dụng web hoàn chỉnh
                từ giao diện đến API và cơ sở dữ liệu với ReactJS, NodeJS và MongoDB.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">Xem dự án</a>
                <a
                  className="btn btn-ghost"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Chạy test (vẫn fail, không lỗi compile)**

Run: `npm test -- --watchAll=false`
Expected: FAIL như Task 1.

---

### Task 6: Skills mới

**Files:**
- Modify: `src/components/Skills.js` (thay toàn bộ)

**Interfaces:**
- Consumes: class CSS từ Task 3.
- Produces: named export `Skills`, section `id="skills"`. App dùng ở Task 8.

- [ ] **Step 1: Thay toàn bộ `src/components/Skills.js`**

```js
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
              Các công nghệ tôi sử dụng để xây dựng sản phẩm
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
```

- [ ] **Step 2: Chạy test (vẫn fail, không lỗi compile)**

Run: `npm test -- --watchAll=false`
Expected: FAIL như Task 1.

---

### Task 7: Projects + ProjectCard mới

**Files:**
- Modify: `src/components/ProjectCard.js` (thay toàn bộ)
- Modify: `src/components/Projects.js` (thay toàn bộ)

**Interfaces:**
- Consumes: `projects` từ `src/data/projects.js` (Task 2); class CSS từ Task 3.
- Produces: named exports `Projects` (section `id="projects"`) và `ProjectCard({ title, description, tech, links })`. App dùng ở Task 8.

- [ ] **Step 1: Thay toàn bộ `src/components/ProjectCard.js`**

```js
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
```

- [ ] **Step 2: Thay toàn bộ `src/components/Projects.js`**

```js
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
              Các dự án cá nhân của tôi trên GitHub
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
```

- [ ] **Step 3: Chạy test (vẫn fail, không lỗi compile)**

Run: `npm test -- --watchAll=false`
Expected: FAIL như Task 1.

---

### Task 8: Footer mới + nối App — test PASS

**Files:**
- Modify: `src/components/Footer.js` (thay toàn bộ)
- Modify: `src/App.js` (thay toàn bộ)

**Interfaces:**
- Consumes: `NavBar`, `Hero`, `Skills`, `Projects`, `Footer` từ Task 4-7.
- Produces: default export `App` render đủ 5 section, không Contact.

- [ ] **Step 1: Thay toàn bộ `src/components/Footer.js`**

```js
const GITHUB_URL = "https://github.com/locphamxuan";

export const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <a href="#home" className="navbar-logo">
        XL<span className="dot">.</span>
      </a>
      <p>© 2026 Phạm Xuân Lộc</p>
      <a href={GITHUB_URL} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  </footer>
);
```

- [ ] **Step 2: Thay toàn bộ `src/App.js`**

```js
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Chạy test xác nhận PASS**

Run: `npm test -- --watchAll=false`
Expected: PASS toàn bộ 5 test.

---

### Task 9: Cleanup file + dependencies, kiểm chứng cuối

**Files:**
- Delete: `src/components/Banner.js`, `src/components/Contact.js`, `src/components/Newsletter.js`, `src/components/MailchimpForm.js`
- Delete: toàn bộ thư mục `src/assets/img/`
- Delete: `src/logo.svg`
- Modify: `package.json` (gỡ dependency qua npm uninstall)

**Interfaces:**
- Consumes: App đã không còn import bất kỳ file nào bị xóa (Task 8).

- [ ] **Step 1: Xóa component chết và asset không dùng**

```powershell
Remove-Item src/components/Banner.js, src/components/Contact.js, src/components/Newsletter.js, src/components/MailchimpForm.js -Confirm:$false
Remove-Item src/assets/img -Recurse -Force -Confirm:$false
Remove-Item src/logo.svg -Confirm:$false
```

- [ ] **Step 2: Xác nhận không còn tham chiếu tới file đã xóa**

Run: grep `assets/img|Banner|Contact|Newsletter|Mailchimp|logo.svg` trong `src/` (trừ file test/plan)
Expected: 0 kết quả trong code nguồn.

- [ ] **Step 3: Gỡ dependencies thừa**

```powershell
npm uninstall bootstrap react-bootstrap react-bootstrap-icons react-mailchimp-subscribe react-multi-carousel react-router-dom react-router-hash-link
```

Expected: package.json chỉ còn: @testing-library/*, animate.css, react, react-dom, react-on-screen, react-scripts, web-vitals.

- [ ] **Step 4: Chạy test lần cuối**

Run: `npm test -- --watchAll=false`
Expected: PASS toàn bộ.

- [ ] **Step 5: Build production**

Run: `npm run build`
Expected: Compiled successfully, không warning về import thiếu.

**KHÔNG commit** — chờ user yêu cầu.
