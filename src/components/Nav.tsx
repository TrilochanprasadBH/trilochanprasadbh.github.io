export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Home">
          <span className="brand-dot">·</span>Trilochanprasad
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
