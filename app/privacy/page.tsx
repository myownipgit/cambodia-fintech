import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Statement — CamFinTech",
  description:
    "How CamFinTech collects, uses, and protects information about visitors to camfintech.com and clients of our Cambodian FinTech consulting practice. Covers cookies, analytics, cross-border data handling, AI tooling, and your rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Statement — CamFinTech",
    description:
      "How CamFinTech collects, uses, and protects information about visitors and clients. Covers analytics, cross-border data, AI tooling, and your rights.",
    url: "https://www.camfintech.com/privacy",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Statement — CamFinTech",
    description:
      "How CamFinTech collects, uses, and protects information about visitors and clients of our Cambodian FinTech consulting practice.",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
