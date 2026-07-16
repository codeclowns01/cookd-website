/** In-voice 400/404 front page: "NO SUCH FILE ON RECORD". */
export default function NoFile() {
  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 pt-[clamp(40px,8vw,80px)] text-center">
      <div className="inline-block -rotate-[7deg] border-[3px] border-orange rounded-[8px] px-[16px] py-[8px] mb-[clamp(24px,5vw,44px)]">
        <span className="font-anton uppercase text-[clamp(16px,3vw,22px)] tracking-[0.04em] text-orange">
          Case Closed
        </span>
      </div>
      <h2 className="m-0 font-anton uppercase leading-[0.88] text-[clamp(46px,12vw,110px)] text-ink">
        No Such File
        <br />
        On Record
      </h2>
      <p className="mx-auto mt-[22px] max-w-[520px] font-fraunces italic text-[17px] sm:text-[19px] leading-[1.55] text-muted">
        We looked. There is nobody here by that name — or the ID is smudged
        beyond reading.{" "}
        <span className="text-ink not-italic font-mono text-[12px] tracking-[0.14em]">
          THE EDITOR SUSPECTS A COVER-UP.
        </span>
      </p>
    </main>
  );
}
