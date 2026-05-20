import Section from "./Section";
import { profile } from "../data/resume";

export default function About() {
  return (
    <Section id="about" label="About" title="Engineer-builder. Quiet rigor.">
      <div className="about-grid">
        <p className="about-lead">
          I ship production systems with real users and real revenue — from architecture to
          deployment, owned end-to-end.
        </p>
        <div>
          <p className="about-body">{profile.summary}</p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="v">2</span>
              <span className="l">Production SaaS shipped</span>
            </div>
            <div className="about-stat">
              <span className="v">4</span>
              <span className="l">International clients led</span>
            </div>
            <div className="about-stat">
              <span className="v">30K+</span>
              <span className="l">Organic pageviews</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
