import Link from "next/link";

/** Footer wordmark + GET COOKD call-to-action. Present on every state. */
export default function GetCookdCta() {
  return (
    <footer className="border-t-4 border-ink mt-[clamp(40px,6vw,72px)]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-[clamp(32px,5vw,52px)] text-center">
        <p className="m-0 font-fraunces italic text-[15px] sm:text-[17px] text-muted">
          Think this file is thin? Yours would be worse.
        </p>
        <div className="mt-[18px] font-anton uppercase text-[clamp(34px,8vw,60px)] leading-[0.9] text-ink">
          Get cookd<span className="text-orange">.</span>
        </div>
        <div className="mt-[22px] flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="/downloads/cookd-application.apk"
            download
            className="no-underline inline-flex items-center justify-center gap-[10px] bg-orange text-[#160a04] font-anton text-[19px] sm:text-[21px] tracking-[0.03em] px-[26px] py-[14px] rounded-xl"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,77,0,0.4), 0 16px 44px -12px rgba(255,77,0,0.7)",
            }}
          >
            DOWNLOAD FOR ANDROID →
          </a>
          <Link
            href="/"
            className="no-underline inline-flex items-center justify-center border border-border rounded-xl px-[22px] py-[14px] font-mono font-semibold text-[11px] tracking-[0.16em] text-muted hover:text-ink hover:border-ink transition-colors"
          >
            WHAT IS COOKD?
          </Link>
        </div>
        <div className="mt-[18px] font-mono font-semibold text-[10px] tracking-[0.2em] text-faint">
          NO EMAIL · NO PASSWORD · NO MERCY
        </div>
        <div className="mt-[26px] font-anton text-[26px] text-ink">
          cookd<span className="text-orange">.</span>lol
        </div>
      </div>
    </footer>
  );
}
