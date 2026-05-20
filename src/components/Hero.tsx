import { profile } from "../data/resume";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero-eyebrow">Full-stack engineer · {profile.location}</div>
        <h1 className="hero-title">
          {profile.name.split(" ").slice(0, 1).join(" ")}{" "}
          <span className="italic">{profile.name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="hero-sub">
          Solo SaaS builder shipping AI-powered products end-to-end — async LLM pipelines,
          RAG systems, and multi-tenant infrastructure from architecture to deployment.
        </p>
        <div className="hero-meta">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="dot" aria-hidden="true" />
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <span className="dot" aria-hidden="true" />
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}
