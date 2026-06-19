import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";
import AppScreen from "../screens/AppScreen";

export default function FrontPage() {
  return (
    <section
      id="paper"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] max-w-[1280px] mx-auto"
    >
      {/* masthead */}
      <Reveal ty={30} className="flex items-baseline justify-between flex-wrap gap-[10px]">
        <div className="flex items-baseline gap-4">
          <span className="font-anton text-[clamp(30px,4vw,46px)] text-ink">the cookd press</span>
          <span className="font-fraunces italic text-[17px] text-muted">· all the flops fit to print</span>
        </div>
        <span className="font-mono font-semibold text-[11px] tracking-[0.16em] text-muted">VOL. 001 · PRICE: YOUR DIGNITY</span>
      </Reveal>
      <Reveal ty={20} as="div" className="mt-[14px] border-t-4 border-ink">{null}</Reveal>
      <Reveal ty={20} as="div" className="mt-[3px] border-t border-border mb-10">{null}</Reveal>

      <div className="flex gap-6 sm:gap-[clamp(24px,4vw,52px)] flex-wrap items-start">
        {/* left: front page stories */}
        <div className="flex-1 basis-[440px] min-w-[300px] flex flex-col gap-[22px]">
          <Reveal ty={30} as="div" className="font-mono font-semibold text-[11px] tracking-[0.24em] text-muted">
            ★ COOKING RIGHT NOW
          </Reveal>
          <Reveal ty={30} className="flex gap-[10px] flex-wrap">
            <div className="flex items-center gap-[9px] border border-orange rounded-[10px] px-3 py-2">
              <span className="w-[26px] h-[26px] rounded-[7px] bg-[#E2674A] text-white flex items-center justify-center font-anton text-[13px]">R</span>
              <div>
                <div className="font-mono font-bold text-[11px] text-ink">@ria_ships</div>
                <div className="font-mono text-[8.5px] tracking-[0.1em] text-orange">100% COOKED</div>
              </div>
            </div>
            <div className="flex items-center gap-[9px] border border-border rounded-[10px] px-3 py-2">
              <span className="w-[26px] h-[26px] rounded-[7px] bg-[#2FA98A] text-white flex items-center justify-center font-anton text-[13px]">D</span>
              <div>
                <div className="font-mono font-bold text-[11px] text-ink">@dev_anand</div>
                <div className="font-mono text-[8.5px] tracking-[0.1em] text-muted">64%</div>
              </div>
            </div>
            <div className="flex items-center gap-[9px] border border-border rounded-[10px] px-3 py-2">
              <span className="w-[26px] h-[26px] rounded-[7px] bg-[#5B8FD1] text-white flex items-center justify-center font-anton text-[13px]">A</span>
              <div>
                <div className="font-mono font-bold text-[11px] text-ink">@arjun_idle</div>
                <div className="font-mono text-[8.5px] tracking-[0.1em] text-blue">11% · COUCH</div>
              </div>
            </div>
          </Reveal>

          {/* story 1 */}
          <Reveal ty={40} className="relative bg-surface border border-border rounded-xl px-[22px] pt-[22px] pb-[18px]" style={{ boxShadow: "0 24px 50px -30px rgba(0,0,0,0.5)" }}>
            <div className="flex items-center gap-[10px]">
              <span className="w-[30px] h-[30px] rounded-[8px] bg-[#E2674A] text-white flex items-center justify-center font-anton text-[15px]">R</span>
              <div>
                <div className="font-mono font-bold text-[12px] text-ink">@ria_ships</div>
                <div className="font-mono text-[9px] tracking-[0.08em] text-muted">arsonist · night owl · via claude</div>
              </div>
            </div>
            <div className="mt-[14px] font-anton text-[clamp(22px,2.6vw,30px)] leading-[0.98] uppercase text-ink">
              Local Founder Speedruns<br />Her Own Funeral
            </div>
            <p className="mt-[11px] font-fraunces italic text-[14px] leading-[1.5] text-muted">
              Burned a seed round of tokens before standup, sources confirm.
            </p>
            <p className="mt-[9px] text-[14px] leading-[1.55] text-muted">
              21M tokens in 58 minutes. You didn&apos;t code, you rage-prompted. Sonnet did the work; you&apos;ll do the
              LinkedIn post.
            </p>
            <div className="mt-4 border-t border-dashed border-border pt-3 flex justify-between items-center">
              <div
                className="h-[22px] w-[120px]"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 5px, var(--ink) 5px 8px, transparent 8px 10px)",
                }}
              />
              <div className="font-mono font-semibold text-[11px] text-muted">🔥 47 &nbsp; ✂ 12 &nbsp; ↗ 31</div>
            </div>
            <div className="absolute top-[18px] -right-[10px] rotate-[-8deg] font-anton text-[14px] tracking-[0.04em] text-orange border-[3px] border-orange rounded-[6px] px-[9px] py-[3px] bg-surface">
              CERTIFIED FLOP
            </div>
          </Reveal>

          {/* story 2 */}
          <Reveal ty={40} className="relative bg-surface border border-border rounded-xl px-[22px] py-[18px]" style={{ boxShadow: "0 24px 50px -30px rgba(0,0,0,0.5)" }}>
            <div className="flex items-center gap-[10px] justify-between">
              <div className="flex items-center gap-[10px]">
                <span className="w-[30px] h-[30px] rounded-[8px] bg-[#5B8FD1] text-white flex items-center justify-center font-anton text-[15px]">A</span>
                <div>
                  <div className="font-mono font-bold text-[12px] text-ink">@arjun_idle</div>
                  <div className="font-mono text-[9px] tracking-[0.08em] text-muted">haiku sipper · via gemini</div>
                </div>
              </div>
              <span className="font-mono font-bold text-[9px] tracking-[0.1em] text-blue border border-blue rounded-[5px] px-2 py-1">FLEX</span>
            </div>
            <div className="mt-[13px] font-anton text-[clamp(20px,2.4vw,26px)] leading-none uppercase text-ink">
              &quot;11% And At Peace,&quot; Claims<br />Man Shipping Nothing
            </div>
            <div className="mt-[13px] font-mono font-semibold text-[10px] tracking-[0.08em] text-muted">
              4,200,000 TOKENS · COUCH CERTIFIED &nbsp;&nbsp; 🔥 9 &nbsp; ✂ 3
            </div>
          </Reveal>
        </div>

        {/* right: phone + pile-on */}
        <div className="flex-1 basis-[300px] min-w-[280px] flex flex-col gap-6">
          <Reveal ty={40} className="mx-auto" style={{ maxWidth: 300 }}>
            <PhoneFrame
              outerRadius={42}
              innerRadius={36}
              width={300}
            >
              <AppScreen screen="rapRia" />
            </PhoneFrame>
          </Reveal>
          <Reveal ty={30} className="bg-surface border border-border rounded-xl p-[18px]">
            <div className="font-mono font-semibold text-[10px] tracking-[0.2em] text-orange mb-[10px]">THE PILE-ON</div>
            <p className="m-0 font-fraunces italic text-[15px] leading-[1.5] text-ink">
              &quot;My CI fails with dignity. I fail with VELOCITY. We are not the same.&quot;
            </p>
            <div className="mt-[10px] font-mono text-[10px] tracking-[0.08em] text-muted">@ria_ships · the accused · ▲ 41</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
