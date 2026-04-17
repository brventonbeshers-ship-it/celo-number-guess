import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celo Number Guess",
  description: "On-chain number guessing game built for Celo and MiniPay.",
  openGraph: {
    title: "Celo Number Guess",
    description: "Guess numbers on Celo, track accuracy, and climb the leaderboard.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="talentapp:project_verification"
          content="77f9500791875e4f0caaf2ca9de77646513b0048d4f48955aaec343084a12bd93f0677f50fad74d5a0f9f702048a46e6ffa05df4f39317a2682ff7d9a97ef0af"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// layout: 1776460348538
