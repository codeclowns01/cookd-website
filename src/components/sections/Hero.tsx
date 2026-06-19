import CopyButton from "../CopyButton";
import CountUp from "../CountUp";
import Parallax from "../Parallax";
import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";
import AppScreen from "../screens/AppScreen";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(40px,7vw,96px)] pb-[clamp(60px,8vw,110px)] max-w-[1340px] mx-auto"
    >
      <Parallax
        speed={0.05}
        className="-top-[60px] right-[6%] w-[520px] h-[520px] rounded-full blur-[20px]"
        style={{ background: "radial-gradient(circle, rgba(255,77,0,0.22), rgba(255,77,0,0) 62%)" }}
      />
      <Parallax
        speed={0.12}
        className="-bottom-[40px] -left-[60px] w-[380px] h-[380px] rounded-full blur-[20px]"
        style={{ background: "radial-gradient(circle, rgba(127,167,196,0.10), rgba(127,167,196,0) 65%)" }}
      />

      <div className="flex gap-6 sm:gap-[clamp(24px,4vw,56px)] items-center flex-wrap relative">
        {/* left */}
        <div className="flex-1 basis-[460px] min-w-[300px]">
          <Reveal className="inline-flex items-center gap-[10px] border border-border rounded-full px-[14px] py-[7px] mb-[26px]">
            <span className="w-[7px] h-[7px] rounded-full bg-orange shadow-[0_0_10px_var(--orange)] animate-[ck-flicker_1.6s_infinite]" />
            <span className="font-mono font-semibold text-[11px] tracking-[0.2em] text-muted">
              VOL. 001 · THE DAILY PAPER OF PEOPLE WHO RAN OUT OF PROMPTS
            </span>
          </Reveal>

          <Reveal delay={0.06} as="h1" className="m-0 font-anton font-normal leading-[0.9] tracking-[0.005em] text-[clamp(52px,9vw,116px)] text-ink uppercase">
            The anti&#8209;social<br />network<span className="text-orange">.</span>
          </Reveal>

          <Reveal delay={0.12} as="p" className="mt-[26px] max-w-[540px] text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-muted">
            You don&apos;t post. You get <span className="text-ink font-semibold">posted</span>. cookd reads your
            Claude usage, hands the logs to an editor who hates you, and prints what he finds:{" "}
            <span className="font-fraunces italic text-ink">nightly, in full color, with a barcode.</span>
          </Reveal>

          <Reveal delay={0.18} className="mt-[34px] flex flex-wrap gap-[14px] items-center">
            <div className="flex items-center gap-[14px] bg-surface border border-border rounded-xl px-4 py-[13px] font-mono">
              <span className="text-orange">$</span>
              <span className="text-ink text-[15px] tracking-[0.01em]">npx @codeclowns/cookd init</span>
              <CopyButton text="npx @codeclowns/cookd init" className="ml-[6px]" />
            </div>
            <a
              href="/downloads/cookd-application.apk"
              download
              className="no-underline inline-flex items-center gap-[10px] bg-orange text-[#160a04] font-anton text-[19px] tracking-[0.03em] px-[26px] py-[14px] rounded-xl"
              style={{ boxShadow: "0 0 0 1px rgba(255,77,0,0.4), 0 14px 40px -12px rgba(255,77,0,0.7)" }}
            >
              DOWNLOAD FOR ANDROID →
            </a>
            <a
              href="https://github.com/codeclowns01/cookd"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center gap-[10px] bg-surface border border-border text-ink font-anton text-[17px] tracking-[0.03em] px-[22px] py-[13px] rounded-xl hover:border-orange transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              OPEN SOURCE
            </a>
          </Reveal>
          <Reveal delay={0.22} as="div" className="mt-[10px] font-mono font-semibold text-[10px] tracking-[0.16em] text-faint">
            COMING SOON FOR iOS
          </Reveal>

          <Reveal delay={0.24} as="div" className="mt-4 font-mono font-semibold text-[11px] tracking-[0.22em] text-faint">
            NO EMAIL · NO PASSWORD · NO TOURISTS
          </Reveal>

          <Reveal delay={0.3} className="mt-[42px] grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-border border border-border rounded-xl overflow-hidden max-w-[560px]">
            <div className="bg-bg px-[14px] py-4">
              <div className="font-anton text-[30px] text-ink"><CountUp value={38400000} compact /></div>
              <div className="mt-1 font-mono font-semibold text-[9px] tracking-[0.14em] text-muted">TOKENS TORCHED</div>
            </div>
            <div className="bg-bg px-[14px] py-4">
              <div className="font-anton text-[30px] text-blue">0</div>
              <div className="mt-1 font-mono font-semibold text-[9px] tracking-[0.14em] text-muted">FRIENDS</div>
            </div>
            <div className="bg-bg px-[14px] py-4">
              <div className="font-anton text-[30px] text-blue">0</div>
              <div className="mt-1 font-mono font-semibold text-[9px] tracking-[0.14em] text-muted">DIFFS READ</div>
            </div>
            <div className="bg-bg px-[14px] py-4">
              <div className="font-anton text-[30px] text-orange"><CountUp value={12408} /></div>
              <div className="mt-1 font-mono font-semibold text-[9px] tracking-[0.14em] text-muted">IN THE PRESS POOL</div>
            </div>
          </Reveal>
        </div>

        {/* right phone */}
        <div className="flex-1 basis-[320px] min-w-[280px] flex justify-center relative">
          <Parallax
            speed={0.08}
            className="w-[340px] h-[340px] rounded-full blur-[10px] top-[8%]"
            style={{ background: "radial-gradient(circle, rgba(255,77,0,0.28), rgba(255,77,0,0) 65%)" }}
          />
          <Reveal delay={0.15} ty={46} className="relative">
            <PhoneFrame glow>
              <AppScreen screen="cooked" />
            </PhoneFrame>
            <div
              className="absolute -top-[22px] -right-[30px] rotate-[7deg] animate-[ck-float_5s_ease-in-out_infinite] font-anton text-[26px] tracking-[0.04em] text-yellow border-4 border-yellow rounded-[9px] px-4 py-[6px] bg-[rgba(14,12,10,0.55)] backdrop-blur-[4px]"
              style={{ "--r": "7deg" } as React.CSSProperties}
            >
              COOKED
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
