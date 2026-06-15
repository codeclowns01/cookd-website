const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/codeclowns01/cookd",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/codeclowns/?viewAsMember=true",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/CodeClowns",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative px-4 sm:px-[clamp(16px,4vw,44px)] pt-[clamp(44px,5vw,68px)] pb-[clamp(36px,4vw,52px)] bg-bg2 border-t border-border">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between gap-[20px] flex-wrap items-center">
          <div>
            <div className="font-anton text-[34px] text-ink">
              cookd<span className="text-orange">.</span>
            </div>
            <p className="mt-[6px] font-fraunces italic text-[15px] leading-[1.5] text-muted">
              the anti-social network.
            </p>
          </div>
          <div className="flex items-center gap-[14px] flex-wrap">
            <a
              href="/downloads/cookd-application.apk"
              download
              className="no-underline inline-flex items-center gap-[8px] bg-orange text-[#160a04] font-mono font-bold text-[11px] tracking-[0.14em] rounded-full px-[16px] py-[9px]"
            >
              DOWNLOAD THE APP
            </a>
            <a
              href="/privacy"
              className="no-underline inline-flex items-center gap-[8px] border border-border rounded-full px-[16px] py-[9px] font-mono font-semibold text-[11px] tracking-[0.14em] text-muted hover:text-ink hover:border-ink transition-colors"
            >
              PRIVACY POLICY
            </a>
            <div className="flex items-center gap-[10px]">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-[36px] h-[36px] rounded-full border border-border text-muted hover:text-ink hover:border-ink transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-9 border-t border-border pt-[18px] flex justify-between flex-wrap gap-[10px]">
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-faint">© 2026 CODECLOWNS TECHNOLOGIES LLP · ALL FLOPS RESERVED</span>
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-faint">0 FRIENDS · 38,400,000 TOKENS · DIGNITY: NOT FOUND</span>
        </div>
      </div>
    </footer>
  );
}
