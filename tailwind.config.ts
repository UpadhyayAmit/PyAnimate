import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#a8b3be",
        bright: "#e2eaf3",
        cream: "#0d1117",
        parchment: "#161b22",
        signal: "#ff6535",
        amber: "#fbbf24",
        wave: "#38bdf8",
        leaf: "#4ade80",
        gold: "#fcd34d",
        mist: "#1c2128",
        neon: "#a78bfa",
        rose: "#fb7185",
      },
      boxShadow: {
        panel: "0 24px 60px rgba(8, 17, 31, 0.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(8, 17, 31, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 17, 31, 0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
