import Masthead from "@/components/profile/Masthead";

function Bar({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-[6px] bg-surface2 animate-pulse ${className}`}
      style={{ animationDuration: "1.4s", ...style }}
    />
  );
}

/** Newsprint skeleton — no spinner. */
export default function Loading() {
  return (
    <div className="min-h-screen bg-bg">
      <Masthead />
      <main className="max-w-[900px] mx-auto px-4 sm:px-6 pt-[clamp(26px,5vw,44px)]">
        <Bar className="h-[14px] w-[120px] mb-[14px]" />
        <Bar className="h-[clamp(52px,15vw,96px)] w-[85%] max-w-[520px] mb-[20px]" />
        <Bar className="h-[14px] w-[70%] max-w-[420px]" />

        <div className="my-[clamp(28px,4vw,44px)] h-px bg-border" />
        <div className="flex flex-col items-center gap-[14px]">
          <Bar className="h-[12px] w-[140px]" />
          <Bar className="h-[clamp(72px,20vw,150px)] w-[60%] max-w-[360px]" />
          <Bar className="h-[30px] w-[200px] rounded-full" />
        </div>

        <div className="my-[clamp(28px,4vw,44px)] h-px bg-border" />
        <div className="flex flex-wrap gap-[10px] justify-center">
          {[120, 90, 140, 100].map((w, i) => (
            <Bar key={i} className="h-[38px]" style={{ width: w }} />
          ))}
        </div>

        <div className="my-[clamp(28px,4vw,44px)] h-px bg-border" />
        <div className="flex flex-col gap-[22px]">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-xl px-[24px] pt-[20px] pb-[16px]"
            >
              <Bar className="h-[26px] w-[80%] mb-[12px]" />
              <Bar className="h-[14px] w-[60%]" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
