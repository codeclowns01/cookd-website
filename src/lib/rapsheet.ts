// Public rap-sheet data layer for /u/[uid].
// The endpoint is fully public + CORS-enabled — no auth header, no API key.

const ENDPOINT =
  "https://efocqoekmoiecisrmucn.supabase.co/functions/v1/public-rapsheet";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type RapBio = {
  headline: string;
  body: string;
};

export type RapStats = {
  totalTokens: number | null;
  prompts: number | null;
  tenureDays: number | null;
  topModel: string | null;
};

export type RapAura = {
  total: number | null;
  rank: string | null;
};

export type RapBadge = {
  family: string;
  level: number;
  label: string;
};

export type RapPost = {
  kind: string;
  headline: string;
  body: string;
  createdAt: string;
  reactions: number;
  comments: number;
};

export type RapSheet = {
  handle: string;
  persona: string;
  bio: RapBio;
  stats: RapStats;
  aura: RapAura;
  badges: RapBadge[];
  posts: RapPost[];
};

export type RapSheetResult =
  | { status: "ok"; data: RapSheet }
  | { status: "not_found" };

export function isUuid(uid: string): boolean {
  return UUID_RE.test(uid);
}

/**
 * Fetch a public rap sheet. Any failure (bad uid, 400, 404, network, malformed
 * body) collapses to `not_found` so the caller renders the in-voice file page.
 * Uses fixed fetch options so Next request-memoizes across page + metadata.
 */
export async function getRapSheet(uid: string): Promise<RapSheetResult> {
  if (!isUuid(uid)) return { status: "not_found" };

  try {
    const res = await fetch(`${ENDPOINT}?uid=${encodeURIComponent(uid)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return { status: "not_found" };

    const data = (await res.json()) as RapSheet;
    if (!data || typeof data.handle !== "string") return { status: "not_found" };

    return {
      status: "ok",
      data: {
        handle: data.handle,
        persona: data.persona || "THE NEW RECRUIT",
        bio: {
          headline: data.bio?.headline || "NOT ENOUGH DATA YET. COOK FIRST.",
          body: data.bio?.body || "",
        },
        stats: data.stats ?? {
          totalTokens: null,
          prompts: null,
          tenureDays: null,
          topModel: null,
        },
        aura: data.aura ?? { total: null, rank: null },
        badges: Array.isArray(data.badges) ? data.badges : [],
        posts: Array.isArray(data.posts) ? data.posts : [],
      },
    };
  } catch {
    return { status: "not_found" };
  }
}

/** 41800000 -> "41.8M". Compact, trims trailing .0. */
export function compact(n: number | null | undefined): string {
  if (n == null || !Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  const fmt = (v: number, suffix: string) =>
    `${(v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)).replace(/\.0$/, "")}${suffix}`;
  if (abs >= 1e9) return fmt(n / 1e9, "B");
  if (abs >= 1e6) return fmt(n / 1e6, "M");
  if (abs >= 1e3) return fmt(n / 1e3, "K");
  return String(n);
}

/** 12043 -> "12,043". Full number, comma-grouped. */
export function grouped(n: number | null | undefined): string {
  if (n == null || !Number.isFinite(n)) return "—";
  return n.toLocaleString("en-US");
}

/** ISO -> "JUL 15, 2026". */
export function filedDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "UNDATED";
  return d
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

/** aura magnitude → token color class. <1k muted, <20k ink, >=20k flame. */
export function auraColorClass(total: number | null | undefined): string {
  if (total == null || total < 1000) return "text-muted";
  if (total < 20000) return "text-ink";
  return "text-orange";
}

/** badge level → offense-tag color class. 1-2 muted, 3 yellow, 4-5 flame. */
export function badgeTier(level: number): {
  border: string;
  text: string;
} {
  if (level >= 4) return { border: "border-orange", text: "text-orange" };
  if (level === 3) return { border: "border-yellow", text: "text-yellow" };
  return { border: "border-border", text: "text-muted" };
}
