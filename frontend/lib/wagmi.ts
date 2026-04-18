import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { celo } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Celo Number Guess",
  projectId: "celo-number-guess-minipay-app",
  chains: [celo],
  ssr: true,
});

// wagmi: 1776460184002

// wagmi: 1776479674923

// wagmi: 1776493822533

// wagmi: 1776518363663
