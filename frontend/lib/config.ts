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

// cfg: 1776549919893

// cfg: 1776585290444

// cfg: 1776619450434

// cfg: 1776644472172

// cfg: 1776672378828

// cfg: 1776679509827

// cfg: 1776701501143

// cfg: 1776751673346

// cfg: 1776780968316

// cfg: 1776804466218

// cfg: 1776817474724

// cfg: 1776834238766

// cfg: 1776863114157

// cfg: 1776876452218

// cfg: 1776889797453

// cfg: 1776939098232

// cfg: 1776962303499

// cfg: 1777001413703

// cfg: 1777024812829

// cfg: 1777037129292

// cfg: 1777066365738

// cfg: 1777103338877

// cfg: 1777119369360

// cfg: 1777183987289

// cfg: 1777214817283

// cfg: 1777266083536

// cfg: 1777278550450

// cfg: 1777328561096

// cfg: 1777356253127
