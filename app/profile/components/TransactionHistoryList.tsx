"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import TransactionEvent from "./TransactionEvent";
import { cn } from "@/lib/utils";
import { redditMono } from "@/app/fonts";
import ListHeaders from "./ListHeaders";
import { History } from "lucide-react";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const TransactionHistoryList = () => {
  // Get info about solana wallet adapter
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const params = useParams();
  console.log(params);

  const fetchSignatures = async () => {
    if (publicKey && connection) {
      const signatures = await connection.getSignaturesForAddress(publicKey);

      return signatures;
    }
  };

  const { data, status } = useQuery({
    queryKey: ["signature_", publicKey?.toBase58()],
    queryFn: fetchSignatures,
  });

  return (
    <div className="p-12">
      <h4 className={cn("mb-2 flex items-center gap-3", redditMono.className)}>
        Transaction History <History size={26} />
      </h4>
      <ListHeaders headers={["Signature", "Slot", "Time", "Status"]} />
      <ul
        className={cn(
          "flex flex-col gap-2 rounded bg-primary/20 py-2 backdrop-blur-lg",
          redditMono.className,
        )}
      >
        {status === "pending"
          ? "Loading..."
          : data?.map((signature) => (
              <TransactionEvent key={signature.slot} {...signature} />
            ))}
      </ul>
    </div>
  );
};
export default TransactionHistoryList;
