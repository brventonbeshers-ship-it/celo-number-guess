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

// abi: 1776619396705

// abi: 1776644372218

// abi: 1776672330425

// abi: 1776679457926

// abi: 1776701359305

// abi: 1776751634150

// abi: 1776781034023

// abi: 1776804484461

// abi: 1776817532864

// abi: 1776834351635

// abi: 1776863127937

// abi: 1776876403352

// abi: 1776889621286

// abi: 1776938908537

// abi: 1776962242469

// abi: 1777001325969

// abi: 1777024795805

// abi: 1777037175914

// abi: 1777066560099

// abi: 1777103231061

// abi: 1777119321045

// abi: 1777169140093

// abi: 1777183950301

// abi: 1777194295685

// abi: 1777214699688

// abi: 1777237481461

// abi: 1777266121351

// abi: 1777328598646

// abi: 1777447940528

// abi: 1777586969611

// abi: 1777613321617

// abi: 1777656680733

// abi: 1777720214091

// abi: 1777756393104

// abi: 1777798328745
