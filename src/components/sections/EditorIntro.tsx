import Reveal from "../Reveal";

export default function EditorIntro() {
  return (
    <section
      id="editor"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(50px,7vw,100px)] bg-bg2 border-t border-b border-border"
    >
      <div className="max-w-[1240px] mx-auto flex gap-7 sm:gap-[clamp(28px,4vw,64px)] items-center flex-wrap">
        <div className="flex-1 basis-[420px] min-w-[300px]">
          <Reveal ty={34} as="div" className="font-mono font-semibold text-[12px] tracking-[0.26em] text-orange mb-[18px]">
            MEET YOUR EDITOR
          </Reveal>
          <Reveal ty={34} delay={0.06} as="h2" className="m-0 font-anton font-normal leading-[0.92] text-[clamp(40px,6vw,78px)] uppercase text-ink">
            Dr. Cookd<span className="text-orange">,</span> MD<span className="text-orange">.</span>
          </Reveal>
          <Reveal ty={34} delay={0.1} as="p" className="mt-[14px] font-fraunces italic font-normal text-[clamp(19px,2vw,24px)] text-muted">
            the MD is for <span className="text-ink">Mostly Disappointed</span>.
          </Reveal>
          <Reveal ty={34} delay={0.14} as="p" className="mt-[22px] max-w-[520px] text-[clamp(16px,1.4vw,18px)] leading-[1.65] text-muted">
            Board-certified in reading your logs and finding them wanting. He has seen your 2&nbsp;a.m. &quot;one
            more fix.&quot; He has seen the accept-all. He has notes, all of them unkind, all of them{" "}
            <span className="text-ink font-semibold">verified by usage, not vibes</span>.
          </Reveal>
          <Reveal ty={34} delay={0.18} className="mt-[26px] flex flex-wrap gap-[9px]">
            <span className="font-mono font-semibold text-[11px] tracking-[0.08em] text-orange border-[1.5px] border-orange rounded-[6px] px-[11px] py-[6px]">
              TOKEN ARSONIST
            </span>
            <span className="font-mono font-semibold text-[11px] tracking-[0.08em] text-blue border-[1.5px] border-blue rounded-[6px] px-[11px] py-[6px]">
              NIGHT OWL
            </span>
            <span className="font-mono font-semibold text-[11px] tracking-[0.08em] text-yellow border-[1.5px] border-yellow rounded-[6px] px-[11px] py-[6px]">
              CTX HOARDER
            </span>
            <span className="font-mono font-semibold text-[11px] tracking-[0.08em] text-muted border-[1.5px] border-border rounded-[6px] px-[11px] py-[6px]">
              +4 PRIOR OFFENSES
            </span>
          </Reveal>
        </div>

        {/* editor column card */}
        <div className="flex-1 basis-[380px] min-w-[300px] flex justify-center">
          <Reveal
            ty={40}
            delay={0.1}
            rot="-1.4deg"
            className="w-full max-w-[440px] bg-surface border border-border rounded-[14px] px-[30px] pt-[30px] pb-[26px] relative"
            style={{ boxShadow: "0 40px 70px -30px rgba(0,0,0,0.7)" }}
          >
            <div className="flex justify-between items-baseline">
              <div className="font-anton text-[21px] tracking-[0.02em] text-ink">THE COOKD PRESS</div>
              <div className="font-mono font-semibold text-[10px] tracking-[0.2em] text-muted">EXCLUSIVE</div>
            </div>
            <div className="mt-3 border-t-2 border-ink" />
            <div className="mt-[18px] font-mono font-semibold text-[11px] tracking-[0.2em] text-muted">
              EDITOR&apos;S COLUMN · @YOU
            </div>
            <div className="mt-2 font-anton text-[clamp(28px,3.4vw,38px)] leading-[0.96] uppercase text-ink">
              38 Million Tokens<br />And No Off Switch
            </div>
            <p className="mt-4 font-fraunces italic font-normal text-[17px] leading-[1.55] text-muted">
              &quot;That&apos;s not engineering, chef. That&apos;s a slot machine with a corporate card. You weren&apos;t
              building, you were yelling &apos;accept all&apos; until it stopped paying. You&apos;ll refresh the usage
              page like it resets out of pity. It won&apos;t.&quot;
            </p>
            <div className="mt-5 border-t border-dashed border-border" />
            <div className="mt-[14px] flex justify-between items-end">
              <div className="flex flex-col gap-[5px]">
                <div
                  className="h-[34px] w-[150px]"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 5px, var(--ink) 5px 9px, transparent 9px 11px, var(--ink) 11px 12px, transparent 12px 16px)",
                  }}
                />
                <div className="font-mono text-[8.5px] tracking-[0.14em] text-faint">
                  38,400,000 · 3H12M · OPUS 4.8 · 100%
                </div>
              </div>
              <div className="font-fraunces italic text-[15px] text-ink">the editor</div>
            </div>
            <div className="absolute top-[64px] -right-[14px] rotate-[-9deg] font-anton text-[17px] tracking-[0.04em] text-yellow border-[3px] border-yellow rounded-[6px] px-[10px] py-[3px] bg-surface">
              EXCLUSIVE
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
