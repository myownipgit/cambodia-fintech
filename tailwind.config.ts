import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CamFinTech brand palette — locked August 2026. See brand/README.txt.
        // Riel Teal is a FILL colour only: as text it is 2.91:1 on cloud and
        // 3.12:1 on card, both below the 4.5:1 WCAG AA floor. Text on a teal
        // fill must be navy-deep (5.00:1), never navy (4.25:1) or white (3.12:1).
        navy: "#1E2F52",
        "navy-deep": "#16233F",
        teal: "#17A398",
        cloud: "#F5F7FB",
        card: "#FFFFFF",
        slate: "#5E6B84",
        line: "#E2E7F0",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "var(--font-kantumruy)", "sans-serif"],
        sans: ["var(--font-manrope)", "var(--font-kantumruy)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
