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
