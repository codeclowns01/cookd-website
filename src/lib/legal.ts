/**
 * legal — the published text of cookd's policy documents.
 *
 * Structured data, not JSX: one copy source, one renderer (LegalPage.tsx). The
 * same shape the mobile app uses in app/src/components/policyCopy.ts, for the
 * same reason — these documents exist in three places and must not drift.
 *
 * SOURCE OF TRUTH is `docs/legal/*.md` in the cookd-app repo. These are the web
 * renderings; the app renders its own from policyCopy.ts. Change one, change all
 * three. ADR 0011 risk R4.
 *
 * VOICE: plain product language, no editor persona (ADR 0011 decision D13).
 * cookd's brand voice roasts everything, and that rule deliberately stops at
 * safety surfaces. Someone reading the child-safety page may be reporting abuse.
 *
 * NOT here: the privacy policy. It has its own hand-built page at /privacy
 * ("the affidavit"), which is more detailed than this renderer supports and
 * predates these documents.
 */

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "callout"; title: string; items: string[] };

export type LegalDoc = {
  slug: string;
  /** Masthead, in Anton — matches "the affidavit" on /privacy. */
  title: string;
  /** Fraunces italic kicker beside it. */
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  blocks: LegalBlock[];
};

const LAST_UPDATED = "25 August 2026";
const ENTITY = "CodeClowns Technologies LLP";
const CONTACT = "info@codeclowns.com";

export const guidelines: LegalDoc = {
  slug: "guidelines",
  title: "the house rules",
  subtitle: "· community guidelines",
  metaTitle: "Community Guidelines — cookd.",
  metaDescription:
    "What is and is not allowed on cookd. We roast the habit, never the person. Slurs, harassment, threats and sexual content are removed.",
  lastUpdated: LAST_UPDATED,
  blocks: [
    { kind: "p", text: "cookd is a joke about how much AI you use. The app roasts you, other people roast you, and you roast them back. That is the product, and it only works if everyone understands where the line is." },
    { kind: "p", text: "The line is simple: we roast the habit, never the person. Your usage stats, your 3am sessions, your model choices, the thing you shipped in a weekend — all fair game. Who you are is not." },
    {
      kind: "callout",
      title: "★ THE SHORT VERSION",
      items: [
        "Attack the habit and the choices. Never the person.",
        "No slurs, and nothing targeting who someone is.",
        "Every post, letter and profile has a report control.",
        "You can block anyone, and it works in both directions.",
      ],
    },
    { kind: "h2", text: "1. What is not allowed" },
    { kind: "h3", text: "1.1 ATTACKS ON WHO SOMEONE IS" },
    { kind: "p", text: "No slurs. Nothing targeting race, ethnicity, nationality, religion, gender, gender identity, sexual orientation, disability, age, or appearance. A roast that lands because of someone's identity is not a roast, and it does not belong here." },
    { kind: "h3", text: "1.2 HARASSMENT" },
    { kind: "p", text: "Repeatedly targeting someone, following them across threads to have another go, coordinating others against them, or continuing after they have disengaged." },
    { kind: "h3", text: "1.3 THREATS AND VIOLENCE" },
    { kind: "p", text: "Threatening harm to anyone. Encouraging or celebrating violence. Content that glorifies self-harm or suicide, or that pressures someone toward it. \"Touch grass\" is a joke about your keyboard; anything aimed at a real person's safety is not." },
    { kind: "h3", text: "1.4 SEXUAL CONTENT" },
    { kind: "p", text: "Explicit sexual material, sexual content involving anyone who appears to be a minor, and unwanted sexual comments directed at another user." },
    { kind: "h3", text: "1.5 CHILD SEXUAL ABUSE AND EXPLOITATION" },
    { kind: "p", text: "Zero tolerance, no exceptions, no context in which it is acceptable. See our Child Safety Policy." },
    { kind: "h3", text: "1.6 EVERYTHING ELSE" },
    {
      kind: "ul",
      items: [
        "Impersonation: claiming to be someone else, or picking a byline designed to make people think you are.",
        "Doxxing: posting anyone's private information — real name where they have not used it, address, workplace, phone number, private accounts.",
        "Spam and manipulation: bulk or repetitive posting, promotional content, or gaming the app's numbers. The stats are the joke; faking them ruins it.",
        "Anything unlawful where you are or where we operate.",
      ],
    },
    { kind: "h2", text: "2. Your byline" },
    { kind: "p", text: "Your @handle appears on every post you make, on your rap sheet, and on your public press pass at cookd.lol/u/…, which anyone can open without an account. Handles containing slurs or targeting someone are not permitted, and are blocked automatically." },
    { kind: "h2", text: "3. Roasts the app writes" },
    { kind: "p", text: "cookd generates roasts about you using an AI model. Those roasts are published under your byline when you choose to print them, and other people see them as your content." },
    { kind: "p", text: "The model is instructed to attack habits and never identity, and its output is checked before it is stored. It can still get something wrong. If a roast the app generated crosses the line, report it the same way you would report anything else — we want to know, because it helps us fix the underlying prompt rather than just the one post." },
    { kind: "h2", text: "4. Reporting" },
    { kind: "p", text: "Every post and every letter has a report control. Every profile has one too. Tap it, pick the closest reason, and add anything we should know." },
    { kind: "p", text: "Reports are private. The person you report is never told who reported them. We review reports and remove content that breaks these guidelines. Content reported for child sexual abuse or exploitation is treated as the highest priority." },
    { kind: "h2", text: "5. Blocking" },
    { kind: "p", text: "You can block anyone. When you do:" },
    {
      kind: "ul",
      items: [
        "You stop seeing their posts and their letters, and they stop seeing yours.",
        "Neither of you can open the other's profile in the app.",
        "You both stop following each other, and unblocking does not restore that.",
      ],
    },
    { kind: "p", text: "Blocking is private — the other person is not notified. It does not hide their public press pass at cookd.lol/u/…, because that page is on the open web and does not know who is looking at it." },
    { kind: "h2", text: "6. What happens when you break these rules" },
    { kind: "p", text: "Depending on what happened, we may remove the content, remove your byline, or remove your account. Content reported by enough people is hidden automatically while we look at it." },
    { kind: "p", text: `If you think we got it wrong, write to ${CONTACT}.` },
    { kind: "h2", text: "7. A note on the joke" },
    { kind: "p", text: "If you are reading this because you are about to post something and you are not sure — the test we use is whether the target could laugh at it. A good cookd roast makes someone tag three friends. If what you are writing would make them want to leave instead, it is not the joke, it is just the mean part with the joke removed." },
  ],
};

