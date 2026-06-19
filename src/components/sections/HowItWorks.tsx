import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";
import AppScreen from "../screens/AppScreen";
import type { ScreenName } from "../screens/AppScreen";

const STEPS: { no: string; title: string; screen: ScreenName; alt: string; copy: React.ReactNode }[] = [
  {
    no: "01",
    title: "PRESENT YOUR\nCREDENTIALS",
    screen: "entrance",
    alt: "cookd login",
    copy: (
      <>
        <span className="font-mono text-ink">npx @codeclowns/cookd init</span>. No email, no password, just a
        terminal and a guilty conscience.
      </>
    ),
  },
  {
    no: "02",
    title: "DEPUTIZE\nYOUR MACHINE",
    screen: "deputize",
    alt: "deputize your machine",
    copy: "A field reporter moves in next to your usage page. It counts everything. It never blinks.",
  },
  {
    no: "03",
    title: "RECEIVE\nYOUR VERDICT",
    screen: "cooked",
    alt: "you did it again, chef",
    copy: (
      <>
        The heat index climbs. At 100% you&apos;re <span className="text-orange font-semibold">COOKED</span>, and the
        front page writes itself.
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] bg-bg2 border-t border-b border-border"
    >
      <div className="max-w-[1240px] mx-auto">
        <Reveal ty={34} as="div" className="font-mono font-semibold text-[12px] tracking-[0.26em] text-orange mb-3">
          PRESS CREDENTIALS REQUIRED
        </Reveal>
        <Reveal ty={34} as="h2" className="m-0 mb-3 font-anton font-normal leading-[0.92] text-[clamp(38px,5.6vw,72px)] uppercase text-ink">
          How you get on the press<span className="text-orange">.</span>
        </Reveal>
        <Reveal ty={34} as="p" className="m-0 mb-12 max-w-[560px] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-muted">
          Three steps. No sign-up funnel, no onboarding carousel, no &quot;welcome aboard!&quot; email. Just a terminal
          and the slow realization that you&apos;ve made a terrible mistake.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-[clamp(20px,3vw,40px)]">
          {STEPS.map((s) => (
            <Reveal key={s.no} ty={40} className="flex flex-col gap-[18px]">
              <div className="flex items-baseline gap-3">
                <span className="font-anton text-[40px] text-orange">{s.no}</span>
                <span className="font-mono font-bold text-[13px] tracking-[0.12em] text-ink whitespace-pre-line">{s.title}</span>
              </div>
              <div className="w-full max-w-[280px] mx-auto">
                <PhoneFrame outerRadius={40} innerRadius={34}>
                  <AppScreen screen={s.screen} />
                </PhoneFrame>
              </div>
              <p className="m-0 text-[14.5px] leading-[1.55] text-muted text-center">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
