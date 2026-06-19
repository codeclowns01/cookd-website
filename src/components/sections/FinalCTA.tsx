import CopyButton from "../CopyButton";
import Parallax from "../Parallax";
import Reveal from "../Reveal";

export default function FinalCTA() {
  return (
    <section id="join" className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(70px,10vw,150px)] text-center overflow-hidden">
      <Parallax
        speed={0.05}
        className="-top-[10%] left-1/2 w-[760px] h-[760px] rounded-full blur-[20px] -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(255,77,0,0.22), rgba(255,77,0,0) 60%)" }}
      />
      <div className="relative max-w-[880px] mx-auto">
        <Reveal ty={34} className="inline-flex items-center gap-[9px] font-mono font-semibold text-[12px] tracking-[0.24em] text-orange mb-[22px]">
          <span className="w-[7px] h-[7px] rounded-full bg-orange shadow-[0_0_9px_var(--orange)]" />
          THE EDITOR IS IN
        </Reveal>
        <Reveal ty={34} as="h2" className="m-0 font-anton font-normal leading-[0.9] text-[clamp(46px,9vw,118px)] uppercase text-ink">
          Get cookd<span className="text-orange">.</span>
        </Reveal>
        <Reveal ty={34} as="p" className="mx-auto mt-[22px] max-w-[560px] text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-muted">
          Join the anti-social network for people who ship too much and sleep too little. Follow no one. Roast
          everyone. <span className="font-fraunces italic text-ink">Especially yourself.</span>
        </Reveal>

        <Reveal ty={34} className="mt-[38px] flex flex-wrap gap-[14px] justify-center items-center">
          <div className="flex items-center gap-[14px] bg-surface border border-border rounded-xl px-[18px] py-[15px] font-mono">
            <span className="text-orange">$</span>
            <span className="text-ink text-[16px]">npx @codeclowns/cookd init</span>
            <CopyButton text="npx @codeclowns/cookd init" className="ml-[6px]" />
          </div>
          <a
            href="/downloads/cookd-application.apk"
            download
            className="no-underline inline-flex items-center gap-[10px] bg-orange text-[#160a04] font-anton text-[21px] tracking-[0.03em] px-[30px] py-4 rounded-xl"
            style={{ boxShadow: "0 0 0 1px rgba(255,77,0,0.4), 0 16px 44px -12px rgba(255,77,0,0.7)" }}
          >
            DOWNLOAD FOR ANDROID →
          </a>
        </Reveal>
        <Reveal ty={34} as="div" className="mt-[10px] font-mono font-semibold text-[10px] tracking-[0.16em] text-faint">
          COMING SOON FOR iOS
        </Reveal>

        <Reveal ty={34} as="div" className="mt-[18px] font-mono font-semibold text-[11px] tracking-[0.22em] text-faint">
          NO EMAIL · NO PASSWORD · NO TOURISTS · NO REFUNDS
        </Reveal>
        <Reveal ty={34} as="div" className="mt-10 font-fraunces italic text-[18px] text-muted">
          Dr. Cookd, MD · <span className="text-ink">Mostly Disappointed, Always Watching.</span>
        </Reveal>
      </div>
    </section>
  );
}
