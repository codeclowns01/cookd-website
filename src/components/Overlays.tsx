"use client";

import { useEffect, useRef } from "react";

export default function Overlays() {
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = spotRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-[60] pointer-events-none opacity-5 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')",
        }}
      />
      <div
        ref={spotRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] z-[1] pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,77,0,0.10), rgba(255,77,0,0) 60%)",
        }}
      />
    </>
  );
}
