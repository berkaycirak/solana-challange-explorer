import { available_chains } from "@/available_chains";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useSolPrice = () => {
  const fetchPrice = async () => {
    const price = await axios.get(available_chains.devnet.solanaPriceUrl);
    console.log(price);
    return price.data.solana.usd;
  };

  const { data, status } = useQuery({
    queryFn: fetchPrice,
    queryKey: ["sol_price"],
    refetchInterval: 30 * 60 * 1000, //Every 30 min
  });

  console.log(status);

  return { data, status };
};

export default useSolPrice;
