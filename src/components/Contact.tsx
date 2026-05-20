import { profile } from "../data/resume";
import Section from "./Section";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's build something useful"
      intro="Open to collaborations on AI-powered SaaS, async LLM pipelines, and full-stack engineering."
    >
      <div className="contact-body">
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
            {profile.phone}
          </a>
        </div>
        <SocialIcons className="contact-socials" showLabels />
      </div>
    </Section>
  );
}
