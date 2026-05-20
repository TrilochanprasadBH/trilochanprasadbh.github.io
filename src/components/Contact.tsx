import { profile } from "../data/resume";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="contact" className="section contact" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="reveal in">
          <div className="contact-eyebrow">06 / Get in touch</div>
          <h2 className="contact-title">
            Have a system worth building?
            <br />
            <span style={{ fontStyle: "italic", color: "var(--accent-deep)" }}>Let's talk.</span>
          </h2>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
