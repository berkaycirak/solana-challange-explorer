"use client";

import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";

const useAddressDetails = ({ address }: { address: string }) => {
  const { connection } = useConnection();
  const publicKey = new PublicKey(address);

  const fetchSignatures = async () => {
    if (publicKey && connection) {
      const signatures = await connection.getSignaturesForAddress(publicKey);
      return signatures;
    }
  };

  const fetchAccountInfo = async () => {
    if (publicKey && connection) {
      const signatures = await connection.getAccountInfoAndContext(publicKey);
      return signatures;
    }
  };

  const { data: signatureHistoryData, status: signatureHistoryStatus } =
    useQuery({
      queryKey: ["signature_", publicKey?.toBase58()],
      queryFn: fetchSignatures,
      enabled: !!address,
    });
  const { data: accountInfoData, status: accountInfoStatus } = useQuery({
    queryKey: ["accountInfo_", publicKey?.toBase58()],
    queryFn: fetchAccountInfo,
    enabled: !!address,
  });

  return {
    signatureHistoryData,
    signatureHistoryStatus,
    accountInfoData,
    accountInfoStatus,
  };
};

export default useAddressDetails;
