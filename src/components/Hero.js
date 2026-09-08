import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";
import portrait from "../assets/images/portrait.jpg";

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
      <div className="container hero-inner">
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "hero-copy animate__animated animate__fadeIn" : "hero-copy"}>
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
                I&apos;m a fullstack developer — building complete web applications
                from UI to API and database with ReactJS, NodeJS and MongoDB.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">View Projects</a>
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
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "hero-portrait animate__animated animate__fadeIn" : "hero-portrait"}>
              <div className="hero-portrait-glow" aria-hidden="true" />
              <img
                src={portrait}
                alt="Portrait of Phạm Xuân Lộc"
                width="360"
                height="360"
                fetchPriority="high"
              />
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};
