import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "cookd.",
  description:
    "How to delete your cookd account and every piece of data attached to it, from inside the app or by request.",
};

const LAST_UPDATED = "17 August 2026";

const DELETED = [
  "Your account and your handle",
  "All usage records: 15-minute buckets, hourly and monthly aggregates, and lifetime stats",
  "Everything you posted: front-page posts, letters and replies, kept roasts, and clippings",
  "Your badges, your notoriety score, and any nemesis pairing you were part of",
  "Every linked device record",
  "Your public rap sheet page, which stops resolving immediately",
];

export default function DeleteAccount() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] max-w-[860px] mx-auto">
        {/* masthead */}
        <div className="flex items-baseline justify-between flex-wrap gap-[10px]">
          <div className="flex items-baseline gap-4">
            <span className="font-anton text-[clamp(30px,4vw,46px)] text-ink">burn my file</span>
            <span className="font-fraunces italic text-[17px] text-muted">· delete your account</span>
          </div>
          <span className="font-mono font-semibold text-[11px] tracking-[0.16em] text-muted">
            LAST UPDATED: {LAST_UPDATED.toUpperCase()}
          </span>
        </div>
        <div className="mt-[14px] border-t-4 border-ink" />
        <div className="mt-[3px] border-t border-border mb-10" />

        {/* intro */}
        <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.7] text-muted">
          This page explains how to delete your <span className="text-ink font-semibold">cookd</span> account and
          everything attached to it. It applies to the cookd Android app
          (<span className="font-mono text-ink">com.codeclowns.cookd</span>) and the cookd companion CLI.
        </p>

        {/* TL;DR box */}
        <div className="mt-8 bg-surface border border-border rounded-xl px-6 py-5">
          <div className="font-mono font-semibold text-[11px] tracking-[0.24em] text-orange mb-3">
            ★ THE SHORT VERSION
          </div>
          <ul className="m-0 pl-5 list-disc text-[14.5px] leading-[1.7] text-muted space-y-[6px]">
            <li>Delete it yourself from inside the app, in about ten seconds.</li>
            <li>It is a real delete. Not a deactivation, not a soft delete, nothing held in reserve.</li>
            <li>If you can&apos;t get into the app, email us and we&apos;ll do it for you.</li>
          </ul>
        </div>

        {/* Section 1 */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          1. Delete it yourself
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted mb-3">
          This is the fastest route and it needs nothing from us:
        </p>
        <ol className="m-0 pl-5 list-decimal text-[14.5px] leading-[1.7] text-muted space-y-[6px]">
          <li>Open the cookd app and go to your <span className="font-mono text-ink">RAP SHEET</span>.</li>
          <li>
            Scroll to <span className="font-mono text-ink">burn my file</span>, marked{" "}
            <span className="font-mono text-ink">DELETE ACCOUNT — EVERYTHING, FOREVER</span>.
          </li>
          <li>Confirm twice. We ask you twice on purpose, because it cannot be undone.</li>
        </ol>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted">
          Your account and all of the data listed in Section 3 are deleted at that point. You do not need to contact
          us, and you do not need to reinstall anything.
        </p>

        {/* Section 2 */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          2. Or ask us to do it
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          If you have lost access to the app or the device it was linked to, email{" "}
          <a href="mailto:info@codeclowns.com" className="text-orange underline">info@codeclowns.com</a> with the
          subject line <span className="font-mono text-ink">burn my file</span> and tell us your handle.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted">
          One wrinkle worth explaining: we never asked you for an email address, so we hold no email on file to match
          your request against. That means we will ask you to prove the account is yours, normally by running a
          command in the companion CLI on the machine that is linked to it. We are not being obstructive; without that
          step anyone could delete anyone&apos;s file. We action verified requests within 30 days, and usually far
          sooner.
        </p>

        {/* Section 3 */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          3. What gets deleted
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted mb-3">All of it:</p>
        <ul className="m-0 pl-5 list-disc text-[14.5px] leading-[1.7] text-muted space-y-[6px]">
          {DELETED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Section 4 */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          4. What we keep
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          Nothing that identifies you. The site-wide figures on cookd.lol — total tokens torched, the size of the
          press pool — are aggregate counts that never contained per-user detail and cannot be traced back to you.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted">
          Your records are removed from our live systems when the deletion runs. Encrypted backups are rotated on a
          rolling schedule and any residual copy is overwritten within 30 days. We do not restore deleted accounts
          from backups.
        </p>

        {/* Section 5 */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          5. Uninstalling is not deleting
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          Uninstalling the app, or removing the companion
          (<span className="font-mono">npm uninstall -g @codeclowns/cookd</span> and deleting{" "}
          <span className="font-mono">~/.cookd/</span>), stops all further collection from your machine immediately.
          It does not, on its own, delete what is already on our servers. Use{" "}
          <span className="font-mono text-ink">burn my file</span> for that.
        </p>

        {/* Section 6 */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          6. Deleting only part of it
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          You do not have to burn the whole file to take something back. Any post or letter you wrote can be deleted
          on its own from inside the app: tap the <span className="font-mono text-ink">✕</span> on the item and
          confirm. It disappears from the front page, from any thread it appeared in, and from your public rap sheet.
          Your account is untouched.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted">
          If you want something removed that you can&apos;t remove yourself — a particular stretch of usage history,
          say — email{" "}
          <a href="mailto:info@codeclowns.com" className="text-orange underline">info@codeclowns.com</a> and tell us
          what to take out. Your account stays as it is. The same ownership check described in Section 2 applies, for
          the same reason.
        </p>

        {/* Section 7 */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          7. Contact
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted mb-2">
          <span className="text-ink font-semibold">CodeClowns Technologies LLP</span>
          <br />
          Email: <a href="mailto:info@codeclowns.com" className="text-orange underline">info@codeclowns.com</a>
          <br />
          Full detail on what we collect in the first place:{" "}
          <a href="/privacy" className="text-orange underline">the affidavit</a>.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
