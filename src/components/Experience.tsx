import { Fragment } from "react";
import Section from "./Section";
import { experience } from "../data/resume";

function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function Experience() {
  return (
    <Section id="work" label="Experience" title="Where I've worked">
      <div className="exp">
        {experience.map((job) => (
          <article key={job.company} className="exp-item">
            <div className="exp-meta">
              <span className="period">{job.period}</span>
              {job.location}
            </div>
            <div>
              <h3 className="exp-role">
                {job.role}
                <span className="exp-company">{job.company}</span>
              </h3>
              <ul className="exp-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{renderBold(b)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
