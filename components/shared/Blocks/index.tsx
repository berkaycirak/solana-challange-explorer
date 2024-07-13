"use client";

import { redditMono } from "@/app/fonts";
import useLatestTransactions from "@/hooks/useLatestTransactions";
import {
  subscribeToTransactions,
  unsubscribeFromTransactions,
} from "@/lib/solana";
import { cn } from "@/lib/utils";
import { debounce, timeToHumanRead, truncateString } from "@/utils";
import { clusterApiUrl, Connection, Logs, LogsCallback } from "@solana/web3.js";
import React, { useCallback, useEffect, useState } from "react";
import ListHeaders from "../ListHeaders";
import { Copy, TriangleAlert } from "lucide-react";
import { toast } from "sonner";

interface Transaction {
  signature: string;
  slot: number;
  logs: string[];
  timestamp: number;
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [subscriptionId, setSubscriptionId] = useState<number | null>(null);
  const { data, status } = useLatestTransactions();

  const handleNewTransaction: LogsCallback = useCallback(
    debounce(async (logs: Logs, context) => {
      const blockTime = await new Connection(
        clusterApiUrl("devnet"),
        "confirmed",
      ).getBlockTime(context.slot);

      const newTransaction: Transaction = {
        signature: logs.signature,
        slot: context.slot,
        logs: logs.logs,
        timestamp: blockTime as number,
      };
      setTransactions((prevTransactions) =>
        [newTransaction, ...prevTransactions].slice(0, 10),
      );
    }, 10000), // Update state at most once every 500ms
    [],
  );

  //   useEffect(() => {
  //     const subscribe = async () => {
  //       const id = await subscribeToTransactions(handleNewTransaction);
  //       setSubscriptionId(id);
  //     };

  //     subscribe();

  //     return () => {
  //       if (subscriptionId !== null) {
  //         unsubscribeFromTransactions(subscriptionId);
  //       }
  //     };
  //   }, [handleNewTransaction, subscriptionId]);

  return (
    <div>
      <h4 className="my-12">Latest Blocks 🔥 </h4>

      <ListHeaders headers={["Blockhash", "Txs", "Block", "Time"]} />
      {status === "success" &&
        data &&
        data.map((transaction) => (
          <ul
            key={transaction?.blockhash}
            className={cn(
              "flex items-center justify-between bg-card dark:bg-primary/40 [&_li]:flex-1 [&_li]:text-center",
              redditMono.className,
            )}
          >
            <li
              className="group flex cursor-pointer items-center justify-center gap-2 truncate hover:text-green-400/70"
              onClick={(e) => {
                toast("Block address is copied to clipboard.");
                navigator.clipboard.writeText(transaction?.blockhash as string);
              }}
            >
              <Copy size={14} className="invisible group-hover:visible" />
              {truncateString(transaction?.blockhash as string, 7, 7)}
            </li>

            <li className="font-bold text-green-400">
              {transaction?.transactions.length}
            </li>
            <li>{transaction?.parentSlot}</li>
            <li className="opacity-75">
              {timeToHumanRead(transaction?.blockTime as number)}
            </li>
          </ul>
        ))}
      <p className="mt-2 flex items-center gap-1">
        <TriangleAlert />
        Since there is a{" "}
        <span className="rounded-lg bg-green-500 px-2 py-[1px] font-bold text-black">
          public RPC{" "}
        </span>
        endpoint, it is limited to get more blocks. Paid services might be
        useful to show more blocks here.
      </p>
    </div>
  );
};

export default Transactions;
