"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Marquee from "./Marquee";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const navRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      setScrolled((window.scrollY || window.pageYOffset || 0) > 30);
      raf = null;
    };
    const handler = () => {
      if (raf == null) raf = requestAnimationFrame(onScroll);
    };
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 z-[100]">
      <Marquee />
      <nav
        ref={navRef}
        className="relative flex items-center justify-between gap-[18px] px-4 sm:px-[clamp(16px,4vw,44px)] py-[13px] border-b border-transparent backdrop-blur-[16px] backdrop-saturate-[1.2] transition-colors duration-300"
        style={{
          background: scrolled ? "color-mix(in srgb, var(--bg) 72%, transparent)" : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
        }}
      >
        <Link
          href="/"
          className="no-underline font-anton text-[26px] tracking-[0.01em] text-ink"
        >
          cookd<span className="text-orange">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-[26px] font-mono font-semibold text-[11.5px] tracking-[0.18em] absolute left-1/2 -translate-x-1/2">
          <Link href="/#get-started" className="no-underline text-muted hover:text-ink transition-colors">GET IT</Link>
          <Link href="/#cook" className="no-underline text-muted hover:text-ink transition-colors">SEE IT COOK</Link>
          <Link href="/#closed" className="no-underline text-muted hover:text-ink transition-colors">PRESS CLOSED</Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/downloads/cookd-application.apk"
            download
            className="no-underline bg-orange text-[#160a04] font-mono font-bold text-[11.5px] tracking-[0.16em] px-4 py-[10px] rounded-full"
            style={{ boxShadow: "0 0 0 1px rgba(255,77,0,0.4), 0 8px 24px -8px rgba(255,77,0,0.6)" }}
          >
            GET COOKED →
          </a>
        </div>
      </nav>
    </header>
  );
}
