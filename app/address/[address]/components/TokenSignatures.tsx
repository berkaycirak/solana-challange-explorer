"use client";
import useTokenHoldings from "@/hooks/useTokenHoldings";
import useTokenSignatures from "@/hooks/useTokenSignatures";
import { useParams } from "next/navigation";
import React from "react";

const TokenSignatures = () => {
  const params = useParams();
  const { tokenMintAddresses } = useTokenHoldings({
    address: params.address as string,
  });
  const { tokenSignatures } = useTokenSignatures({
    tokenList: tokenMintAddresses,
  });
  return (
    <div className="min-h-[300px] bg-primary/40 p-12">
      <p className="animate-pulse">That feature will be coming soon...</p>
    </div>
  );
};

export default TokenSignatures;
