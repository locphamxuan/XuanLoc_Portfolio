# XuanLoc Portfolio

Personal portfolio website of **Phạm Xuân Lộc** — Fullstack Developer, student at FPT University.

🔗 GitHub: [github.com/locphamxuan](https://github.com/locphamxuan)

## About

Single-page portfolio with a **dark modern** look: dark background, cyan accent, typewriter effect and scroll animations. Sections:

- **Hero** — introduction with a rotating typewriter effect (Fullstack / Frontend / Backend Developer)
- **Skills** — technologies: HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, MongoDB, Java
- **Projects** — personal GitHub projects (Parking Management System, Football Community Platform, Shoes E-Commerce, ...)
- **Contact** — contact info (phone, Facebook)

## Tech Stack

- [React 19](https://react.dev/) (Create React App)
- Plain CSS with CSS variables — no UI framework
- [animate.css](https://animate.style/) + [react-on-screen](https://github.com/fkhadra/react-on-screen) for scroll animations
- Jest + React Testing Library for unit tests

## Project Structure

```
src/
├── components/       # Sections: NavBar, Hero, Skills, Projects, ProjectCard, Contact, Footer
├── data/
│   └── projects.js   # Project list rendered in the Projects section
├── assets/font/      # Centra No2 font
├── App.js            # Composes the sections into the page
├── App.css           # All styles (design tokens + section styles)
└── App.test.js       # Section render tests
```

## Getting Started

```bash
npm install       # Install dependencies
npm start         # Start dev server at http://localhost:3000
npm test          # Run unit tests
npm run build     # Production build into build/
```

## Updating Projects

Add or edit projects in [`src/data/projects.js`](src/data/projects.js) — each project has `title`, `description`, `tech` (tag array) and `links` (GitHub link array).
