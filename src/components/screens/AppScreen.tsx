"use client";

import "./hp.css";
import { SCREENS, type ScreenName } from "./screenContent";

export type { ScreenName };

export default function AppScreen({ screen }: { screen: ScreenName }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}
      dangerouslySetInnerHTML={{ __html: SCREENS[screen] }}
    />
  );
}
