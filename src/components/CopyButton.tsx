"use client";

import { useState } from "react";

export default function CopyButton({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer bg-transparent border border-border rounded-[7px] text-muted font-mono font-semibold text-[10.5px] tracking-[0.16em] px-[9px] py-[6px] ${className}`}
    >
      {copied ? "COPIED ✓" : "COPY"}
    </button>
  );
}
