import Section from "./Section";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <Section id="work" num="02 / Experience" title="Where I've worked">
      <div className="exp">
        {experience.map((job) => (
          <article key={job.company} className="exp-item">
            <div className="exp-meta">
              <span className="period">{job.period}</span>
              {job.location}
            </div>
            <div>
              <h3 className="exp-role">
                {job.role} <span className="company">— {job.company}</span>
              </h3>
              <ul className="exp-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
