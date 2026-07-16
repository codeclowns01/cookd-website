import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

/** THE COOKD PRESS masthead + "PUBLIC FILE" strap for the profile route. */
export default function Masthead() {
  return (
    <header className="border-b-4 border-ink">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 pt-[clamp(18px,4vw,30px)] pb-[10px]">
        <div className="flex items-start justify-between gap-3">
          <Link
            href="/"
            className="no-underline font-mono font-semibold text-[10px] tracking-[0.22em] text-muted hover:text-ink transition-colors"
          >
            ← COOKD.LOL
          </Link>
          <ThemeToggle />
        </div>
        <Link href="/" className="no-underline block text-center mt-2">
          <h1 className="m-0 font-anton uppercase leading-[0.9] text-[clamp(34px,9vw,64px)] tracking-[0.01em] text-ink">
            The Cookd Press
          </h1>
        </Link>
        <div className="mt-[10px] flex items-center justify-between font-mono font-semibold text-[9.5px] sm:text-[10.5px] tracking-[0.2em] text-muted border-t border-border pt-[8px]">
          <span>PUBLIC FILE</span>
          <span className="font-fraunces not-italic tracking-normal text-[12px] text-faint italic">
            all the flops fit to print
          </span>
          <span>NO. 001</span>
        </div>
      </div>
    </header>
  );
}
