import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "CamFinTech — Cambodia FinTech Consulting for Bakong, CamDigiKey, CamDX, and CamInvoice Integration";
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
            fontSize: "52px",
            fontWeight: 800,
            color: "#f8f7f5",
            lineHeight: 1.15,
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          Architecting Cambodia&apos;s Digital Financial Future
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#f8f7f5",
            opacity: 0.8,
            maxWidth: "800px",
            lineHeight: 1.5,
            marginBottom: "40px",
          }}
        >
          Bakong · CamDigiKey · CamDX · CamInvoice · KHQR
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
