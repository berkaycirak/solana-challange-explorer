import { HeliusSearchAssetsResponse } from "@/types/helius-search-assets-response.";
import { truncateString } from "@/utils";
import { Coins, Copy, Diamond } from "lucide-react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "sonner";

const Tokens = ({
  tokens,
}: {
  tokens: HeliusSearchAssetsResponse | undefined;
}) => {
  return (
    <>
      {tokens ? (
        tokens.map((token) => (
          <ul
            className="flex items-center justify-between [&_li]:flex-1 [&_li]:text-center"
            key={token.token_info.associated_token_address}
          >
            <li className="flex items-center justify-start gap-2 pl-2">
              {token.content.metadata.token_standard
                ?.toLowerCase()
                .includes("non") ? (
                <Diamond size={16} />
              ) : (
                <Coins size={16} />
              )}

              {Object.values(token.content.metadata).length > 0
                ? token.content.metadata.name
                : "Unknown Token"}
            </li>
            <li>
              {Object.values(token.content.metadata).length > 0
                ? token.content.metadata.symbol
                : "-"}
            </li>
            <li className="rounded-md border border-dashed bg-orange-300/10 font-bold text-orange-200">
              {token.content.metadata.token_standard || "-"}
            </li>

            <li>
              {token.token_info.balance /
                Math.pow(10, token.token_info.decimals)}
            </li>
            <li
              className="group flex cursor-pointer items-center justify-center gap-2 truncate hover:text-green-400/70"
              onClick={(e) => {
                toast("Mint address is copied to clipboard.");
                navigator.clipboard.writeText(token.id);
              }}
            >
              <Copy size={14} className="invisible group-hover:visible" />
              {truncateString(token.id, 7, 7)}
            </li>
          </ul>
        ))
      ) : (
        <Skeleton baseColor="grey" />
      )}
    </>
  );
};

export default Tokens;
