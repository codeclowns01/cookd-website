import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { childSafety } from "@/lib/legal";

// This is the URL the Google Play "child safety standards" declaration points
// at. It must stay reachable and must keep a working point of contact —
// reviewers do test it.
export const metadata: Metadata = {
  title: childSafety.metaTitle,
  description: childSafety.metaDescription,
};

export default function ChildSafetyPolicy() {
  return <LegalPage doc={childSafety} />;
}
