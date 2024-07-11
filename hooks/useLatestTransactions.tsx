import { clusterApiUrl, Connection } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useLatestTransactions = () => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const [latestBlocks, setLatestBlocks] = useState<number[]>([]);
  const fetchLatestTransactions = async () => {
    const lastSlot = await connection.getSlot();
    const latestBlocks = await connection.getBlocks(lastSlot - 10, lastSlot);
    setLatestBlocks(latestBlocks);
    const latestBlockInfosPromises = latestBlocks.map((block) => {
      return connection.getBlock(block, { maxSupportedTransactionVersion: 0 });
    });

    const blockInfos = await Promise.all(latestBlockInfosPromises);

    return blockInfos;
  };
  const { data, status } = useQuery({
    queryFn: fetchLatestTransactions,
    queryKey: ["latestTransaction", ...latestBlocks],
    refetchInterval: 10000,
  });

  return { data, status };
};

export default useLatestTransactions;
