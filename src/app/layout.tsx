import type { Metadata } from "next";
import { Anton, Fraunces, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Overlays from "@/components/Overlays";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "cookd. The Anti-Social Network",
  description:
    "You don't post. You get posted. cookd reads your Claude usage, hands the logs to an editor who hates you, and prints what he finds: nightly, in full color, with a barcode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${anton.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${schibstedGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Overlays />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
