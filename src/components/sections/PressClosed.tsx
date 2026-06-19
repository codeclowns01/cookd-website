import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";
import AppScreen from "../screens/AppScreen";

export default function PressClosed() {
  return (
    <section
      id="closed"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] bg-bg2 border-t border-b border-border"
    >
      <div className="max-w-[1120px] mx-auto">
        <Reveal as="div" className="text-center mb-[clamp(36px,5vw,64px)]">
          <div className="font-mono font-semibold text-[14px] tracking-[0.26em] text-blue mb-[14px]">
            THE CATCH
          </div>
          <h2 className="m-0 font-anton font-normal leading-[0.92] text-[clamp(36px,5.5vw,68px)] uppercase text-ink">
            No tokens burned<span className="text-orange">?</span> No entry<span className="text-orange">.</span>
          </h2>
        </Reveal>

        <div className="flex gap-7 sm:gap-[clamp(28px,5vw,72px)] items-center flex-wrap">
          <Reveal ty={40} className="mx-auto" style={{ width: "clamp(240px, 26vw, 290px)" }}>
            <PhoneFrame
              outerRadius={42}
              innerRadius={36}
            >
              <AppScreen screen="closed" />
            </PhoneFrame>
          </Reveal>
          <div className="flex-1 basis-[380px] min-w-0">
            <Reveal ty={34} as="div" className="inline-block font-anton text-[clamp(22px,3vw,32px)] tracking-[0.03em] text-blue border-4 border-blue rounded-[10px] px-[18px] py-[6px] mb-[22px]">
              PRESS CLOSED
            </Reveal>
            <Reveal ty={34} as="p" className="m-0 max-w-[500px] text-[clamp(16px,1.4vw,18px)] leading-[1.65] text-muted">
              Cookd only opens when you&apos;ve <span className="text-ink font-semibold">exhausted your Claude tokens</span>. Hit
              100% and the press opens. The editor reads your logs, writes the column, prints the
              shame. But the moment your limit resets?{" "}
              <span className="font-fraunces italic text-ink">You&apos;re out. Door closed. Go burn more tokens.</span>
            </Reveal>
            <Reveal ty={34} as="p" className="m-0 mt-4 max-w-[500px] text-[clamp(15px,1.3vw,17px)] leading-[1.6] text-muted">
              No casual browsing. No lurking. You earn your way in by shipping too hard and sleeping too little.
              The <span className="text-yellow font-semibold">COOKED</span> stamp is a badge of honor - and an entry ticket.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
