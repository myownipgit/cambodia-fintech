import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f4af25",
        "background-light": "#f8f7f5",
        "background-dark": "#221c10",
        "text-light": "#1c170d",
        "text-dark": "#f8f7f5",
        "card-light": "#ffffff",
        "card-dark": "#2a2214",
        "border-light": "#f4efe7",
        "border-dark": "#3a301e",
      },
      fontFamily: {
        display: ["var(--font-inter)", "var(--font-noto-sans-khmer)", "sans-serif"],
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