export const terms: LegalDoc = {
  slug: "terms",
  title: "the fine print",
  subtitle: "· terms of use",
  metaTitle: "Terms of Use — cookd.",
  metaDescription:
    "The agreement between you and CodeClowns Technologies LLP for using cookd. What the app is, who can use it, and the rules you agree to follow.",
  lastUpdated: LAST_UPDATED,
  blocks: [
    { kind: "p", text: `These terms are the agreement between you and ${ENTITY} ("we", "us") for using cookd. By presenting a press code and signing in, you accept them. If you do not accept them, do not use cookd.` },
    { kind: "h2", text: "1. What cookd is" },
    { kind: "p", text: "cookd reads how much you use Claude, via a companion program you install on your own computer, and turns it into a newspaper about your own bad habits. It generates roasts about your usage using an AI model, and it lets you publish those roasts, comment on other people's, follow them, and share a public profile page." },
    { kind: "p", text: "cookd is entertainment. Nothing it says about you is a judgement of your work, your ability, or your worth, and none of it is advice." },
    { kind: "h2", text: "2. Who can use it" },
    { kind: "p", text: "You must be at least 18 years old. On Google Play this app is declared for users aged 18 and over, with minor restriction enabled. You must not be barred from using it under any applicable law. One account is for one person — do not share your account or your device credentials." },
    { kind: "h2", text: "3. Your account" },
    { kind: "p", text: "You sign in by linking a computer running our companion program, which issues you a press code. You are responsible for what happens under your account and for keeping your device credentials safe." },
    { kind: "p", text: "Your byline (@handle) is public. It appears on every post you make, on your rap sheet, and on your public press pass at cookd.lol/u/…, which anyone can open without an account. You may change your byline a limited number of times. Some bylines are reserved and some are blocked automatically." },
    { kind: "h2", text: "4. Your content" },
    { kind: "p", text: "You keep ownership of what you post." },
    { kind: "p", text: "By posting, you give us a non-exclusive, worldwide, royalty-free licence to store, display, and distribute it for the purpose of operating cookd — including on public pages at cookd.lol. This licence ends when you delete the content or your account, except for copies we are required to keep by law and for content others have already shared elsewhere." },
    { kind: "p", text: "You are responsible for what you post, and you confirm you have the right to post it." },
    { kind: "h2", text: "5. Rules you agree to follow" },
    { kind: "p", text: "Our Community Guidelines are part of these terms. In short, you agree not to post or do any of the following:" },
    {
      kind: "ul",
      items: [
        "Attacks on who someone is: slurs, or content targeting race, ethnicity, nationality, religion, gender, gender identity, sexual orientation, disability, age, or appearance.",
        "Harassment, bullying, or coordinated targeting of any person.",
        "Threats of violence, or content encouraging violence, self-harm, or suicide.",
        "Sexual content, and any sexualisation of a minor.",
        "Child sexual abuse or exploitation of any kind. Zero tolerance, no exceptions.",
        "Impersonating anyone, or picking a byline designed to mislead.",
        "Posting anyone's private information.",
        "Spam, bulk posting, promotional content, or manipulating the app's numbers.",
        "Anything unlawful where you are or where we operate.",
        "Interfering with cookd: attacking the service, bypassing its limits, scraping it, reverse engineering it beyond what the law permits, or automating access without our written permission.",
      ],
    },
    { kind: "h2", text: "6. Roasts generated by AI" },
    { kind: "p", text: "cookd uses an AI model to write roasts from your usage statistics. The model can produce output that is wrong, unfair, or offensive, even though it is instructed to attack habits rather than identity and its output is checked before it is stored." },
    { kind: "p", text: "A roast is not a statement of fact about you and it is not our opinion of you. When you choose to print a roast to the paper, it is published under your byline and other people see it as your content — you are responsible for what you publish, including roasts the app generated. If a generated roast breaks our guidelines, report it in the app. We want to know." },
    { kind: "h2", text: "7. Reporting, moderation and enforcement" },
    { kind: "p", text: "Every post, letter, and profile has a report control. Reports are private." },
    { kind: "p", text: "We review reports and may remove content, remove a byline, or terminate an account for breaking these terms or our guidelines. Content reported by enough people may be hidden automatically while we review it. Content reported for child sexual abuse or exploitation is our highest priority and is handled under our Child Safety Policy." },
    { kind: "p", text: "We are a very small team. We aim to act quickly, we prioritise by severity, and we do not guarantee a response time except where the law requires one." },
    { kind: "p", text: "You can block any other user at any time. Blocking hides their content from you and yours from them inside the app, and ends any following between you in both directions. It does not affect public cookd.lol pages, which are on the open web." },
    { kind: "p", text: `If you believe we removed something in error, write to ${CONTACT}.` },
    { kind: "h2", text: "8. Ending your account" },
    { kind: "p", text: "You can delete your account at any time from the app: rap sheet → burn my file. This is immediate and permanent. See our Privacy Policy for what is deleted and what is retained." },
    { kind: "p", text: "We may suspend or terminate your account if you break these terms, if we are required to by law, or if we stop operating cookd." },
    { kind: "h2", text: "9. The service itself" },
    { kind: "p", text: "cookd is provided as it is, without warranties of any kind, to the extent the law allows. We do not promise it will be available, uninterrupted, accurate, or free of errors. We can change, suspend, or discontinue any part of cookd at any time. Where a change materially affects you, we will give notice we reasonably can." },
    { kind: "h2", text: "10. Limitation of liability" },
    { kind: "p", text: "To the fullest extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, data, or goodwill, arising from your use of cookd." },
    { kind: "p", text: "Nothing in these terms limits liability that cannot be limited by law, including for death or personal injury caused by negligence, or for fraud. Some jurisdictions do not allow some of these exclusions; where that is the case, they do not apply to you." },
    { kind: "h2", text: "11. Changes to these terms" },
    { kind: "p", text: "We may update these terms. When we make a material change, we will update the date at the top and give notice in the app. Continuing to use cookd after a change means you accept the updated terms." },
    { kind: "h2", text: "12. Governing law" },
    { kind: "p", text: "These terms are governed by the laws of India, without regard to conflict of laws rules." },
    { kind: "h2", text: "13. Contact" },
    { kind: "p", text: CONTACT },
  ],
};

