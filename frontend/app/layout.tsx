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

// layout: 1776479670679

// layout: 1776493688884

// layout: 1776518317964

// layout: 1776549749928

// layout: 1776585246314

// layout: 1776644414527

// layout: 1776672370339

// layout: 1776679550616

// layout: 1776701295563

// layout: 1776751750689

// layout: 1776781162213

// layout: 1776804352231

// layout: 1776817535132

// layout: 1776834365399

// layout: 1776863178966

// layout: 1776876394877

// layout: 1776889626540

// layout: 1776938903051

// layout: 1776962362329

// layout: 1777001323701

// layout: 1777025034001

// layout: 1777037126997

// layout: 1777066469966

// layout: 1777103430107

// layout: 1777119269007

// layout: 1777169251210

// layout: 1777183942798

// layout: 1777194205313

// layout: 1777214787424

// layout: 1777237486714

// layout: 1777265961617

// layout: 1777328691541
