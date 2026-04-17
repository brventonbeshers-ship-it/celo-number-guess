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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
