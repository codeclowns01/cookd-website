import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Route segment config
export const alt = "cookd. — the anti-social network.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (HOT PRESS)
const CHAR = "#0E0C0A";
const BONE = "#F2EAD9";
const FLAME = "#FF4D00";
const STAMP = "#FFC400";
const MUT = "#8D8377";
const HAIRLINE = "#332D26";

export default async function Image() {
  const fontDir = join(process.cwd(), "src/app/_og-fonts");
  const [anton, fraunces, mono] = await Promise.all([
    readFile(join(fontDir, "Anton-Regular.ttf")),
    readFile(join(fontDir, "Fraunces-Italic.ttf")),
    readFile(join(fontDir, "JetBrainsMono-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CHAR,
          padding: "72px 80px",
          fontFamily: "Anton",
          position: "relative",
        }}
      >
        {/* Masthead kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "mono",
            color: MUT,
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          <span>THE COOKD PRESS</span>
          <span>Nº 0610</span>
        </div>

        {/* Rubber stamp */}
        <div
          style={{
            position: "absolute",
            top: 128,
            right: 84,
            display: "flex",
            transform: "rotate(-9deg)",
            border: `5px solid ${FLAME}`,
            borderRadius: 8,
            padding: "10px 22px",
            color: FLAME,
            fontFamily: "Anton",
            fontSize: 52,
            letterSpacing: "0.04em",
          }}
        >
          COOKED
        </div>

        {/* Wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              color: BONE,
              fontFamily: "Anton",
              fontSize: 220,
              lineHeight: 0.95,
              letterSpacing: "0.01em",
            }}
          >
            cookd<span style={{ color: FLAME }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              color: BONE,
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontSize: 46,
            }}
          >
            the anti-social network.
          </div>
        </div>

        {/* Bottom receipt strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${HAIRLINE}`,
            paddingTop: 26,
            fontFamily: "mono",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex", color: MUT }}>
            YOU DON&apos;T POST. YOU GET POSTED.
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              background: STAMP,
              color: CHAR,
              padding: "6px 16px",
              borderRadius: 6,
              fontSize: 20,
            }}
          >
            COOKD.LOL
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton, style: "normal", weight: 400 },
        { name: "Fraunces", data: fraunces, style: "italic", weight: 500 },
        { name: "mono", data: mono, style: "normal", weight: 600 },
      ],
    }
  );
}
