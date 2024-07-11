import ListHeaders from "@/components/shared/ListHeaders";
import { timeToHumanRead, truncateString } from "@/utils";
import {
  LAMPORTS_PER_SOL,
  VersionedTransactionResponse,
} from "@solana/web3.js";
import React from "react";

interface TransactionSelfProps {
  signature: string;
  slot: number;
  fee: number;
  status: string;
  timestamp: number;
}

const TransactionSelf = ({
  fee,
  signature,
  slot,
  status,
  timestamp,
}: TransactionSelfProps) => {
  return (
    <div className="rounded p-2">
      <h4>Overview</h4>
      <ListHeaders
        className="bg-primary-foreground/10"
        headers={["Signature 📝", "Block 🧊", "Fee 🔥", "Status", "Time 🕦"]}
      />
      <ul className="flex items-center space-x-6 bg-primary/50 py-2 [&_li]:flex-1 [&_li]:text-center">
        <li>{truncateString(signature, 7, 7)}</li>
        <li>{slot}</li>
        <li>{fee / LAMPORTS_PER_SOL} </li>
        <li>
          <p className="inline-block rounded-xl bg-green-500 px-2 py-1 font-bold text-secondary-foreground">
            {status}
          </p>
        </li>
        <li>{timeToHumanRead(timestamp)}</li>
      </ul>
    </div>
  );
};

export default TransactionSelf;
