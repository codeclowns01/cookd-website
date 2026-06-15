"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className="cursor-pointer flex items-center gap-2 bg-transparent border border-border rounded-full pl-[10px] pr-[12px] py-[7px] text-ink font-mono font-semibold text-[11px] tracking-[0.16em]"
    >
      <span
        className="w-[13px] h-[13px] rounded-full bg-ink inline-block"
        style={{
          boxShadow: theme === "light" ? "none" : "inset -4px -2px 0 0 var(--bg)",
        }}
      />
      <span>{theme.toUpperCase()}</span>
    </button>
  );
}
