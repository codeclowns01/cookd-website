"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";

const LOG_LINES = [
  "$ cookd roast --tonight",
  "reading ~/.claude/usage …",
  "parsing 38,400,000 tokens",
  "cross-referencing 0 diffs read",
  "locating dignity … not found",
  "assigning editor … Dr. Cookd, MD",
  "verdict: ABSOLUTELY COOKED",
];

const STEPS = [
  'TAP "GET ROASTED"',
  "THE EDITOR READS YOUR LOGS",
  "THE COLUMN PRINTS ITSELF",
  "SHARE IT TO THE PAPER",
];

const LOOP_MS = 12200;

type Phase = "landing" | "generating" | "card" | "share";

export default function RoastDemo() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [step, setStep] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [ripple, setRipple] = useState(false);
  const [count, setCount] = useState(0);
  const [barPct, setBarPct] = useState(0);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [toast, setToast] = useState(false);
  const [scrub, setScrub] = useState(0);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const rafRef = useRef<number | null>(null);
  const scrubRafRef = useRef<number | null>(null);
  const cycleRef = useRef<() => void>(() => {});

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const clearTimers = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };

    const at = (ms: number, fn: () => void) => {
      timersRef.current.push(setTimeout(fn, ms));
    };

    const countTo = (to: number, dur: number) => {
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(to * e));
        setBarPct(e * 100);
        if (p < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const reset = () => {
      clearTimers();
      setPhase("landing");
      setStep(0);
      setPressed(false);
      setRipple(false);
      setCount(0);
      setBarPct(0);
      setLogLines([]);
      setToast(false);
    };

    const cycle = () => {
      reset();
      at(1450, () => {
        setRipple(true);
        setPressed(true);
      });
      at(1800, () => setPressed(false));
      at(2200, () => {
        setPhase("generating");
        setStep(1);
        countTo(38400000, 2500);
      });
      LOG_LINES.forEach((line, i) => {
        at(2350 + i * 320, () => setLogLines((prev) => [...prev, line]));
      });
      at(5300, () => {
        setPhase("card");
        setStep(2);
      });
      at(6900, () => {
        setPhase("share");
        setStep(3);
      });
      at(8300, () => setToast(true));
      at(11400, () => setToast(false));
      at(12200, cycle);
    };
    cycleRef.current = cycle;

    const restartScrub = () => {
      if (scrubRafRef.current) cancelAnimationFrame(scrubRafRef.current);
      const loopStart = performance.now();
      const tick = (t: number) => {
        setScrub((((t - loopStart) % LOOP_MS) / LOOP_MS) * 100);
        scrubRafRef.current = requestAnimationFrame(tick);
      };
      scrubRafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      cycle();
      restartScrub();
    };

    reset();
    if (!document.hidden && !reduce) start();

    const onVisibility = () => {
      if (!document.hidden && !reduce && timersRef.current.length === 0) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    cycleRef.current = () => {
      clearTimers();
      cycle();
      restartScrub();
    };

    return () => {
      clearTimers();
      if (scrubRafRef.current) cancelAnimationFrame(scrubRafRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section
      id="cook"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,120px)] max-w-[1280px] mx-auto"
    >
      <div className="flex gap-7 sm:gap-[clamp(28px,5vw,72px)] items-center flex-wrap">
        {/* left copy + steps */}
        <div className="flex-1 basis-[420px] min-w-[300px]">
          <Reveal ty={34} className="inline-flex items-center gap-[9px] font-mono font-semibold text-[12px] tracking-[0.24em] text-orange mb-4">
            <span className="w-[7px] h-[7px] rounded-full bg-orange shadow-[0_0_9px_var(--orange)]" />
            LIVE FROM THE NEWSROOM
          </Reveal>
          <Reveal ty={34} delay={0.05} as="h2" className="m-0 font-anton font-normal leading-[0.92] text-[clamp(38px,5.6vw,72px)] uppercase text-ink">
            Watch the<br />editor work<span className="text-orange">.</span>
          </Reveal>
          <Reveal ty={34} delay={0.1} as="p" className="mt-5 max-w-[500px] text-[clamp(16px,1.4vw,18px)] leading-[1.65] text-muted">
            You tap one button. He reads <span className="text-ink">everything</span>: every token, every &quot;accept
            all&quot;, every diff you didn&apos;t open, and files the column before you can close the terminal. Then
            you get to print your own humiliation to the front page.
          </Reveal>
          <Reveal ty={34} delay={0.16} className="mt-[30px] flex flex-col gap-[2px]">
            {STEPS.map((label, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-1 py-[13px] transition-opacity duration-300 ${i < 3 ? "border-b border-border" : ""}`}
                style={{ opacity: step === i ? 1 : 0.4 }}
              >
                <span className="font-anton text-[22px] text-orange w-[30px]">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono font-semibold text-[13px] tracking-[0.1em] text-ink">{label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* demo phone */}
        <div className="flex-1 basis-[320px] min-w-[280px] flex flex-col items-center gap-[18px] relative">
          <div
            className="absolute w-[340px] h-[340px] rounded-full blur-[14px] top-[6%] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,77,0,0.22), rgba(255,77,0,0) 65%)" }}
          />
          <Reveal ty={40} className="relative">
            <div
              className="bg-[#0b0a09] border border-[rgba(242,234,217,0.12)] rounded-[46px] p-[7px]"
              style={{ boxShadow: "0 50px 90px -24px rgba(0,0,0,0.7), 0 0 70px -20px rgba(255,77,0,0.32)", width: "min(100%, 322px)" }}
            >
              <div className="relative rounded-[39px] overflow-hidden bg-bg" style={{ aspectRatio: "0.5" }}>
                {/* ticker */}
                <div className="absolute top-0 left-0 right-0 z-[5] bg-orange overflow-hidden py-[6px]">
                  <div className="whitespace-nowrap font-mono font-bold text-[9px] tracking-[0.12em] text-[#1A1008] pl-[10px]">
                    ★ THE EDITOR IS IN ★ DEVELOPING STORY ★ ONE MORE FIX ★ THE EDITOR IS IN ★
                  </div>
                </div>

                {/* LANDING */}
                <div
                  className="absolute inset-0 px-[18px] pt-[38px] pb-[60px] flex flex-col transition-opacity duration-[450ms]"
                  style={{ opacity: phase === "landing" ? 1 : 0 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-anton text-[18px] text-ink">the main event</span>
                    <span className="font-mono font-bold text-[7.5px] tracking-[0.12em] text-orange border border-orange rounded-[5px] px-[7px] py-1">
                      THE EDITOR IS IN
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-[14px] text-center">
                    <div className="text-[42px] leading-none" style={{ filter: "drop-shadow(0 6px 18px rgba(255,77,0,0.5))" }}>🔥</div>
                    <div className="font-anton text-[22px] leading-[1.02] text-ink uppercase">
                      The editor has<br />read your logs<span className="text-orange">.</span>
                    </div>
                    <div className="relative w-full mt-[6px]">
                      <button
                        type="button"
                        className="relative overflow-hidden w-full cursor-pointer border-none bg-orange text-[#160a04] font-anton text-[20px] tracking-[0.04em] py-[15px] rounded-[11px] transition-transform"
                        style={{
                          boxShadow: "0 12px 30px -10px rgba(255,77,0,0.8)",
                          transform: pressed ? "scale(.95)" : "none",
                        }}
                      >
                        GET ROASTED
                        <span
                          className="absolute top-1/2 left-1/2 w-[240px] h-[240px] rounded-full bg-[rgba(255,255,255,0.4)] pointer-events-none"
                          style={{
                            transition: ripple ? "transform .55s ease, opacity .55s ease" : "none",
                            opacity: ripple ? 1 : 0,
                            transform: ripple
                              ? "translate(-50%,-50%) scale(1)"
                              : "translate(-50%,-50%) scale(0)",
                          }}
                        />
                      </button>
                    </div>
                    <div className="font-mono font-semibold text-[8.5px] tracking-[0.2em] text-faint">PRESS OPEN · 7M LEFT</div>
                  </div>
                </div>

                {/* GENERATING */}
                <div
                  className="absolute inset-0 px-5 pt-[38px] pb-6 flex flex-col items-center justify-center gap-[10px] text-center transition-opacity duration-[450ms] pointer-events-none"
                  style={{ opacity: phase === "generating" ? 1 : 0 }}
                >
                  <div className="text-[38px] leading-none" style={{ filter: "drop-shadow(0 6px 18px rgba(255,77,0,0.6))" }}>🔥</div>
                  <div className="font-mono font-semibold text-[10px] tracking-[0.2em] text-muted">READING YOUR LOGS…</div>
                  <div className="font-anton text-[38px] leading-none text-orange">{count.toLocaleString("en-US")}</div>
                  <div className="font-mono font-semibold text-[8.5px] tracking-[0.22em] text-faint -mt-1">TOKENS, COUNTED AGAINST YOU</div>
                  <div className="w-4/5 h-[5px] rounded-full bg-surface2 overflow-hidden mt-[6px]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${barPct}%`, background: "linear-gradient(90deg, var(--yellow), var(--orange))" }}
                    />
                  </div>
                  <div className="mt-3 w-full min-h-[88px] font-mono text-[8.5px] leading-[1.5] text-muted text-left">
                    {logLines.map((line, i) => (
                      <div key={i} className="mb-[3px]" style={{ color: i === LOG_LINES.length - 1 ? "var(--orange)" : undefined }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CARD */}
                <div
                  className="absolute inset-0 px-4 pt-[38px] pb-4 flex items-center justify-center pointer-events-none transition-[opacity,transform] duration-500"
                  style={{
                    opacity: phase === "card" || phase === "share" ? 1 : 0,
                    transform: phase === "card" || phase === "share" ? "translateY(0)" : "translateY(40px)",
                  }}
                >
                  <div className="w-full bg-surface border border-border rounded-[11px] px-4 pt-[18px] pb-[14px]" style={{ boxShadow: "0 24px 50px -20px rgba(0,0,0,0.6)" }}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-anton text-[14px] text-ink">THE COOKD PRESS</span>
                      <span className="font-mono font-semibold text-[7px] tracking-[0.18em] text-muted">EXCLUSIVE</span>
                    </div>
                    <div className="mt-2 border-t-[1.5px] border-ink" />
                    <div className="mt-3 font-mono font-semibold text-[7.5px] tracking-[0.18em] text-muted">EDITOR&apos;S COLUMN · @YOU</div>
                    <div className="mt-[5px] font-anton text-[21px] leading-[0.98] uppercase text-ink">You Shipped Nothing,<br />Beautifully<span className="text-orange">.</span></div>
                    <div className="mt-[9px] font-fraunces italic text-[11.5px] leading-[1.5] text-muted">
                      &quot;38.4M tokens to produce a vibe and a LinkedIn post. Sonnet did the work. You&apos;ll take the credit. Refresh the usage page: it won&apos;t love you back.&quot;
                    </div>
                    <div className="mt-[11px] border-t border-dashed border-border pt-[9px] flex justify-between items-end">
                      <div
                        className="h-5 w-24"
                        style={{
                          background:
                            "repeating-linear-gradient(90deg, var(--ink) 0 1.5px, transparent 1.5px, transparent 4px, var(--ink) 4px, var(--ink) 7px, transparent 7px, transparent 9px)",
                        }}
                      />
                      <span className="font-fraunces italic text-[10px] text-ink">the editor</span>
                    </div>
                  </div>
                </div>

                {/* SHARE sheet */}
                <div
                  className="absolute left-0 right-0 bottom-0 z-[6] px-4 pt-4 pb-[18px] transition-opacity duration-[400ms] pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, transparent, var(--bg) 30%)",
                    opacity: phase === "share" ? 1 : 0,
                  }}
                >
                  <div
                    className="mx-auto mb-[11px] w-max bg-blue text-[#0c1116] font-mono font-bold text-[9px] tracking-[0.1em] px-[11px] py-[6px] rounded-[7px] transition-[opacity,transform] duration-[350ms]"
                    style={{
                      opacity: toast ? 1 : 0,
                      transform: toast ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    SENT TO THE FRONT PAGE ✓
                  </div>
                  <div className="flex gap-[9px]">
                    <div className="flex-[1.4] bg-orange text-[#160a04] text-center font-anton text-[14px] tracking-[0.03em] py-3 rounded-[9px]">PRINT TO THE PAPER</div>
                    <div className="flex-1 bg-transparent border border-border text-ink text-center font-anton text-[14px] tracking-[0.03em] py-3 rounded-[9px]">SHARE</div>
                  </div>
                </div>

                {/* bottom nav */}
                <div className="absolute left-0 right-0 bottom-0 z-[4] flex justify-around py-[9px] pb-[11px] border-t border-border bg-bg">
                  <div className="text-center"><div className="font-anton text-[11px] text-faint">YOU</div></div>
                  <div className="text-center"><div className="font-anton text-[11px] text-faint">PAPER</div></div>
                  <div className="text-center"><div className="font-anton text-[11px] text-orange">ROAST</div></div>
                  <div className="text-center"><div className="font-anton text-[11px] text-faint">RAP</div></div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* scrubber */}
          <Reveal ty={20} delay={0.1} className="w-full" style={{ maxWidth: 322 }}>
            <div className="h-1 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-orange rounded-full" style={{ width: `${scrub}%` }} />
            </div>
            <div className="mt-[9px] flex justify-between items-center">
              <span className="font-mono font-semibold text-[9px] tracking-[0.14em] text-faint">▶ LIVE DEMO · IT LOOPS, LIKE YOUR 2AM SESSIONS</span>
              <button
                type="button"
                onClick={() => cycleRef.current()}
                className="cursor-pointer bg-transparent border border-border rounded-[6px] text-muted font-mono font-semibold text-[9px] tracking-[0.14em] px-[9px] py-[5px]"
              >
                REPLAY
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
