import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";

const DESKS = [
  {
    label: "YOU",
    tag: "TONIGHT",
    dark: "/phones/dark-04-gas.png",
    light: "/phones/light-04-gas.png",
    alt: "you tonight",
    copy: "Your nightly autopsy: tokens, subagents, peak context, and a full incident report.",
  },
  {
    label: "PAPER",
    tag: "THE FEED",
    dark: "/phones/dark-06-feed.png",
    light: "/phones/light-06-feed.png",
    alt: "the feed",
    copy: "Everyone else's flops, fit to print. The anti-social feed where you follow no one.",
  },
  {
    label: "ROAST",
    tag: "MAIN EVENT",
    dark: "/phones/dark-07-mainevent.png",
    light: "/phones/light-07-mainevent.png",
    alt: "main event",
    copy: "The editor's column, written about you, in three increasingly scathing card skins.",
  },
  {
    label: "RAP",
    tag: "SHEET",
    dark: "/phones/dark-08-rap-kanwar.png",
    light: "/phones/light-08-rap-kanwar.png",
    alt: "rap sheet",
    copy: "Your permanent record. Prior offenses, career stats, times cooked: 23 and counting.",
  },
];

export default function FourDesks() {
  return (
    <section
      id="desks"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] max-w-[1280px] mx-auto"
    >
      <Reveal ty={34} as="div" className="font-mono font-semibold text-[12px] tracking-[0.26em] text-orange mb-3">
        ONE APP · FOUR WAYS TO BE JUDGED
      </Reveal>
      <Reveal ty={34} as="h2" className="m-0 mb-[14px] font-anton font-normal leading-[0.92] text-[clamp(38px,5.6vw,72px)] uppercase text-ink">
        The four desks<span className="text-orange">.</span>
      </Reveal>
      <Reveal ty={34} as="p" className="m-0 mb-[50px] max-w-[560px] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-muted">
        It looks like a newspaper because it is one. Four desks, all of them assigned to the same beat: you.
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[clamp(16px,2vw,26px)]">
        {DESKS.map((d) => (
          <Reveal key={d.label} ty={40} className="flex flex-col gap-4">
            <div className="flex items-baseline gap-[9px]">
              <span className="font-anton text-[24px] text-orange">{d.label}</span>
              <span className="font-mono font-semibold text-[10px] tracking-[0.16em] text-muted">{d.tag}</span>
            </div>
            <PhoneFrame dark={d.dark} light={d.light} alt={d.alt} outerRadius={36} innerRadius={30} />
            <p className="m-0 text-[13.5px] leading-[1.5] text-muted">{d.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
