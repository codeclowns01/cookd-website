import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import type { LegalDoc } from "@/lib/legal";

/**
 * LegalPage — the shared renderer for cookd's policy documents.
 *
 * Deliberately reproduces the visual grammar of /privacy ("the affidavit"),
 * which was hand-built first and is richer than this renderer: Anton masthead
 * with a Fraunces kicker, the double rule, mono section kickers in orange, the
 * surface callout box. These pages should look like they came from the same
 * newspaper, not from a template someone bolted on afterwards.
 *
 * /privacy keeps its bespoke page. It has tables and per-field breakdowns this
 * renderer does not support, and rewriting a working page to fit a component is
 * the wrong trade.
 */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <SiteHeader />
      <main className="px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] max-w-[860px] mx-auto">
        {/* masthead — mirrors /privacy */}
        <div className="flex items-baseline justify-between flex-wrap gap-[10px]">
          <div className="flex items-baseline gap-4">
            <h1 className="font-anton font-normal text-[clamp(30px,4vw,46px)] text-ink m-0">{doc.title}</h1>
            <span className="font-fraunces italic text-[17px] text-muted">{doc.subtitle}</span>
          </div>
          <span className="font-mono font-semibold text-[11px] tracking-[0.16em] text-muted">
            LAST UPDATED: {doc.lastUpdated.toUpperCase()}
          </span>
        </div>
        <div className="mt-[14px] border-t-4 border-ink" />
        <div className="mt-[3px] border-t border-border mb-10" />

        {doc.blocks.map((b, i) => {
          switch (b.kind) {
            case "h2":
              return (
                <h2
                  key={i}
                  className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]"
                >
                  {b.text}
                </h2>
              );
            case "h3":
              return (
                <h3 key={i} className="mt-7 mb-2 font-mono font-bold text-[12px] tracking-[0.18em] text-orange">
                  {b.text}
                </h3>
              );
            case "ul":
              return (
                <ul key={i} className="mt-3 mb-0 pl-5 list-disc text-[15px] leading-[1.7] text-muted space-y-[6px]">
                  {b.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            case "callout":
              return (
                <div key={i} className="mt-8 bg-surface border border-border rounded-xl px-6 py-5">
                  <div className="font-mono font-semibold text-[11px] tracking-[0.24em] text-orange mb-3">
                    {b.title}
                  </div>
                  <ul className="m-0 pl-5 list-disc text-[14.5px] leading-[1.7] text-muted space-y-[6px]">
                    {b.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                </div>
              );
            default:
              return (
                <p key={i} className="mt-4 text-[15px] leading-[1.7] text-muted">
                  {b.text}
                </p>
              );
          }
        })}

        {/* Cross-links. Play reviewers follow these, and so do users who landed
            on the wrong one of the four. */}
        <div className="mt-14 pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-2">
          {[
            { href: "/guidelines", label: "COMMUNITY GUIDELINES" },
            { href: "/terms", label: "TERMS OF USE" },
            { href: "/privacy", label: "PRIVACY POLICY" },
            { href: "/child-safety", label: "CHILD SAFETY" },
          ]
            .filter((l) => l.href !== `/${doc.slug}`)
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="no-underline font-mono font-semibold text-[10.5px] tracking-[0.14em] text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
