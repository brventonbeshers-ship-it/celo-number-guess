"use client";

import { useCallback, useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";

interface MiniPayState {
  isMiniPay: boolean;
  address: string | null;
  isConnected: boolean;
  connect: () => Promise<void>;
}

let hasAttemptedMiniPayAutoConnect = false;

export function useMiniPay(): MiniPayState {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const connect = useCallback(async () => {
    if (!isMiniPay || isConnected) return;
    const connector = connectors.find((item) => item.id === "injected") ?? connectors[0];
    if (!connector) return;
    try {
      await connectAsync({ connector });
    } catch (error) {
      console.warn("MiniPay connection failed", error);
    }
  }, [connectAsync, connectors, isConnected, isMiniPay]);

  useEffect(() => {
    if (!isMiniPay || isConnected || hasAttemptedMiniPayAutoConnect) return;
    hasAttemptedMiniPayAutoConnect = true;
    void connect();
  }, [connect, isConnected, isMiniPay]);

  return { isMiniPay, address: address ?? null, isConnected, connect };
}

// minipay: 1776460233691

// minipay: 1776479759217

// minipay: 1776493868634

// minipay: 1776518302998

// minipay: 1776549917319

// minipay: 1776585466589

// minipay: 1776619181352

// minipay: 1776644323508

// minipay: 1776672271444

// minipay: 1776679600880

// minipay: 1776701357058

// minipay: 1776751806367

// minipay: 1776781022303

// minipay: 1776804537925

// minipay: 1776817338175

// minipay: 1776834411127

// minipay: 1776863117420

// minipay: 1776876205210

// minipay: 1776889802697

// minipay: 1776939061326

// minipay: 1776962373088

// minipay: 1777001355079

// minipay: 1777024965161

// minipay: 1777037226035
