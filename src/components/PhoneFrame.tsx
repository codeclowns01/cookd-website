"use client";

import { useRef, useState, useEffect } from "react";
import ThemedImage from "./ThemedImage";

export default function PhoneFrame({
  dark,
  light,
  alt,
  children,
  width = 322,
  outerRadius = 46,
  innerRadius = 39,
  glow = false,
  className = "",
}: {
  dark?: string;
  light?: string;
  alt?: string;
  children?: React.ReactNode;
  width?: number;
  outerRadius?: number;
  innerRadius?: number;
  glow?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(() => Math.max((width - 14) / 393, 0.1));

  useEffect(() => {
    if (!children || !containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w && w > 0) setScale(w / 393);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [children]);

  return (
    <div
      className={`bg-[#0b0a09] border border-[rgba(242,234,217,0.12)] ${className}`}
      style={{
        borderRadius: outerRadius,
        padding: 7,
        boxShadow: glow
          ? "0 50px 90px -24px rgba(0,0,0,0.75), 0 0 70px -18px rgba(255,77,0,0.35)"
          : "0 36px 70px -26px rgba(0,0,0,0.7)",
        width: "100%",
        maxWidth: width,
      }}
    >
      <div
        ref={children ? containerRef : undefined}
        className="relative overflow-hidden bg-[#060503]"
        style={{
          borderRadius: innerRadius,
          aspectRatio: children ? "393 / 852" : "0.5",
          WebkitMaskImage: "radial-gradient(white, white)",
          isolation: "isolate",
        }}
      >
        {children ? (
          <div
            className="hp"
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
          >
            {children}
          </div>
        ) : (
          <ThemedImage
            dark={dark!}
            light={light!}
            alt={alt!}
            fill
            sizes="(max-width: 768px) 60vw, 322px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        )}
      </div>
    </div>
  );
}
