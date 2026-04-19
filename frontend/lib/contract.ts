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

// abi: 1776460150862

// abi: 1776479635094

// abi: 1776493820282

// abi: 1776518382172

// abi: 1776549815715

// abi: 1776585352182
