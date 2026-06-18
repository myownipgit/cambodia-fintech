import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "CamFinTech — Cambodia DPI Approval-Navigation & Compliance. Fee-only. Never hold client funds. Never operate a rail.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #221c10 0%, #1c170d 50%, #2a2214 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand accent bar */}
        <div
          style={{
            width: "80px",
            height: "6px",
            background: "#f4af25",
            borderRadius: "3px",
            marginBottom: "32px",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#f4af25",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          CamFinTech
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#f8f7f5",
            lineHeight: 1.15,
            maxWidth: "1000px",
            marginBottom: "24px",
          }}
        >
          We get Cambodian and foreign FinTechs approved onto the government rails — and keep them compliant.
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#f8f7f5",
            opacity: 0.85,
            maxWidth: "900px",
            lineHeight: 1.5,
            marginBottom: "32px",
          }}
        >
          Bakong/KHQR · CamDX/CamDigiKey · CamInvoice · DASP / SERC Prakas 093
        </div>

        {/* Trust strip */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "16px",
            color: "#f4af25",
            opacity: 0.8,
            marginBottom: "16px",
          }}
        >
          <span>Fee-only</span>
          <span>·</span>
          <span>Never hold client funds</span>
          <span>·</span>
          <span>Never operate a rail</span>
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#f4af25",
            opacity: 0.7,
          }}
        >
          www.camfintech.com
        </div>
      </div>
    ),
    { ...size }
  );
}
