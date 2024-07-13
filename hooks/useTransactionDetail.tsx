import { useConnection } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Connection,
  GetVersionedTransactionConfig,
} from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface UseTransactionDetailProps {
  address: string;
}

const useTransactionDetail = ({ address }: UseTransactionDetailProps) => {
  const { connection } = useConnection();

  const fetchTransactionDetail = async () => {
    const transaction = await connection.getTransaction(address, {
      maxSupportedTransactionVersion: 0,
    });
    console.log(transaction);
    return transaction;
  };

  const { data, status } = useQuery({
    queryFn: fetchTransactionDetail,
    queryKey: [`transaction_detail_${address}`],
  });

  return { transactionDetail: data, status };
};

export default useTransactionDetail;
