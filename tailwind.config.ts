import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#07111F",
        foreground: "#F8FAFC",
        border: "#1E293B",
        card: "#0C172A",
        muted: "#94A3B8",
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          500: "#5B6CFF",
          600: "#4A5BEB",
          700: "#3A49C8"
        },
        accent: {
          400: "#A855F7",
          500: "#9333EA"
        },
        neon: "#22D3EE",
        success: "#22C55E",
        warning: "#F59E0B"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91,108,255,0.2), 0 18px 50px rgba(91,108,255,0.25)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(91,108,255,0.2), transparent 30%), linear-gradient(to bottom, rgba(7,17,31,0.95), rgba(7,17,31,1))"
      }
    }
  },
  plugins: []
};

export default config;

