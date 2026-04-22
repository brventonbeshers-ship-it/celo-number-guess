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

// tw: 1776479812816

// tw: 1776493815029

// tw: 1776518308242

// tw: 1776549914764

// tw: 1776585454537

// tw: 1776644548736

// tw: 1776672283190

// tw: 1776679504337

// tw: 1776701407074

// tw: 1776751791308

// tw: 1776781085408

// tw: 1776804335958

// tw: 1776817539398
