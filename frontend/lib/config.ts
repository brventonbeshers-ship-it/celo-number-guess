export const CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xd3d9252A13F306CF36D0a56079f78a4be1fdAe43";
export const CELO_RPC = "https://forno.celo.org";
export const MINIPAY_FEE_CURRENCY = "0x765DE816845861e75A25fCA122bb6898B8B1282a" as const;
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function shortenAddress(address: string, head = 6, tail = 4): string {
  if (!address) return "";
  return `${address.slice(0, head)}...${address.slice(-tail)}`;
}

export function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return value.toLocaleString();
}

// cfg: 1776460194370

// cfg: 1776479858619

// cfg: 1776493659043

// cfg: 1776518297753
