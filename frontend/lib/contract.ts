import { CONTRACT_ADDRESS } from "./config";

export const CELO_NUMBER_GUESS_ABI = [
  {
    inputs: [{ name: "number", type: "uint256" }],
    name: "guess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalGuesses",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "player", type: "address" }],
    name: "getUserStats",
    outputs: [
      { name: "guesses", type: "uint256" },
      { name: "wins", type: "uint256" },
      { name: "latestGuess", type: "uint256" },
      { name: "latestSecret", type: "uint256" },
      { name: "latestDistance", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLeaderboard",
    outputs: [
      { name: "", type: "address[10]" },
      { name: "", type: "uint256[10]" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const contractConfig = {
  address: CONTRACT_ADDRESS as `0x${string}`,
  abi: CELO_NUMBER_GUESS_ABI,
} as const;
