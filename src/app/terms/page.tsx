import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/lib/legal";

export const metadata: Metadata = {
  title: terms.metaTitle,
  description: terms.metaDescription,
};

export default function TermsOfUse() {
  return <LegalPage doc={terms} />;
}
