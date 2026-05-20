import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Home" onClick={close}>
          Trilochanprasad
        </a>

        <div className="nav-links" role="menubar">
          {links.map((l) => (
            <a key={l.href} href={l.href} role="menuitem">
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-nav-inner">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
