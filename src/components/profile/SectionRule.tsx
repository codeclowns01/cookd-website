/** Hairline rule with a centered all-caps mono section label. */
export default function SectionRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[14px] my-[clamp(28px,4vw,44px)]">
      <span className="h-px flex-1 bg-border" />
      <span className="font-mono font-semibold text-[10.5px] sm:text-[11px] tracking-[0.28em] text-muted whitespace-nowrap">
        {label}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
