import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { celo } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Celo Number Guess",
  projectId: "celo-number-guess-minipay-app",
  chains: [celo],
  ssr: true,
});

// wagmi: 1776460184002
