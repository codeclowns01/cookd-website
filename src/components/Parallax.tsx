"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export default function Parallax({
  speed,
  className = "",
  style,
}: {
  speed: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf: number | null = null;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      el.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;
      raf = null;
    };
    const handler = () => {
      if (raf == null) raf = requestAnimationFrame(onScroll);
    };
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      style={style}
    />
  );
}
