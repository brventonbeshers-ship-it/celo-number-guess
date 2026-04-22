"use client";

import { useEffect, useMemo, useState } from "react";
import { createPublicClient, encodeFunctionData, http } from "viem";
import { celo } from "viem/chains";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { useMiniPay } from "@/hooks/useMiniPay";
import { contractConfig } from "@/lib/contract";
import {
  CELO_RPC,
  ZERO_ADDRESS,
  formatNumber,
  shortenAddress,
} from "@/lib/config";
import { sendMiniPayTransaction } from "@/lib/minipayTx";

const publicClient = createPublicClient({ chain: celo, transport: http(CELO_RPC) });

interface GuessStats {
  guesses: number;
  wins: number;
  lastGuess: number;
  lastSecret: number;
  lastDistance: number;
}

interface LeaderboardRow {
  address: string;
  score: number;
}

export default function Game() {
  const { address, isConnected } = useAccount();
  const { isMiniPay } = useMiniPay();
  const [guess, setGuess] = useState(50);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [stats, setStats] = useState<GuessStats>({
    guesses: 0,
    wins: 0,
    lastGuess: 0,
    lastSecret: 0,
    lastDistance: 0,
  });
  const [leaderboard, setLeaderboard] = useState<LeaderboardRow[]>([]);
  const [loadError, setLoadError] = useState(false);
  const [txError, setTxError] = useState<string | null>(null);
  const [miniPayHash, setMiniPayHash] = useState<`0x${string}`>();

  const { sendTransactionAsync, data: hash, isPending } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: miniPayHash ?? hash });

  const busy = isPending || isConfirming;
  const winRate = stats.guesses === 0 ? 0 : Math.round((stats.wins / stats.guesses) * 100);
  const lastOutcome = useMemo(() => {
    if (!stats.guesses) return "No guess yet";
    return stats.lastDistance <= 3 ? "Win" : "Miss";
  }, [stats.guesses, stats.lastDistance]);

  useEffect(() => {
    void loadStats();
  }, [address]);

  useEffect(() => {
    if (isSuccess) void loadStats();
  }, [isSuccess]);

  async function loadStats() {
    try {
      setLoadError(false);

      const total = (await publicClient.readContract({
        ...contractConfig,
        functionName: "totalGuesses",
      })) as bigint;
      setTotalGuesses(Number(total));

      if (address) {
        const [guesses, wins, lastGuess, lastSecret, lastDistance] = (await publicClient.readContract({
          ...contractConfig,
          functionName: "getUserStats",
          args: [address],
        })) as readonly [bigint, bigint, bigint, bigint, bigint];

        setStats({
          guesses: Number(guesses),
          wins: Number(wins),
          lastGuess: Number(lastGuess),
          lastSecret: Number(lastSecret),
          lastDistance: Number(lastDistance),
        });
      }

      const [addresses, scores] = (await publicClient.readContract({
        ...contractConfig,
        functionName: "getLeaderboard",
      })) as readonly [readonly string[], readonly bigint[]];

      const rows: LeaderboardRow[] = [];
      for (let i = 0; i < 10; i++) {
        const rowAddress = addresses[i];
        const score = Number(scores[i]);
        if (rowAddress && rowAddress !== ZERO_ADDRESS && score > 0) {
          rows.push({ address: rowAddress, score });
        }
      }
      setLeaderboard(rows);
    } catch {
      setLoadError(true);
    }
  }

  async function handleGuess() {
    if (!isConnected || !address || busy) return;

    setTxError(null);
    setMiniPayHash(undefined);
    try {
      const data = encodeFunctionData({
        abi: contractConfig.abi,
        functionName: "guess",
        args: [BigInt(guess)],
      });

      if (isMiniPay) {
        const nextHash = await sendMiniPayTransaction(contractConfig.address, data);
        setMiniPayHash(nextHash);
      } else {
        await sendTransactionAsync({
          account: address,
          to: contractConfig.address,
          data,
        } as Parameters<typeof sendTransactionAsync>[0]);
      }
    } catch (error) {
      setTxError(error instanceof Error ? error.message.slice(0, 180) : "Transaction rejected or failed.");
    }
  }

  function setClampedGuess(value: number) {
    if (!Number.isFinite(value)) return;
    setGuess(Math.min(100, Math.max(1, Math.round(value))));
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="panel p-5 md:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase text-lime">On-chain game</p>
              <h2 className="mt-1 text-3xl font-semibold tracking-normal text-white">Guess the number</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 text-right sm:grid-cols-3">
              <Stat label="Total guesses" value={formatNumber(totalGuesses)} />
              <Stat label="Your wins" value={formatNumber(stats.wins)} />
              <Stat label="Win rate" value={`${winRate}%`} />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[240px_minmax(0,1fr)]">
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-line bg-ink/60 p-6">
              <div className="flex h-40 w-40 items-center justify-center rounded-lg border border-line bg-gradient-to-br from-lime via-sky to-sun text-5xl font-black text-ink shadow-soft">
                {stats.guesses ? stats.lastSecret : "?"}
              </div>
              <span className="text-sm text-slate-400">Hidden number</span>
            </div>

            <div className="flex flex-col justify-between gap-5">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">Your guess</span>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={guess}
                    onChange={(event) => setClampedGuess(Number(event.target.value))}
                    className="h-10 w-24 rounded-md border border-line bg-white/5 px-3 text-right text-white"
                  />
                </div>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={guess}
                  onChange={(event) => setClampedGuess(Number(event.target.value))}
                  className="h-10 w-full"
                />
                <div className="mt-1 flex justify-between text-xs text-slate-500">
                  <span>1</span>
                  <span>Within 3 wins</span>
                  <span>100</span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <Result label="Last guess" value={stats.guesses ? stats.lastGuess : "-"} />
                <Result label="Distance" value={stats.guesses ? stats.lastDistance : "-"} />
                <Result label="Outcome" value={lastOutcome} accent={lastOutcome === "Win"} />
              </div>

              <button
                type="button"
                onClick={handleGuess}
                disabled={!isConnected || busy}
                className="h-14 rounded-lg bg-lime px-5 text-base font-semibold text-ink transition hover:bg-[#B8F65C] disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
              >
                {busy ? "Confirming..." : isConnected ? "Guess on Celo" : "Connect wallet"}
              </button>
              {loadError && (
                <p className="text-sm text-coral">Contract data will load after deployment address is set.</p>
              )}
              {txError && <p className="text-sm text-coral">{txError}</p>}
            </div>
          </div>
        </div>
      </div>

      <aside className="panel p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Leaderboard</h3>
          <span className="text-sm text-slate-400">Wins</span>
        </div>
        <div className="space-y-2">
          {leaderboard.length === 0 ? (
            <p className="rounded-md border border-line bg-white/5 px-3 py-4 text-sm text-slate-400">
              No winning guesses yet.
            </p>
          ) : (
            leaderboard.map((row, index) => (
              <div
                key={row.address}
                className="flex items-center justify-between rounded-md border border-line bg-white/5 px-3 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 text-sm font-semibold text-slate-500">#{index + 1}</span>
                  <span className="text-sm text-white">
                    {row.address === address ? "You" : shortenAddress(row.address)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-sun">{formatNumber(row.score)}</span>
              </div>
            ))
          )}
        </div>
      </aside>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-white/5 px-3 py-2">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

function Result({ label, value, accent = false }: { label: string; value: number | string; accent?: boolean }) {
  return (
    <div className="rounded-md border border-line bg-ink/60 px-3 py-3">
      <div className={`text-lg font-semibold ${accent ? "text-lime" : "text-white"}`}>{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

// game: 1776460189185

// game: 1776479720109

// game: 1776493664565

// game: 1776518360407

// game: 1776549754458

// game: 1776585396773

// game: 1776619442924

// game: 1776644379711

// game: 1776672368096

// game: 1776679343238

// game: 1776701445456

// game: 1776751737725

// game: 1776781046018

// game: 1776804532671

// game: 1776817402899

// game: 1776834308135

// game: 1776862969511
