import { profile } from "../data/resume";

interface Props {
  variant?: "row" | "stack";
  showLabels?: boolean;
  className?: string;
}

export default function SocialIcons({ variant = "row", showLabels = false, className = "" }: Props) {
  const cls = ["socials", `socials-${variant}`, showLabels ? "socials-labeled" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <ul className={cls} aria-label="Social links">
      <li>
        <a
          href={`mailto:${profile.email}`}
          aria-label={`Email ${profile.email}`}
          className="social-link"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          {showLabels && <span className="social-label">Email</span>}
        </a>
      </li>
      <li>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="social-link"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.03c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.26 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.8.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
          </svg>
          {showLabels && <span className="social-label">GitHub</span>}
        </a>
      </li>
      <li>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="social-link"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
          </svg>
          {showLabels && <span className="social-label">LinkedIn</span>}
        </a>
      </li>
    </ul>
  );
}
