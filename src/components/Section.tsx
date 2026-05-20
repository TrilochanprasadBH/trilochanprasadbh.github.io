import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface Props {
  id: string;
  num: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, num, title, children }: Props) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-head reveal in">
          <span className="section-num">{num}</span>
          <h2 className="section-title">{title}</h2>
          <span className="section-rule" aria-hidden="true" />
        </div>
        <div className="reveal in">{children}</div>
      </div>
    </section>
  );
}
