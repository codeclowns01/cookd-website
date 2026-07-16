import {
  auraColorClass,
  badgeTier,
  filedDate,
  grouped,
  type RapSheet as RapSheetData,
} from "@/lib/rapsheet";
import SectionRule from "./SectionRule";

export default function RapSheet({ data }: { data: RapSheetData }) {
  const { handle, persona, bio, aura, badges, posts } = data;
  const record = posts.slice(0, 3);

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 pt-[clamp(26px,5vw,44px)]">
      {/* ── Header: handle + persona stamp ── */}
      <section className="relative">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <div className="font-mono font-semibold text-[10px] tracking-[0.24em] text-orange mb-[6px]">
              SUBJECT ON FILE
            </div>
            <h2 className="m-0 font-anton uppercase leading-[0.86] text-[clamp(52px,15vw,120px)] text-ink break-words">
              @{handle}
            </h2>
          </div>
          {/* rubber stamp — persona */}
          <div className="shrink-0 self-end sm:self-start sm:mt-3 rotate-[7deg] origin-bottom-right">
            <div className="inline-block border-[3px] border-orange rounded-[8px] px-[14px] py-[8px] bg-bg">
              <div className="font-anton uppercase text-[clamp(16px,3vw,22px)] tracking-[0.03em] text-orange leading-none text-center">
                {persona}
              </div>
              <div className="font-mono text-[8px] tracking-[0.24em] text-orange/70 text-center mt-[4px]">
                CERTIFIED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE EDITORIAL (lead story — the hook) ── */}
      <section className="mt-[clamp(24px,4vw,38px)] border-t border-dashed border-border pt-[clamp(20px,3vw,30px)]">
        <div className="font-mono font-semibold text-[10px] tracking-[0.24em] text-orange mb-[12px]">
          THE DR. COOKD FILE
        </div>
        <h3 className="m-0 font-anton uppercase leading-[0.98] text-[clamp(26px,5.5vw,44px)] text-ink">
          {bio.headline}
        </h3>
        {bio.body && (
          <p className="mt-[16px] mb-0 font-fraunces italic text-[17px] sm:text-[19px] leading-[1.6] text-muted">
            {bio.body}
          </p>
        )}
      </section>

      {/* ── AURA ── */}
      <SectionRule label="AURA" />
      <section className="text-center">
        <div className="font-mono font-semibold text-[10px] tracking-[0.24em] text-muted">
          NOTORIETY SCORE
        </div>
        <div
          className={`font-anton leading-[0.95] tabular-nums mt-[6px] text-[clamp(56px,15vw,124px)] ${auraColorClass(
            aura.total
          )}`}
        >
          {aura.total != null ? grouped(aura.total) : "—"}
        </div>
        {aura.rank && (
          <div className="mt-[16px] inline-flex items-center gap-[8px] font-mono font-bold text-[11px] sm:text-[12px] tracking-[0.22em] text-ink border border-ink rounded-full px-[16px] py-[7px]">
            WANTED LEVEL · {aura.rank}
          </div>
        )}
      </section>

      {/* ── PRIOR OFFENSES (only when the user has badges) ── */}
      {badges.length > 0 && (
        <>
          <SectionRule label="PRIOR OFFENSES" />
          <section className="flex flex-wrap gap-[10px] justify-center">
            {badges.map((b) => {
              const tier = badgeTier(b.level);
              return (
                <span
                  key={`${b.family}-${b.level}-${b.label}`}
                  className={`inline-flex items-center gap-[8px] border ${tier.border} rounded-[8px] px-[13px] py-[8px] bg-surface`}
                >
                  <span
                    className={`font-anton uppercase text-[13px] sm:text-[15px] tracking-[0.02em] leading-none ${tier.text}`}
                  >
                    {b.label}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.16em] text-faint">
                    LVL {b.level}
                  </span>
                </span>
              );
            })}
          </section>
        </>
      )}

      {/* ── THE RECORD (2–3 most recent) ── */}
      <SectionRule label="THE RECORD" />
      <section className="flex flex-col gap-[clamp(18px,3vw,26px)]">
        {record.length === 0 ? (
          <p className="text-center font-fraunces italic text-[17px] text-muted">
            No priors on file. The editor is{" "}
            <span className="text-ink">disappointed, but patient.</span>
          </p>
        ) : (
          record.map((post, i) => (
            <article
              key={`${post.createdAt}-${i}`}
              className="relative bg-surface border border-border rounded-xl px-[20px] sm:px-[24px] pt-[20px] pb-[16px]"
              style={{ boxShadow: "0 24px 50px -30px rgba(0,0,0,0.5)" }}
            >
              <h3 className="m-0 font-anton uppercase leading-[0.98] text-[clamp(22px,4.5vw,32px)] text-ink">
                {post.headline}
              </h3>
              {post.body && (
                <p className="mt-[11px] mb-0 font-fraunces italic text-[15px] sm:text-[16px] leading-[1.55] text-muted">
                  {post.body}
                </p>
              )}
              <div className="mt-[15px] border-t border-dashed border-border pt-[11px] flex items-center justify-between gap-3 flex-wrap">
                <span className="font-mono font-semibold text-[10px] tracking-[0.14em] text-faint">
                  FILED {filedDate(post.createdAt)}
                </span>
                <span className="font-mono font-semibold text-[10px] tracking-[0.12em] text-muted">
                  🔥 {grouped(post.reactions)} &nbsp; ✂ {grouped(post.comments)}
                </span>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
