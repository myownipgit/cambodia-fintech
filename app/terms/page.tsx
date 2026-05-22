import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use — CamFinTech",
  description:
    "The terms that govern your access to and use of camfintech.com. Includes IP, acceptable use, no-professional-advice disclaimer, governing law (Cambodia), and the contact route for disputes.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use — CamFinTech",
    description:
      "Terms governing access to camfintech.com — IP, acceptable use, disclaimers, and governing law (Cambodia).",
    url: "https://www.camfintech.com/terms",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use — CamFinTech",
    description:
      "Terms governing access to camfintech.com — IP, acceptable use, disclaimers, and Cambodian governing law.",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
