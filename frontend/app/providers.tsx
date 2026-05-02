"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#A3E635",
            accentColorForeground: "#07110C",
            borderRadius: "medium",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// providers: 1776460296300

// providers: 1776479854368

// providers: 1776493747548

// providers: 1776518433145

// providers: 1776549714636

// providers: 1776585345695

// providers: 1776619342011

// providers: 1776644555262

// providers: 1776672131928

// providers: 1776679561356

// providers: 1776701451968

// providers: 1776751627639

// providers: 1776781101618

// providers: 1776804349979

// providers: 1776817421379

// providers: 1776834347343

// providers: 1776863055213

// providers: 1776876196723

// providers: 1776889787697

// providers: 1776939050589

// providers: 1776962368829

// providers: 1777001411464

// providers: 1777024850641

// providers: 1777037118194

// providers: 1777066514145

// providers: 1777103284463

// providers: 1777119180954

// providers: 1777183984044

// providers: 1777214783186

// providers: 1777278546193

// providers: 1777328554965

// providers: 1777356181548

// providers: 1777586929219

// providers: 1777656920668

// providers: 1777720017049

// providers: 1777756296068
