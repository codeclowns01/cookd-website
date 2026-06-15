const ITEMS = [
  "THE ONLY PAPER THAT PRINTS YOUR FAILURES",
  "100% WINDOW USAGE, AGAIN",
  "38,400,000 TOKENS TORCHED TONIGHT",
  "DIGNITY: NOT FOUND",
  "GRASS: UNTOUCHED",
  "0 FRIENDS · 0 REFUNDS",
  "THE EDITOR IS IN",
  'SOURCES SAY "ONE MORE FIX"',
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden bg-orange border-b border-black/25">
      <div
        className="inline-flex whitespace-nowrap py-2 animate-[ck-marquee_34s_linear_infinite] will-change-transform"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="px-[22px] font-mono font-bold text-[12px] tracking-[0.16em] text-[#1A1008]"
          >
            ★ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
