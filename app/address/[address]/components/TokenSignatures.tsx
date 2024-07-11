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
  return <div>TokenSignatures</div>;
};

export default TokenSignatures;
