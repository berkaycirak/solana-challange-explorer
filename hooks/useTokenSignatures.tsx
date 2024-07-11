import { available_chains } from "@/available_chains";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useTokenSignatures = ({
  tokenList,
}: {
  tokenList: string[] | undefined;
}) => {
  const fetchTokenSignatures = async () => {
    if (tokenList) {
      const promises = tokenList.map((token) =>
        axios.get(
          `https://api-devnet.helius.xyz/v0/addresses/${token}/transactions?api-key=267ab68a-2bf9-4add-a692-5187a0b6d9f8`,
        ),
      );

      const tokenSignatures = await Promise.all(promises);

      return tokenSignatures;
    }
  };

  const { data, status } = useQuery({
    queryKey: [`token_signatures`, tokenList],
    queryFn: fetchTokenSignatures,
    enabled: tokenList && tokenList.length > 0,
    refetchInterval: 60000,
  });

  console.log(data);

  return {
    tokenSignatures: data,
    status,
  };
};

export default useTokenSignatures;
