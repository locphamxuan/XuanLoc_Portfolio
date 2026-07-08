import TrackVisibility from "react-on-screen";
import "animate.css";

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
    label: "Facebook",
    value: "loccphamxuan",
    url: "https://www.facebook.com/loccphamxuan",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
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
              I&apos;m Phạm Xuân Lộc, a student at FPT University — get in touch with me:
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
