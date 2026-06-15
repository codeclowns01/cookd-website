import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy: cookd.",
  description:
    "What cookd reads from your machine, what it sends to our servers, what it never touches, and how to get your data deleted.",
};

const LAST_UPDATED = "15 June 2026";

const SYNC_FIELDS: { field: string; type: string; description: string }[] = [
  { field: "status", type: "idle | cooking | cookd", description: "Current rolling-window state" },
  { field: "usedTokens", type: "integer", description: "Weighted tokens used in the current 5-hour window" },
  { field: "limitTokens", type: "integer | null", description: "Your measured token ceiling" },
  { field: "pctUsed", type: "float | null", description: "Percentage of your limit consumed" },
  { field: "windowStart / resetsAt", type: "timestamps", description: "When your current window opened and resets" },
  { field: "calibrationConfidence", type: "none | low | medium | high", description: "Confidence in your limit estimate" },
  { field: "modelBreakdown", type: "{ model: tokens }", description: "Weighted tokens per Anthropic model in the window" },
  { field: "dailyStats.*", type: "integers / dates", description: "Tokens, sessions, prompts, tool calls, rate-limit hits, peak hour, per day" },
  { field: "tonight.*", type: "integers / booleans", description: "Live session anatomy: prompt count, agent runs, cache hit rate, tool names + counts, time-to-cooked, top project" },
];

const RATE_LIMIT_FIELDS: { field: string; description: string }[] = [
  { field: "cookedAt", description: "When you hit the limit" },
  { field: "usedTokens / limitTokens", description: "Your numbers at the moment of the hit" },
  { field: "timeToCookMins", description: "Minutes from first prompt to hitting the wall" },
  { field: "topModel", description: "The model that did the most damage" },
  { field: "resetsAt", description: "When your next window opens" },
];

const LIFETIME_FIELDS: { field: string; description: string }[] = [
  { field: "totalTokens / tenureDays / prompts", description: "All-time totals" },
  { field: "topModel / models", description: "Lifetime model breakdown" },
  { field: "topProject", description: "Project directory name (basename only) with the most usage" },
  { field: "peakHour / busiestDay / busiestDayTokens", description: "When you do your worst damage" },
  { field: "maxContext / agentHeavyPct", description: "Largest context window ever; % of usage from agent turns" },
];

const NEVER_COLLECTED = [
  "Prompt text: anything you typed in a Claude Code session",
  "Model responses: anything Claude returned to you",
  "Code, file contents, or clipboard data",
  "Tool arguments: what was passed to Read, Edit, Bash, or any other tool",
  "Full file paths: only the directory basename (e.g. cookd, my-app)",
  "Your machine's hostname, username, or any system identifier",
  "Your email address, name, or any other personal information",
];