export const childSafety: LegalDoc = {
  slug: "child-safety",
  title: "child safety",
  subtitle: "· CSAE policy",
  metaTitle: "Child Safety Policy — cookd.",
  metaDescription:
    "cookd has zero tolerance for child sexual abuse and exploitation. What is prohibited, how to report it, what we do, and how to reach us.",
  lastUpdated: LAST_UPDATED,
  blocks: [
    { kind: "p", text: `cookd has zero tolerance for child sexual abuse and exploitation. There is no context, no joke, and no defence under which this content is acceptable on cookd.` },
    { kind: "p", text: "This policy exists because we host user-generated content. It sets out what we prohibit, how you report it, what we do about it, and how to reach us." },
    {
      kind: "callout",
      title: "★ REPORT IT",
      items: [
        `In the app: the report control on any post, letter or profile — choose "Child sexual abuse or exploitation".`,
        `By email: ${CONTACT}. You do not need an account. Confidential.`,
        "If a child is in immediate danger, contact your local emergency services first.",
      ],
    },
    { kind: "h2", text: "1. What is prohibited" },
    { kind: "p", text: "We prohibit, without exception:" },
    {
      kind: "ul",
      items: [
        "Child sexual abuse material (CSAM) in any form.",
        "Any sexualisation of a minor, including in text, images, generated content, or a byline.",
        "Grooming, or any attempt to solicit, coerce, or sexually exploit a minor.",
        "Sextortion, or threatening to share sexual content of a minor.",
        "Trafficking a minor, or advertising, soliciting, or facilitating it.",
        "Sharing, linking to, or directing anyone toward the above, anywhere.",
        "Promoting, normalising, or trivialising any of the above.",
      ],
    },
    { kind: "p", text: "This applies to every surface of cookd: posts, letters to the editor, bylines, profiles, roasts generated by the app, and the public press pass pages at cookd.lol/u/…." },
    { kind: "h2", text: "2. Age requirement" },
    { kind: "p", text: "cookd is not directed at children or teenagers. You must be at least 18 years old to use cookd. On Google Play the app is declared for users aged 18 and over, with minor restriction enabled, and we do not knowingly collect data from anyone under 18. We remove accounts we determine belong to someone under that age." },
    { kind: "h2", text: "3. How to report" },
    { kind: "h3", text: "3.1 IN THE APP" },
    { kind: "p", text: `Every post, letter, and profile has a report control. Choose the reason "Child sexual abuse or exploitation". This reason is treated as the highest priority in our review queue and is never grouped with ordinary content reports.` },
    { kind: "h3", text: "3.2 BY EMAIL" },
    { kind: "p", text: `${CONTACT} — monitored, and the correct route if you cannot use the in-app control, if you are reporting something you found on a public cookd.lol page, or if you are a member of law enforcement. You do not need an account to email us. Reports are confidential.` },
    { kind: "h2", text: "4. What we do" },
    { kind: "p", text: "When we receive a report of child sexual abuse or exploitation:" },
    {
      kind: "ul",
      items: [
        "We review it as the highest priority. It is not queued behind other reports.",
        "We remove the content if the report is substantiated.",
        "We terminate the account responsible. This is not a warning-and-strike category.",
        "We report it to the appropriate authorities, including the National Center for Missing & Exploited Children (NCMEC) where applicable, and we preserve the relevant records as required by law.",
        "We act on our own findings too, not only on reports.",
      ],
    },
    { kind: "h2", text: "5. Deliberate misuse of this report reason" },
    { kind: "p", text: "Reporting content as child sexual abuse when you know it is not — to get a post you dislike removed, or to harass someone — is itself a violation of our Community Guidelines and can cost you your account. This category exists to protect children, and abusing it makes it slower for the reports that matter." },
    { kind: "h2", text: "6. Contact for law enforcement and child safety organisations" },
    { kind: "p", text: `${CONTACT}` },
    { kind: "p", text: "Please include the cookd.lol/u/… URL or the byline and approximate time of the content, and state that your request relates to child safety so it is routed correctly." },
    { kind: "h2", text: "7. Resources" },
    { kind: "p", text: "If a child is in immediate danger, contact your local emergency services first." },
    {
      kind: "ul",
      items: [
        "NCMEC CyberTipline (US): report.cybertip.org — 1-800-843-5678",
        "Internet Watch Foundation (UK): iwf.org.uk",
        "INHOPE (international network of hotlines): inhope.org",
      ],
    },
  ],
};

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  guidelines,
  terms,
  "child-safety": childSafety,
};
