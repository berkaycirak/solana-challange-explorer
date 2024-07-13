"use client";
import useTokenHoldings from "@/hooks/useTokenHoldings";
import { truncateString } from "@/utils";
import { useParams } from "next/navigation";
import React from "react";

import Tokens from "./Tokens";
import ListHeaders from "@/components/shared/ListHeaders";
import { Coins, Diamond } from "lucide-react";

const TokenHoldings = () => {
  const params = useParams();
  const { fungibleTokens, nonFungibleTokens } = useTokenHoldings({
    address: params.address as string,
  });

  return (
    <section className="flex-1 py-2 xl:max-w-screen-lg">
      <div className="flex items-center gap-4">
        <h4>Token Holdings</h4>
        <div className="flex gap-4 rounded-md bg-primary-foreground/80 px-2 py-1 font-bold text-black [&_span]:flex [&_span]:gap-1">
          <span>
            <Coins size={20} /> {fungibleTokens?.length}
          </span>
          <span>
            <Diamond size={20} /> {nonFungibleTokens?.length}
          </span>
        </div>
      </div>

      <div className="rounded-md bg-primary/20">
        <ListHeaders headers={["Name", "Symbol", "Balance", "Mint Address"]} />
        <div className="space-y-2 py-4">
          {/* Fungible Tokens */}
          <Tokens tokens={fungibleTokens} />
          {/* NFTs */}
          <Tokens tokens={nonFungibleTokens} />
        </div>
      </div>
    </section>
  );
};

export default TokenHoldings;