export default function PrivacyPolicy() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 sm:px-[clamp(16px,4vw,44px)] py-[clamp(56px,8vw,116px)] max-w-[860px] mx-auto">
        {/* masthead */}
        <div className="flex items-baseline justify-between flex-wrap gap-[10px]">
          <div className="flex items-baseline gap-4">
            <span className="font-anton text-[clamp(30px,4vw,46px)] text-ink">the affidavit</span>
            <span className="font-fraunces italic text-[17px] text-muted">· privacy policy</span>
          </div>
          <span className="font-mono font-semibold text-[11px] tracking-[0.16em] text-muted">
            LAST UPDATED: {LAST_UPDATED.toUpperCase()}
          </span>
        </div>
        <div className="mt-[14px] border-t-4 border-ink" />
        <div className="mt-[3px] border-t border-border mb-10" />

        {/* intro */}
        <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.7] text-muted">
          cookd is built by <span className="text-ink font-semibold">CodeClowns Technologies LLP</span>. This policy
          explains, in full, what the cookd companion (the <span className="font-mono text-ink">npx @codeclowns/cookd</span>{" "}
          CLI) reads from your machine, what the cookd app stores about you, what gets sent to our servers, what
          never leaves your device, and how to get all of it deleted.
        </p>
        <p className="mt-4 text-[clamp(16px,1.4vw,18px)] leading-[1.7] text-muted">
          The short version: <span className="text-ink font-semibold">we read numbers, not your work.</span> No
          email. No password. No prompts. No code. No file contents. Just token counts, model names, and how badly
          you cooked yourself tonight.
        </p>

        {/* TL;DR box */}
        <div className="mt-8 bg-surface border border-border rounded-xl px-6 py-5">
          <div className="font-mono font-semibold text-[11px] tracking-[0.24em] text-orange mb-3">
            ★ THE SHORT VERSION
          </div>
          <ul className="m-0 pl-5 list-disc text-[14.5px] leading-[1.7] text-muted space-y-[6px]">
            <li>We collect token counts, timestamps, model names, and tool <em>names</em>, never content.</li>
            <li>Your identity on our servers is a random 32-character device ID. No email or username is required to use the companion.</li>
            <li>All data is stored on Supabase, our database and infrastructure provider.</li>
            <li>You can ask us to delete everything tied to your device ID at any time.</li>
          </ul>
        </div>

        {/* Section: the companion */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          1. The companion (CLI)
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          When you run <span className="font-mono text-ink">cookd init</span> or <span className="font-mono text-ink">cookd watch</span>,
          the companion reads the Claude Code transcript files at{" "}
          <span className="font-mono text-ink">~/.claude/projects/**/*.jsonl</span>: the session logs Claude Code
          already writes to your machine. From each entry it reads <span className="text-ink font-semibold">token
          counts, timestamps, model identifiers, boolean flags, and tool names</span>. It never reads message
          content. The parser that touches these files lives in one place in our source code (
          <span className="font-mono text-ink">src/adapters/claude-code/transcript.ts</span>) and is documented in{" "}
          <span className="font-mono text-ink">SECURITY.md</span> in our repository.
        </p>

        <h3 className="mt-7 mb-2 font-mono font-bold text-[12px] tracking-[0.18em] text-orange">
          1.1 ONCE: WHEN YOU LINK A DEVICE
        </h3>
        <p className="text-[15px] leading-[1.7] text-muted">
          On first run, the companion generates a <span className="text-ink font-semibold">deviceId</span>, a
          random 32-character hex string, created locally on your machine. This is sent to our backend once. It is
          the only persistent identity our servers ever hold for the companion. No hostname, username, email, or
          machine name accompanies it.
        </p>

        <h3 className="mt-7 mb-2 font-mono font-bold text-[12px] tracking-[0.18em] text-orange">
          1.2 ONGOING: EVERY SYNC
        </h3>
        <p className="text-[15px] leading-[1.7] text-muted mb-3">
          <span className="font-mono text-ink">cookd watch</span> syncs a summary of your rolling 5-hour window
          whenever it shifts by 2% or more, a rate-limit event fires, or every 5 minutes, whichever comes first.
        </p>
        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="bg-surface text-left">
                <th className="font-mono font-bold text-[10.5px] tracking-[0.14em] text-muted px-3 py-[10px] border-b border-border">FIELD</th>
                <th className="font-mono font-bold text-[10.5px] tracking-[0.14em] text-muted px-3 py-[10px] border-b border-border">TYPE</th>
                <th className="font-mono font-bold text-[10.5px] tracking-[0.14em] text-muted px-3 py-[10px] border-b border-border">WHAT IT IS</th>
              </tr>
            </thead>
            <tbody>
              {SYNC_FIELDS.map((row) => (
                <tr key={row.field} className="border-b border-border last:border-b-0">
                  <td className="font-mono text-[12px] text-ink px-3 py-[9px] align-top whitespace-nowrap">{row.field}</td>
                  <td className="font-mono text-[11px] text-faint px-3 py-[9px] align-top whitespace-nowrap">{row.type}</td>
                  <td className="text-[13px] text-muted px-3 py-[9px] align-top leading-[1.5]">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-7 mb-2 font-mono font-bold text-[12px] tracking-[0.18em] text-orange">
          1.3 ONCE PER WINDOW: WHEN YOU GET COOKED
        </h3>
        <p className="text-[15px] leading-[1.7] text-muted mb-3">
          When your 5-hour window hits its limit, one additional event is sent:
        </p>
        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-[13px] border-collapse">
            <tbody>
              {RATE_LIMIT_FIELDS.map((row) => (
                <tr key={row.field} className="border-b border-border last:border-b-0">
                  <td className="font-mono text-[12px] text-ink px-3 py-[9px] align-top whitespace-nowrap bg-surface">{row.field}</td>
                  <td className="text-[13px] text-muted px-3 py-[9px] align-top leading-[1.5]">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-7 mb-2 font-mono font-bold text-[12px] tracking-[0.18em] text-orange">
          1.4 WEEKLY: LIFETIME STATS, AND ONCE: HISTORICAL BACKFILL
        </h3>
        <p className="text-[15px] leading-[1.7] text-muted mb-3">
          On the first sync of each week, an all-time summary is sent. On <span className="font-mono text-ink">cookd init</span>,
          a one-time backfill of your historical daily stats (same shape as 1.2&apos;s <span className="font-mono text-ink">dailyStats</span>)
          is sent so your dashboard has history from day one. It is never re-sent.
        </p>
        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-[13px] border-collapse">
            <tbody>
              {LIFETIME_FIELDS.map((row) => (
                <tr key={row.field} className="border-b border-border last:border-b-0">
                  <td className="font-mono text-[12px] text-ink px-3 py-[9px] align-top whitespace-nowrap bg-surface">{row.field}</td>
                  <td className="text-[13px] text-muted px-3 py-[9px] align-top leading-[1.5]">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[13px] leading-[1.6] text-faint">
          Note on model names: identifiers like <span className="font-mono">claude-sonnet-4-6</span> are public
          strings published by Anthropic to describe which model answered a request, they are not derived from, or
          specific to, your account.
        </p>

        {/* Section: never collected */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          2. What we never read or transmit
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted mb-3">
          The companion has read access to your Claude Code transcripts, which technically contain your full
          conversation history. We treat that as a trust boundary, not an opportunity. The following is{" "}
          <span className="text-ink font-semibold">never read, stored, logged, or transmitted</span>, under any
          circumstance:
        </p>
        <ul className="m-0 pl-5 list-disc text-[14.5px] leading-[1.7] text-muted space-y-[6px]">
          {NEVER_COLLECTED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3 text-[13px] leading-[1.6] text-faint">
          Your Anthropic credentials (<span className="font-mono">~/.claude/.credentials.json</span>) are never read
          or touched. Local state is kept at <span className="font-mono">~/.cookd/</span> with{" "}
          <span className="font-mono">chmod 600</span> on credential files, readable only by you.
        </p>

        {/* Section: the app */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          3. The app: press codes &amp; handles
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          To connect the companion to the cookd app, the companion prints a six-character press code. You enter that
          code in the app to link your device. No email or password is ever requested. If you choose a handle (e.g.{" "}
          <span className="font-mono text-ink">@ria_ships</span>) so others can find your roast cards on the front
          page, that handle is the only identity attached to your account, it does not need to be your real name.
          Roast cards, heat index data, and front-page posts are generated from the usage numbers described in
          Section 1, formatted as editorial copy.
        </p>

        {/* Section: how used */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          4. How your data is used
        </h2>
        <ul className="m-0 pl-5 list-disc text-[14.5px] leading-[1.7] text-muted space-y-[6px]">
          <li>To show your live usage, window percentage, and Tonight&apos;s Anatomy in the app.</li>
          <li>To calibrate your personal token ceiling and rate-limit window over time.</li>
          <li>To generate your roast card and front-page posts when you hit your limit.</li>
          <li>To compute aggregate, non-identifying statistics (e.g. site-wide token totals shown on this website).</li>
          <li>To debug and improve the companion and the app.</li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted">
          We do not sell your data. We do not share it with advertisers. We do not use it to train models.
        </p>

        {/* Section: where it lives */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          5. Where your data lives
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          All synced data is stored on <span className="text-ink font-semibold">Supabase</span>, which provides our
          database, authentication, and serverless functions. Supabase acts as our infrastructure
          provider/sub-processor and does not use your data for its own purposes. All companion-to-server requests
          happen over HTTPS. Subprocess calls made by the companion on your machine use explicit argument arrays
          (<span className="font-mono">execFile</span>), never shell-string execution, to prevent command injection.
        </p>

        {/* Section: retention */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          6. Data retention
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          We retain usage data for as long as your device ID remains linked to an account, so that your dashboard,
          heat index, and lifetime stats stay accurate. Per-event sync data is not stored individually, only the
          rolling-window and daily/lifetime aggregates described in Section 1. If you stop using the companion, your
          data simply stops updating; it is not automatically purged unless you request deletion (Section 7).
        </p>

        {/* Section: your rights */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          7. Your rights: &quot;burn my file&quot;
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          Because the only identity we hold is a random device ID, there is nothing to de-anonymize. You can ask us
          to:
        </p>
        <ul className="m-0 pl-5 list-disc text-[14.5px] leading-[1.7] text-muted space-y-[6px]">
          <li><span className="text-ink font-semibold">Export</span> everything tied to your device ID.</li>
          <li><span className="text-ink font-semibold">Delete</span> everything tied to your device ID: all sync history, lifetime stats, roast cards, and your handle.</li>
          <li><span className="text-ink font-semibold">Unlink</span> a device without deleting your account data.</li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted">
          To request any of the above, email{" "}
          <a href="mailto:info@codeclowns.com" className="text-orange underline">info@codeclowns.com</a> with the
          subject line <span className="font-mono text-ink">burn my file</span>. We will action verified requests
          within 30 days. Uninstalling the companion (<span className="font-mono">npm uninstall -g @codeclowns/cookd</span>{" "}
          and deleting <span className="font-mono">~/.cookd/</span>) stops all future syncing immediately but does
          not, on its own, delete data already on our servers; email us for that.
        </p>

        {/* Section: this website */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          8. This website
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          cookd.dev (this marketing site) does not set tracking cookies and does not run third-party analytics. The
          numbers shown here (tokens torched, press pool size, heat index) are aggregate figures, not tied to any
          individual visitor. If that changes, this policy will be updated and the date at the top will reflect it.
        </p>

        {/* Section: children */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          9. Children&apos;s privacy
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          cookd is a developer tool intended for professional and hobbyist software engineers. It is not directed at
          children, and we do not knowingly collect data from anyone under 16.
        </p>

        {/* Section: changes */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          10. Changes to this policy
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          If we change what the companion reads or what gets synced, we will update this page, the{" "}
          <span className="font-mono text-ink">SECURITY.md</span> file in our open-source repository, and the date
          at the top of this policy. Material changes, anything that expands what leaves your machine, require a
          new version bump and a CHANGELOG entry before release.
        </p>

        {/* Section: contact */}
        <h2 className="mt-12 mb-3 font-anton font-normal text-[clamp(26px,3.2vw,38px)] uppercase text-ink leading-[1]">
          11. Contact
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted mb-2">
          <span className="text-ink font-semibold">CodeClowns Technologies LLP</span>
          <br />
          Email: <a href="mailto:info@codeclowns.com" className="text-orange underline">info@codeclowns.com</a>
          <br />
          Source &amp; full field-level documentation:{" "}
          <a
            href="https://github.com/codeclowns01/cookd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange underline"
          >
            github.com/codeclowns01/cookd
          </a>
          . See <span className="font-mono">SECURITY.md</span> and{" "}
          <span className="font-mono">docs/architecture/decisions/010-privacy-data-model.md</span>.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
