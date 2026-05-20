import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface Props {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, label, title, intro, children }: Props) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <header className="section-head reveal in">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        <div className="reveal in">{children}</div>
      </div>
    </section>
  );
}
