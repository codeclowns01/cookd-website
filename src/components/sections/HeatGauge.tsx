"use client";

import { useEffect, useRef, useState } from "react";

const LEN = 440;
const TARGET = 0;

export default function HeatGauge() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(LEN);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time SSR-safe sync of client-only media query
      setOffset(TARGET);
      return;
    }
    let done = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !done) {
            done = true;
            observer.disconnect();
            const dur = 1600;
            let t0: number | null = null;
            const tick = (t: number) => {
              if (t0 === null) t0 = t;
              const p = Math.min(1, (t - t0) / dur);
              const e = 1 - Math.pow(1 - p, 3);
              setOffset(LEN + (TARGET - LEN) * e);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.82 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full" style={{ maxWidth: 440 }}>
      <svg viewBox="0 0 340 210" className="w-full block overflow-visible">
        <defs>
          <linearGradient id="heatGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFC400" />
            <stop offset="0.55" stopColor="#FF7A00" />
            <stop offset="1" stopColor="#FF4D00" />
          </linearGradient>
        </defs>
        <path d="M30,168 A140,140 0 0 1 310,168" fill="none" stroke="var(--border)" strokeWidth="22" strokeLinecap="round" />
        <path
          d="M30,168 A140,140 0 0 1 310,168"
          fill="none"
          stroke="url(#heatGrad)"
          strokeWidth="22"
          strokeLinecap="round"
          style={{
            strokeDasharray: LEN,
            strokeDashoffset: offset,
            filter: "drop-shadow(0 0 14px rgba(255,77,0,0.55))",
          }}
        />
      </svg>
      <div className="absolute left-0 right-0 top-[54%] text-center">
        <div className="font-anton text-[clamp(54px,8vw,82px)] leading-none text-ink">
          100<span className="text-orange">%</span>
        </div>
        <div className="font-mono font-semibold text-[11px] tracking-[0.22em] text-muted mt-[2px]">HEAT INDEX</div>
      </div>
      <div className="absolute top-2 right-[2px] rotate-[-9deg] font-anton text-[24px] tracking-[0.04em] text-yellow border-4 border-yellow rounded-[9px] px-[14px] py-[5px] backdrop-blur-[4px]" style={{ background: "color-mix(in srgb, var(--bg2) 60%, transparent)" }}>
        COOKED
      </div>
    </div>
  );
}
