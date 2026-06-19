"use client";

import "./hp.css";
import { SCREENS, type ScreenName } from "./screenContent";

export type { ScreenName };

export default function AppScreen({ screen }: { screen: ScreenName }) {
  return <div dangerouslySetInnerHTML={{ __html: SCREENS[screen] }} />;
}
