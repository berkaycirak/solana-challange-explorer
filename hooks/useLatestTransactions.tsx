import { useConnection } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useLatestTransactions = () => {
  const { connection } = useConnection();
  const [latestBlocks, setLatestBlocks] = useState<number[]>([]);

  // To fetch latest block transactions
  const fetchLatestTransactions = async () => {
    const lastSlot = await connection.getSlot();
    // Get the last 20 block numbers
    const latestBlocks = await connection.getBlocks(lastSlot - 3, lastSlot);
    setLatestBlocks(latestBlocks);
    // Map those blocks numbers to fetch block transaction information
    const latestBlockInfosPromises = latestBlocks.map((block) => {
      return connection.getBlock(block, { maxSupportedTransactionVersion: 0 });
    });
    // Promise.all them to resolve
    const blockInfos = await Promise.all(latestBlockInfosPromises);
    return blockInfos;
  };
  const { data, status } = useQuery({
    queryFn: fetchLatestTransactions,
    queryKey: ["latestTransaction"],
    refetchInterval: 1 * 60 * 1000, // Every 1 mins
  });

  return { data, status };
};

export default useLatestTransactions;
