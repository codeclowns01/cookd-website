import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { guidelines } from "@/lib/legal";

export const metadata: Metadata = {
  title: guidelines.metaTitle,
  description: guidelines.metaDescription,
};

export default function CommunityGuidelines() {
  return <LegalPage doc={guidelines} />;
}
