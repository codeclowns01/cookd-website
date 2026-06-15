"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** translateY distance in px before reveal */
  ty?: number;
  /** rotation to settle into, e.g. "-1.4deg" */
  rot?: string;
  /** transition-delay in seconds */
  delay?: number;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
  ty = 38,
  rot,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time SSR-safe sync of client-only media query
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      data-rv
      className={`${className} ${shown ? "rv-shown" : ""}`}
      style={{
        ...style,
        "--rv-ty": `${ty}px`,
        "--rv-rot": rot ?? "0deg",
        transitionDelay: `${delay}s`,
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
