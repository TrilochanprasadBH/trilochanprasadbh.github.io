import Section from "./Section";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected work">
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <header className="project-head">
              <div className="project-title-row">
                <h3 className="project-name">{p.name}</h3>
                <a
                  className="project-link"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name} in a new tab`}
                >
                  <span>Visit site</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </a>
              </div>
              <span className="project-tag">{p.tagline}</span>
            </header>
            <p className="project-desc">{p.description}</p>
            <ul className="project-bullets">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="project-metrics">
              {p.metrics.map((m) => (
                <div key={m.label} className="metric">
                  <span className="v">{m.value}</span>
                  <span className="l">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="project-stack">
              {p.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
