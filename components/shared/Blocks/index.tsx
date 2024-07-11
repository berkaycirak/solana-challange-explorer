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
              "flex items-center justify-between bg-primary/40 [&_li]:flex-1",
              redditMono.className,
            )}
          >
            <li>{truncateString(transaction?.blockhash as string, 7, 7)}</li>
            <li>{transaction?.transactions.length}</li>
            <li>{transaction?.parentSlot}</li>
            <li>{timeToHumanRead(transaction?.blockTime as number)}</li>
          </ul>
        ))}
    </div>
  );
};

export default Transactions;
