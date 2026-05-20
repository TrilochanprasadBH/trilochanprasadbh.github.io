import Section from "./Section";
import { education } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" label="Education" title="Where I studied">
      <div className="edu-grid">
        {education.map((e) => (
          <div key={e.degree} className="edu-item">
            <div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
            </div>
            <div className="edu-meta">
              <span className="edu-year">{e.year}</span>
              {e.location}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
