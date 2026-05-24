import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About William Mallett — Founder & Managing Director, CamFinTech",
  description:
    "William Mallett is the Founder and Managing Director of CamFinTech, a Phnom Penh-based specialist consulting practice focused on Cambodia's Government-as-a-Platform digital financial infrastructure — Bakong, CamDigiKey, CamDX, and CamInvoice.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About William Mallett — Founder & Managing Director, CamFinTech",
    description:
      "William Mallett is the Founder and Managing Director of CamFinTech, a Phnom Penh-based consulting practice for Cambodia's GaaP digital financial infrastructure.",
    url: "https://www.camfintech.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About William Mallett — CamFinTech",
    description:
      "Founder and Managing Director of CamFinTech, Phnom Penh.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
