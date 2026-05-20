import Section from "./Section";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <Section id="skills" label="Stack" title="Tools & technologies">
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <div className="skill-cat">{group.category}</div>
            <div className="skill-list">
              {group.items.map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
