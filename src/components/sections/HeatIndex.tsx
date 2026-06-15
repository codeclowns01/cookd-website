import CountUp from "../CountUp";
import Parallax from "../Parallax";
import Reveal from "../Reveal";
import HeatGauge from "./HeatGauge";

export default function HeatIndex() {
  return (
    <section
      id="heat"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,120px)] bg-bg2 border-t border-b border-border overflow-hidden"
    >
      <Parallax
        speed={0.06}
        className="top-0 left-1/2 w-[680px] h-[680px] rounded-full blur-[20px] -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(255,77,0,0.16), rgba(255,77,0,0) 60%)" }}
      />
      <div className="max-w-[1180px] mx-auto flex gap-7 sm:gap-[clamp(28px,5vw,72px)] items-center flex-wrap relative">
        <div className="flex-1 basis-[420px] min-w-[300px]">
          <Reveal ty={34} as="div" className="font-mono font-semibold text-[12px] tracking-[0.26em] text-orange mb-3">
            THE HEAT INDEX · 5-HOUR WINDOW
          </Reveal>
          <Reveal ty={34} as="h2" className="m-0 mb-4 font-anton font-normal leading-[0.9] text-[clamp(40px,6vw,80px)] uppercase text-ink">
            How cooked<br />are you<span className="text-orange">?</span>
          </Reveal>
          <Reveal ty={34} as="p" className="m-0 mb-[22px] max-w-[520px] text-[clamp(16px,1.4vw,18px)] leading-[1.65] text-muted">
            One number tracks your burn across the rolling window. It climbs all night. At{" "}
            <span className="text-ink font-semibold">100%</span> the press room drops the{" "}
            <span className="text-yellow font-semibold">COOKED</span> stamp, the front page unlocks, and your dignity
            files for unemployment.
          </Reveal>
          <Reveal ty={34} className="inline-flex items-center gap-[10px] font-mono font-bold text-[12px] tracking-[0.12em] text-orange border border-orange rounded-[8px] px-[14px] py-[10px]">
            🔥 HOTTER THAN 40% OF THE PRESS POOL TONIGHT
          </Reveal>

          {/* running tab receipt */}
          <Reveal ty={34} className="mt-[30px] max-w-[380px] bg-[#F2EAD9] text-[#181410] rounded-lg px-[18px] pt-[18px] pb-[14px] font-mono" style={{ boxShadow: "0 30px 60px -28px rgba(0,0,0,0.6)" }}>
            <div className="flex justify-between items-baseline">
              <span className="font-anton text-[18px] tracking-[0.03em]">RUNNING TAB</span>
              <span className="font-bold text-[10px] tracking-[0.18em] text-[#FF4D00]">● LIVE</span>
            </div>
            <div className="my-[11px] border-t-2 border-dashed border-[#B8AB92]" />
            <div className="flex justify-between text-[11.5px] font-semibold py-[5px] border-b border-dotted border-[#D6CAB0]">
              <span>TORCHED SO FAR</span>
              <span className="text-[#FF4D00] font-bold"><CountUp value={4804569} /></span>
            </div>
            <div className="flex justify-between text-[11.5px] font-semibold py-[5px] border-b border-dotted border-[#D6CAB0]">
              <span>BURN RATE</span>
              <span className="font-bold">11.2M / HR</span>
            </div>
            <div className="flex justify-between text-[11.5px] font-semibold py-[5px]">
              <span>EST. COOKED BY</span>
              <span className="font-bold">22:31</span>
            </div>
          </Reveal>
        </div>

        {/* gauge */}
        <div className="flex-1 basis-[360px] min-w-[300px] flex justify-center">
          <Reveal ty={40} className="w-full flex justify-center">
            <HeatGauge />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
