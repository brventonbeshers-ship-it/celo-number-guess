"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useMiniPay } from "@/hooks/useMiniPay";

export default function Header() {
  const { isMiniPay, isConnected, connect } = useMiniPay();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div>
          <h1 className="text-xl font-semibold tracking-normal text-white">Celo Number Guess</h1>
          <p className="text-sm text-slate-400">Choose 1 to 100, guess on-chain.</p>
        </div>
        {isMiniPay ? (
          !isConnected && (
            <button
              type="button"
              onClick={() => void connect()}
              className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Connect MiniPay
            </button>
          )
        ) : (
          <ConnectButton />
        )}
      </div>
    </header>
  );
}

// header: 1776460092678

// header: 1776479574919

// header: 1776493860131

// header: 1776518253240

// header: 1776549857134

// header: 1776585461066

// header: 1776644341495

// header: 1776672414833

// header: 1776679491592

// header: 1776701307321

// header: 1776751748421

// header: 1776781164455

// header: 1776804397092

// header: 1776817419122

// header: 1776834460566

// header: 1776862986519

// header: 1776876296951

// header: 1776889839505

// header: 1776939011892

// header: 1776962360092

// header: 1777001233385

// header: 1777025021009

// header: 1777037134585

// header: 1777066562344

// header: 1777103295228

// header: 1777119459515

// header: 1777169289078

// header: 1777184153988

// header: 1777194297938

// header: 1777214944946

// header: 1777265883500

// header: 1777328510032

// header: 1777447830165

// header: 1777586937733

// header: 1777656768772

// header: 1777720244549
