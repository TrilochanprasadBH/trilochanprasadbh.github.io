import { profile } from "../data/resume";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero-eyebrow">
          <span className="dot" aria-hidden="true" />
          Available for collaborations · {profile.location}
        </div>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-role">Full-stack Engineer · AI-powered SaaS</p>
        <p className="hero-sub">
          Solo SaaS builder shipping AI-powered products end-to-end — async LLM pipelines,
          RAG systems, and multi-tenant infrastructure from architecture to deployment.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
          <a className="btn btn-ghost" href="#projects">
            View work
          </a>
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}
