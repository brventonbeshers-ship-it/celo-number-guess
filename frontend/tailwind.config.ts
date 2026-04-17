import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080A12",
        panel: "#111827",
        line: "rgba(255,255,255,0.12)",
        lime: "#A3E635",
        sky: "#38BDF8",
        sun: "#F7C948",
        coral: "#FF6B6B",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;

// tw: 1776460101380
