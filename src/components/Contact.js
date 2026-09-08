import TrackVisibility from "react-on-screen";
import "animate.css";

const GITHUB_URL = "https://github.com/locphamxuan";

const CONTACTS = [
  {
    label: "Phone",
    value: "0383 436 414",
    url: "tel:0383436414",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "locphamxuan",
    url: GITHUB_URL,
    icon: (
      <svg viewBox="0 0 16 16" width="22" height="22" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
];

export const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Contact</h2>
            <p className="section-subtitle">
              Phạm Xuân Lộc — feel free to reach out
            </p>
            <div className="contact-grid">
              {CONTACTS.map((contact) => (
                <a
                  key={contact.url}
                  className="contact-item"
                  href={contact.url}
                  {...(contact.url.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {contact.icon}
                  <div>
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  </section>
);
