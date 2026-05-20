import Section from "./Section";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <Section id="projects" num="03 / Selected work" title="Things I've built">
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <div className="project-head">
              <h3 className="project-name">{p.name}</h3>
              <span className="project-tag">{p.tagline}</span>
            </div>
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
