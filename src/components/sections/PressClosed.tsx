import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";
import AppScreen from "../screens/AppScreen";

export default function PressClosed() {
  return (
    <section
      id="closed"
      className="relative px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] bg-bg2 border-t border-b border-border"
    >
      <div className="max-w-[1120px] mx-auto flex gap-7 sm:gap-[clamp(28px,5vw,72px)] items-center flex-wrap">
        <Reveal ty={40} className="mx-auto" style={{ width: "clamp(240px, 26vw, 290px)" }}>
          <PhoneFrame
            outerRadius={42}
            innerRadius={36}
          >
            <AppScreen screen="closed" />
          </PhoneFrame>
        </Reveal>
        <div className="flex-1 basis-[380px] min-w-[300px]">
          <Reveal ty={34} as="div" className="inline-block font-anton text-[clamp(22px,3vw,32px)] tracking-[0.03em] text-blue border-4 border-blue rounded-[10px] px-[18px] py-[6px] mb-[22px]">
            PRESS CLOSED
          </Reveal>
          <Reveal ty={34} as="h2" className="m-0 mb-4 font-anton font-normal leading-[0.92] text-[clamp(34px,5vw,64px)] uppercase text-ink">
            Even we clock out.<br />You won&apos;t<span className="text-orange">.</span>
          </Reveal>
          <Reveal ty={34} as="p" className="m-0 max-w-[500px] text-[clamp(16px,1.4vw,18px)] leading-[1.65] text-muted">
            When Claude slams the rate-limit window, the press closes too: this door only opens when his does. The
            deadline comes back. So do you. We&apos;ll keep the <span className="text-yellow font-semibold">COOKED</span>{" "}
            stamp warm. <span className="font-fraunces italic text-ink">The shame, however, ships 24/7.</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
