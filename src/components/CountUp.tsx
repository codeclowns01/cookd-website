"use client";

import { useEffect, useRef, useState } from "react";

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function compact(v: number) {
  if (v >= 1e6) return `${(v / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
  if (v >= 1e3) return `${(v / 1e3).toFixed(0)}K`;
  return `${v}`;
}

type CountUpProps = {
  value: number;
  compact?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function CountUp({
  value,
  compact: useCompact,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time SSR-safe sync of client-only media query
      setDisplay(value);
      return;
    }
    let done = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !done) {
            done = true;
            observer.disconnect();
            const dur = 1500;
            let t0: number | null = null;
            const tick = (t: number) => {
              if (t0 === null) t0 = t;
              const p = Math.min(1, (t - t0) / dur);
              const e = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(value * e));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.96 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {useCompact ? compact(display) : fmt(display)}
      {suffix}
    </span>
  );
}
