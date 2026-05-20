import { Fragment } from "react";
import Section from "./Section";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <Section id="skills" num="04 / Toolkit" title="Stack & craft">
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <div className="skill-cat">{group.category}</div>
            <div className="skill-list">
              {group.items.map((s, i) => (
                <Fragment key={s}>
                  {s}
                  {i < group.items.length - 1 && <span className="sep">·</span>}
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
