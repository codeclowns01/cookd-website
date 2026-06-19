"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import { SCREENS } from "../screens/screenContent";
import "../screens/hp.css";

const FLOW = [
  {
    screen: "cooked" as const,
    step: 'TAP "RUIN ME"',
    desc: "You hit 100%. The stamp drops. Tap RUIN ME to hand your logs to the editor.",
    hasClick: true,
    popClass: "hp-pop-btn",
  },
  {
    screen: "roast" as const,
    step: "PRINT IT TO THE PAPER",
    desc: "The editor writes your column. Tap to send it to the front page.",
    hasClick: true,
    popClass: "hp-pop-btn",
  },
  {
    screen: "feed" as const,
    step: "THE SHAME IS LIVE",
    desc: "Your roast hits the feed. Friends flame it, strangers clip it.",
    hasClick: false,
    popClass: "",
  },
  {
    screen: "feed" as const,
    step: "SYNDICATE THE SHAME",
    desc: "Share your roast card to X, Reddit, WhatsApp. Let the world see what you did.",
    hasClick: true,
    popClass: "hp-pop-share",
  },
];

const CURSOR_TARGETS = [
  { x: 30, y: 77 },
  { x: 50, y: 61 },
  { x: 50, y: 50 },
  { x: 84, y: 66 },
];

const SCREEN_MS = 3200;
const FADE_MS = 500;
const CLICK_DELAY = 1200;
const LOOP_MS = FLOW.length * SCREEN_MS;

