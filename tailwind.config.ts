import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base
        preto: "#0B0C0E",
        branco: "#FFFFFF",
        // Cinza-Granito
        granito: {
          DEFAULT: "#2B2D31",
          dark: "#1A1B1E",
          light: "#3D3F45",
        },
        // Verde Mata Atlântica
        mata: {
          DEFAULT: "#132219",
          mid: "#1C3324",
          light: "#2A382B",
        },
        // Marrom Terra / Madeira
        terra: {
          DEFAULT: "#2D231E",
          mid: "#3E2F27",
          light: "#5C4235",
          dark: "#1C1510",
        },
        // Verde Musgo
        musgo: {
          DEFAULT: "#2A382B",
          light: "#3D5240",
        },
        // Terracota / Âmbar — CTA exclusivo
        terracota: {
          DEFAULT: "#D96B43",
          dark: "#C85A32",
          deeper: "#B54820",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to top, #0B0C0E 0%, rgba(11,12,14,0.55) 40%, rgba(11,12,14,0.35) 100%)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
