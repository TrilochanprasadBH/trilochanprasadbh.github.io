import Section from "./Section";
import { education } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" num="05 / Education" title="Where I studied">
      <div className="edu-grid">
        {education.map((e) => (
          <div key={e.degree} className="edu-item">
            <div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
            </div>
            <div className="edu-meta">
              {e.year}
              <br />
              {e.location}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