export default function RoastDemo() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.68);
  const [clicking, setClicking] = useState(false);
  const [popKey, setPopKey] = useState(0);
  const [showSheet, setShowSheet] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const start = () => {
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % FLOW.length);
      }, SCREEN_MS);
    };

    if (!document.hidden) start();

    const onVis = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        setActive(0);
        start();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w && w > 0) setScale(w / 393);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setClicking(false);
    setShowSheet(false);
    if (!FLOW[active].hasClick) return;
    const isShareStep = active === FLOW.length - 1;
    const t1 = setTimeout(() => {
      setClicking(true);
      setPopKey((k) => k + 1);
    }, CLICK_DELAY);
    const t2 = setTimeout(() => setClicking(false), CLICK_DELAY + 300);
    const t3 = isShareStep ? setTimeout(() => setShowSheet(true), CLICK_DELAY + 400) : undefined;
    return () => { clearTimeout(t1); clearTimeout(t2); if (t3) clearTimeout(t3); };
  }, [active]);

  const showCursor = FLOW[active].hasClick;

  return (
    <section
      id="cook"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,120px)] max-w-[1280px] mx-auto"
    >
      <div className="flex gap-7 sm:gap-[clamp(28px,5vw,72px)] items-center flex-wrap">
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
            {FLOW.map((f, i) => (
              <div
                key={f.step}
                className={`flex items-start gap-4 px-1 py-[13px] transition-all duration-500 ${i < FLOW.length - 1 ? "border-b border-border" : ""}`}
                style={{ opacity: active === i ? 1 : 0.35 }}
              >
                <span className="font-anton text-[22px] text-orange w-[30px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="font-mono font-semibold text-[13px] tracking-[0.1em] text-ink">{f.step}</span>
                  <p
                    className="m-0 mt-1 text-[13px] leading-[1.5] text-muted overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: active === i ? 60 : 0,
                      opacity: active === i ? 1 : 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="flex-1 basis-[320px] min-w-[280px] flex flex-col items-center relative">
          <div
            className="absolute w-[340px] h-[340px] rounded-full blur-[14px] top-[6%] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,77,0,0.22), rgba(255,77,0,0) 65%)" }}
          />
          <Reveal ty={40} className="relative w-full" style={{ maxWidth: 322 }}>
            <div
              className="bg-[#0b0a09] border border-[rgba(242,234,217,0.12)] rounded-[46px] p-[7px]"
              style={{ boxShadow: "0 50px 90px -24px rgba(0,0,0,0.7), 0 0 70px -20px rgba(255,77,0,0.32)" }}
            >
              <div
                ref={containerRef}
                className="relative overflow-hidden bg-[#060503] rounded-[39px]"
                style={{ aspectRatio: "393 / 852" }}
              >
                {FLOW.map((f, i) => {
                  const prevScreen = i > 0 ? FLOW[i - 1].screen : null;
                  if (prevScreen === f.screen) return null;
                  const isVisible = FLOW[active].screen === f.screen;
                  const shouldPop = isVisible && clicking && FLOW[active].popClass;
                  return (
                    <div
                      key={f.screen + "-" + i}
                      className="absolute inset-0"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transition: `opacity ${FADE_MS}ms ease-in-out`,
                        zIndex: isVisible ? 2 : 1,
                      }}
                    >
                      <div
                        key={shouldPop ? popKey : 0}
                        className={`hp ${shouldPop ? FLOW[active].popClass : ""}`}
                        style={{
                          width: 393,
                          height: 852,
                          transformOrigin: "top left",
                          transform: `scale(${scale})`,
                          display: "flex",
                          flexDirection: "column",
                          background: "var(--bg)",
                          color: "var(--ink)",
                          fontFamily: "var(--font-schibsted-grotesk), sans-serif",
                          position: "relative",
                          overflow: "hidden",
                        }}
                        dangerouslySetInnerHTML={{ __html: SCREENS[f.screen] }}
                      />
                    </div>
                  );
                })}

                {/* syndicate bottom sheet */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    zIndex: 15,
                    opacity: showSheet ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {/* dimmed backdrop */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: "inherit",
                    }}
                  />
                  {/* sheet */}
                  <div
                    className="hp"
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: "100%",
                      background: "var(--bg2, #141110)",
                      borderTop: "2px solid var(--orange)",
                      borderRadius: `${22 * scale}px ${22 * scale}px 0 0`,
                      padding: `${14 * scale}px ${22 * scale}px ${24 * scale}px`,
                      transform: showSheet ? "translateY(0)" : "translateY(100%)",
                      transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                      fontFamily: "var(--font-schibsted-grotesk), sans-serif",
                      color: "var(--ink)",
                      overflow: "hidden",
                    }}
                  >
                    {/* handle */}
                    <div style={{ width: 44 * scale, height: 4 * scale, borderRadius: 99, background: "var(--border, #332d26)", margin: `0 auto ${10 * scale}px` }} />
                    {/* title */}
                    <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: 600, fontSize: 9.5 * scale, letterSpacing: "0.22em", color: "var(--muted, #8d8377)", margin: `0 0 ${3 * scale}px` }}>SYNDICATION DESK</div>
                    <div style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 24 * scale, lineHeight: 0.97 }}>SPREAD THE <span style={{ color: "var(--orange)" }}>SHAME.</span></div>
                    <div style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 340, fontSize: 12 * scale, color: "var(--muted, #8d8377)", margin: `${8 * scale}px 0 0`, lineHeight: 1.45 }}>this column deserves a wider audience.</div>
                    {/* roast card — same as EditorIntro */}
                    <div style={{
                      background: "var(--surface, #141110)",
                      border: "1px solid var(--border, #332d26)",
                      borderRadius: 10 * scale,
                      padding: `${14 * scale}px ${16 * scale}px ${12 * scale}px`,
                      marginTop: 10 * scale,
                      position: "relative",
                      boxShadow: "0 12px 30px -10px rgba(0,0,0,0.5)",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <div style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 11 * scale, letterSpacing: "0.02em", color: "var(--ink)" }}>THE COOKD PRESS</div>
                        <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: 600, fontSize: 7 * scale, letterSpacing: "0.2em", color: "var(--muted, #8d8377)" }}>EXCLUSIVE</div>
                      </div>
                      <div style={{ marginTop: 4 * scale, borderTop: "1.5px solid var(--ink)", }} />
                      <div style={{ marginTop: 8 * scale, fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: 600, fontSize: 7 * scale, letterSpacing: "0.2em", color: "var(--muted, #8d8377)" }}>EDITOR&apos;S COLUMN · @CHIEF</div>
                      <div style={{ marginTop: 3 * scale, fontFamily: "var(--font-anton), sans-serif", fontSize: 15 * scale, lineHeight: 0.96, textTransform: "uppercase", color: "var(--ink)" }}>38 Million Tokens<br />And No Off Switch</div>
                      <div style={{ marginTop: 6 * scale, fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 340, fontSize: 9 * scale, lineHeight: 1.5, color: "var(--muted, #8d8377)" }}>&quot;That&apos;s not engineering, chef. That&apos;s a slot machine with a corporate card. You weren&apos;t building, you were yelling &apos;accept all&apos; until it stopped paying. You&apos;ll refresh the usage page like it resets out of pity. It won&apos;t.&quot;</div>
                      <div style={{ marginTop: 8 * scale, borderTop: "1px dashed var(--border, #332d26)" }} />
                      <div style={{ marginTop: 6 * scale, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <div>
                          <div style={{
                            height: 14 * scale,
                            width: 70 * scale,
                            background: "repeating-linear-gradient(90deg, var(--ink) 0 1.5px, transparent 1.5px 4px, var(--ink) 4px 7px, transparent 7px 9px)",
                          }} />
                          <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 5.5 * scale, letterSpacing: "0.14em", color: "var(--faint, #5d564c)", marginTop: 2 * scale }}>38,400,000 · 3H12M · 100%</div>
                        </div>
                        <div style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontSize: 8 * scale, color: "var(--ink)" }}>the editor</div>
                      </div>
                      {/* EXCLUSIVE stamp */}
                      <div style={{
                        position: "absolute",
                        top: 24 * scale,
                        right: -4 * scale,
                        transform: "rotate(-9deg)",
                        fontFamily: "var(--font-anton), sans-serif",
                        fontSize: 9 * scale,
                        letterSpacing: "0.04em",
                        color: "var(--yellow, #FFC400)",
                        border: `2px solid var(--yellow, #FFC400)`,
                        borderRadius: 4 * scale,
                        padding: `${2 * scale}px ${6 * scale}px`,
                        background: "var(--surface, #141110)",
                      }}>EXCLUSIVE</div>
                    </div>
                    {/* share buttons */}
                    <div style={{ display: "flex", gap: 8 * scale, marginTop: 10 * scale }}>
                      <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-anton), sans-serif", fontSize: 13 * scale, letterSpacing: "0.03em", padding: `${10 * scale}px 0`, borderRadius: 8 * scale, border: "1.5px solid var(--border, #332d26)", color: "var(--ink)" }}>POST IT</div>
                      <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-anton), sans-serif", fontSize: 13 * scale, letterSpacing: "0.03em", padding: `${10 * scale}px 0`, borderRadius: 8 * scale, border: "1.5px solid var(--border, #332d26)", color: "var(--orange)" }}>r/CLAUDEAI</div>
                    </div>
                    <div style={{ display: "flex", gap: 8 * scale, marginTop: 7 * scale }}>
                      <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-anton), sans-serif", fontSize: 11 * scale, padding: `${10 * scale}px 0`, borderRadius: 8 * scale, border: "1.5px solid var(--border, #332d26)", color: "var(--muted, #8d8377)" }}>COPY LINK</div>
                      <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-anton), sans-serif", fontSize: 11 * scale, padding: `${10 * scale}px 0`, borderRadius: 8 * scale, border: "1.5px solid var(--border, #332d26)", color: "var(--muted, #8d8377)" }}>SAVE IMAGE</div>
                    </div>
                  </div>
                </div>

                {/* hand cursor */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: `${CURSOR_TARGETS[active].x}%`,
                    top: `${CURSOR_TARGETS[active].y}%`,
                    transition: "left 0.6s cubic-bezier(0.4, 0, 0.2, 1), top 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease",
                    zIndex: 20,
                    opacity: showCursor && !showSheet ? 1 : 0,
                  }}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 512 512"
                    style={{
                      filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.55))",
                      transform: clicking ? "scale(0.8) translateY(3px)" : "scale(1) translateY(0)",
                      transition: clicking
                        ? "transform 0.1s cubic-bezier(0.4, 0, 1, 1)"
                        : "transform 0.2s cubic-bezier(0, 0, 0.2, 1)",
                      marginLeft: -2,
                      marginTop: 2,
                    }}
                  >
                    <path
                      fill="white"
                      stroke="#1a1512"
                      strokeWidth="12"
                      strokeLinejoin="round"
                      d="M256 48c-17.7 0-32 14.3-32 32v192.5l-52.5-52.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l100.7 100.7C247.8 387 276.2 400 306 400h18c57.4 0 104-46.6 104-104V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32V80c0-17.7-14.3-32-32-32z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
