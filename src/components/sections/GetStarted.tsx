"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Reveal from "../Reveal";

const TYPING_SPEED = 60;
const COMMAND = "npx @codeclowns/cookd init";

const SUMMARY_LINES = [
  "WEIGHTED TOKENS ··················· 6.3M",
  "LIMIT ····························· 5.6M",
  "TOP MODEL ·················· claude-sonnet-4-6",
  "SESSIONS ·························· 1",
  "AVG SESSION ······················ 4h 4m",
  "WINDOW EXPIRES IN ················ 51m 40s",
];

const STEPS = [
  {
    number: "01",
    title: "Run the command",
    desc: "Open your terminal. Paste the command. Cookd reads your Claude Code usage data locally - nothing leaves your machine.",
  },
  {
    number: "02",
    title: "Get your summary",
    desc: "The editor scans your session - tokens burned, models used, cache hits. A summary prints in full newspaper style.",
  },
  {
    number: "03",
    title: "Grab your code",
    desc: "A 6-character code appears at the bottom. Enter it in the app within 10 minutes to unlock your daily edition.",
  },
];

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function GetStarted() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<"idle" | "typing" | "loading" | "summary" | "code">("idle");
  const [typedChars, setTypedChars] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [countdown, setCountdown] = useState(596);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setPhase("typing");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    if (typedChars >= COMMAND.length) {
      const t = setTimeout(() => setPhase("loading"), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setTypedChars((c) => c + 1), TYPING_SPEED);
    return () => clearTimeout(t);
  }, [phase, typedChars]);

  useEffect(() => {
    if (phase !== "loading") return;
    setActiveStep(1);
    const t = setTimeout(() => setPhase("summary"), 1200);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "summary") return;
    if (visibleLines >= SUMMARY_LINES.length) {
      setActiveStep(2);
      const t = setTimeout(() => setPhase("code"), 600);
      return () => clearTimeout(t);
    }
    const nextDelay = visibleLines === 0 ? 200 : 100;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), nextDelay);
    return () => clearTimeout(t);
  }, [phase, visibleLines]);

  useEffect(() => {
    if (phase === "code") setActiveStep(2);
  }, [phase]);

  const tickCountdown = useCallback(() => {
    setCountdown((c) => (c > 0 ? c - 1 : 596));
  }, []);

  useEffect(() => {
    if (phase !== "code") return;
    const t = setInterval(tickCountdown, 1000);
    return () => clearInterval(t);
  }, [phase, tickCountdown]);

  return (
    <section
      ref={sectionRef}
      id="get-started"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(50px,7vw,100px)] border-t border-border"
    >
      <div className="max-w-[1240px] mx-auto">
        <Reveal as="div" className="text-center mb-[clamp(36px,5vw,64px)]">
          <div className="font-mono font-semibold text-[12px] tracking-[0.26em] text-orange mb-[14px]">
            HOW TO GET IN
          </div>
          <h2 className="m-0 font-anton font-normal leading-[0.92] text-[clamp(36px,5.5vw,68px)] uppercase text-ink">
            One command<span className="text-orange">.</span> No signup<span className="text-orange">.</span>
          </h2>
        </Reveal>

        <div className="flex gap-7 sm:gap-[clamp(28px,4vw,56px)] items-start flex-wrap">
          {/* Terminal */}
          <Reveal ty={40} delay={0.08} className="flex-1 basis-[520px] min-w-0 w-full">
            <div
              className="rounded-[12px] border border-border overflow-hidden"
              style={{ background: "#0a0806", boxShadow: "0 40px 80px -30px rgba(0,0,0,0.8)" }}
            >
              {/* title bar */}
              <div className="flex items-center gap-[7px] px-4 py-[10px] border-b border-border bg-surface">
                <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-faint">terminal</span>
              </div>

              {/* terminal body — fixed height, content fades in */}
              <div className="px-3 sm:px-5 py-4 sm:py-5 font-mono text-[11px] sm:text-[13px] leading-[1.7] h-[380px] sm:h-[420px] overflow-hidden relative">
                {/* prompt + command */}
                <div className="flex items-center gap-2">
                  <span className="text-[#8d8377] select-none">$</span>
                  <span className="text-[#f2ead9] font-bold">
                    {COMMAND.slice(0, typedChars)}
                    {phase === "typing" && (
                      <span className="inline-block w-[8px] h-[16px] bg-orange ml-[1px] align-middle animate-[ck-blink_1s_step-end_infinite]" />
                    )}
                  </span>
                </div>

                {/* banner */}
                <div className="mt-3 transition-opacity duration-500" style={{ opacity: phase !== "idle" && phase !== "typing" ? 1 : 0 }}>
                  <div
                    className="inline-block font-mono font-bold text-[8px] sm:text-[10px] tracking-[0.14em] px-2 py-[3px] rounded-[3px]"
                    style={{ background: "#ff4d00", color: "#0a0806" }}
                  >
                    ★ NO CREDENTIALS REQUIRED ★ ENTER CODE IN APP ★
                  </div>
                </div>

                {/* summary block */}
                <div
                  className="mt-3 border border-[#332d26] rounded-[4px] p-4 transition-opacity duration-500"
                  style={{ opacity: phase === "summary" || phase === "code" ? 1 : 0 }}
                >
                  <div className="flex justify-between items-baseline mb-1 gap-2">
                    <span className="font-bold text-[#f2ead9] text-[11px] sm:text-[13px] tracking-[0.04em] shrink-0">THE COOKD PRESS</span>
                    <span className="text-[#706357] text-[8px] sm:text-[10px] tracking-[0.08em] truncate">OPINION - SCATHING</span>
                  </div>
                  <div className="text-[#706357] text-[8px] sm:text-[10px] tracking-[0.12em] mb-3 border-b border-[#332d26] pb-2 truncate">
                    EDITOR&apos;S COLUMN · TONIGHT&apos;S SUBJECT: @YOU
                  </div>

                  {/* stats */}
                  {SUMMARY_LINES.map((line, i) => (
                    <div
                      key={i}
                      className="transition-opacity duration-300"
                      style={{ opacity: i < visibleLines ? 1 : 0 }}
                    >
                      <span className="text-[#c4b9a8] text-[10px] sm:text-[11.5px] whitespace-pre overflow-hidden text-ellipsis block">{line}</span>
                    </div>
                  ))}
                </div>

                {/* progress bar + code */}
                <div className="mt-3 transition-opacity duration-500" style={{ opacity: phase === "code" ? 1 : 0 }}>
                  <div className="h-[18px] sm:h-[22px] rounded-[4px] bg-yellow w-full mb-1 flex items-center justify-center">
                    <span className="font-mono font-bold text-[9px] sm:text-[11px] tracking-[0.06em] text-[#0a0806]">100% TORCHED</span>
                  </div>

                  {/* code display */}
                  <div className="flex justify-center gap-2 sm:gap-3 mb-3">
                    {["R", "2", "3", "3", "W", "J"].map((c, i) => (
                      <div
                        key={i}
                        className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] border border-[#a89880] rounded-[6px] flex items-center justify-center font-bold text-[#f2ead9] text-[12px] sm:text-[15px]"
                      >
                        {c}
                      </div>
                    ))}
                  </div>

                  <div className="text-center pb-1">
                    <span className="text-[#706357] text-[9px] sm:text-[11px]">{"∴"} EXPIRES IN </span>
                    <span className="text-orange font-bold text-[10px] sm:text-[12px] tabular-nums">{formatTime(countdown)}</span>
                    <span className="text-[#706357] text-[9px] sm:text-[11px] italic"> - waiting for credentials...</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Steps */}
          <div className="flex-1 basis-[340px] min-w-0 flex flex-col gap-0 pt-2">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} ty={34} delay={0.1 + i * 0.08}>
                <div
                  className="relative pl-[52px] py-[22px] border-l-2 transition-colors duration-500"
                  style={{ borderColor: i <= activeStep ? "var(--orange)" : "var(--border)" }}
                >
                  <div
                    className="absolute left-[-17px] top-[22px] w-[32px] h-[32px] rounded-full flex items-center justify-center font-mono font-bold text-[12px] transition-all duration-500"
                    style={{
                      background: i <= activeStep ? "var(--orange)" : "var(--surface)",
                      color: i <= activeStep ? "#0a0806" : "var(--muted)",
                      border: i <= activeStep ? "2px solid var(--orange)" : "2px solid var(--border)",
                      boxShadow: i <= activeStep ? "0 0 20px rgba(255,77,0,0.4)" : "none",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 className="m-0 font-anton text-[clamp(22px,2.4vw,28px)] text-ink uppercase leading-[1]">
                    {step.title}
                  </h3>
                  <p className="mt-[10px] text-[clamp(14px,1.2vw,16px)] leading-[1.6] text-muted max-w-[380px]">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal ty={30} delay={0.4} className="mt-[18px] pl-[52px]">
              <div className="font-mono font-semibold text-[10px] tracking-[0.2em] text-faint">
                NO EMAIL · NO PASSWORD · JUST VIBES AND TOKENS
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
