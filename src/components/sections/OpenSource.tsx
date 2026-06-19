import Reveal from "../Reveal";

const ADAPTERS = [
  { name: "CLAUDE", status: "LIVE", color: "var(--orange)" },
  { name: "GEMINI", status: "COMMUNITY", color: "var(--muted)" },
  { name: "CURSOR", status: "COMMUNITY", color: "var(--muted)" },
  { name: "YOURS", status: "BUILD IT", color: "var(--yellow)" },
];

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] border-t border-border"
    >
      <div className="max-w-[1120px] mx-auto">
        <Reveal as="div" className="text-center mb-[clamp(36px,5vw,64px)]">
          <div className="font-mono font-semibold text-[14px] tracking-[0.26em] text-yellow mb-[14px]">
            THE COMPANION
          </div>
          <h2 className="m-0 font-anton font-normal leading-[0.92] text-[clamp(36px,5.5vw,68px)] uppercase text-ink">
            The engine is open<span className="text-orange">.</span>
          </h2>
        </Reveal>

        <div className="flex gap-7 sm:gap-[clamp(28px,5vw,72px)] items-start flex-wrap">
          <div className="flex-1 basis-[420px] min-w-0">
            <Reveal ty={34} as="p" className="m-0 max-w-[520px] text-[clamp(16px,1.4vw,18px)] leading-[1.65] text-muted">
              Cookd ships in two halves. The app prints your shame. The{" "}
              <span className="text-ink font-semibold">companion</span> collects the data that powers the shame -
              it reads your usage locally, packages the summary, and hands it to the editor.{" "}
              <span className="font-fraunces italic text-ink">That half is fully open source.</span>
            </Reveal>
            <Reveal ty={34} delay={0.06} as="p" className="m-0 mt-5 max-w-[520px] text-[clamp(16px,1.4vw,18px)] leading-[1.65] text-muted">
              Why? Because you should be able to read every line that reads you. No black boxes. No phoning home.
              Your logs stay on <span className="text-ink font-semibold">your machine</span> until you
              choose to get roasted.
            </Reveal>
            <Reveal ty={34} delay={0.1} as="p" className="m-0 mt-5 max-w-[520px] text-[clamp(15px,1.3vw,17px)] leading-[1.6] text-muted">
              The companion is built on adapters. Claude ships first-party. Everything else - Gemini, Cursor,
              Copilot - is a PR away. Write an adapter, open a pull request, ship it.
            </Reveal>

            <Reveal ty={34} delay={0.14} className="mt-8">
              <a
                href="https://github.com/codeclowns01/cookd"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline inline-flex items-center gap-[10px] bg-surface border border-border text-ink font-anton text-[16px] sm:text-[17px] tracking-[0.03em] px-[18px] sm:px-[22px] py-[11px] sm:py-[13px] rounded-xl hover:border-yellow transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                VIEW ON GITHUB →
              </a>
            </Reveal>
          </div>

          {/* adapter grid */}
          <div className="flex-1 basis-[340px] min-w-0">
            <Reveal ty={40} delay={0.08}>
              <div
                className="bg-surface border border-border rounded-[14px] px-4 sm:px-[26px] pt-[22px] sm:pt-[26px] pb-[18px] sm:pb-[22px]"
                style={{ boxShadow: "0 40px 70px -30px rgba(0,0,0,0.5)" }}
              >
                <div className="flex justify-between items-baseline mb-4">
                  <div className="font-mono font-semibold text-[11px] tracking-[0.2em] text-muted">ADAPTERS</div>
                  <div className="font-mono text-[10px] tracking-[0.14em] text-faint">EXTENSIBLE</div>
                </div>
                <div className="flex flex-col gap-[2px]">
                  {ADAPTERS.map((a, i) => (
                    <div
                      key={a.name}
                      className={`flex items-center justify-between py-[12px] px-1 ${i < ADAPTERS.length - 1 ? "border-b border-line" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-[8px] h-[8px] rounded-full"
                          style={{
                            background: a.color,
                            boxShadow: a.status === "LIVE" ? `0 0 10px ${a.color}` : "none",
                          }}
                        />
                        <span className="font-anton text-[18px] sm:text-[20px] tracking-[0.02em] text-ink">{a.name}</span>
                      </div>
                      <span
                        className="font-mono font-semibold text-[10px] tracking-[0.16em]"
                        style={{ color: a.color }}
                      >
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-dashed border-border">
                  <div className="font-mono text-[10px] tracking-[0.14em] text-faint text-center">
                    ONE ADAPTER = ONE PR · SHIP WHAT YOU USE
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
