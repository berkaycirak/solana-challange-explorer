import { HeliusSearchAssetsResponse } from "@/types/helius-search-assets-response.";
import { truncateString } from "@/utils";
import { Copy } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const Tokens = ({
  tokens,
}: {
  tokens: HeliusSearchAssetsResponse | undefined;
}) => {
  return (
    <>
      {tokens?.map((token) => (
        <ul
          className="flex items-center justify-between [&_li]:flex-1 [&_li]:text-center"
          key={token.token_info.associated_token_address}
        >
          <li>
            {Object.values(token.content.metadata).length > 0
              ? token.content.metadata.name
              : "Unknown Token"}
          </li>
          <li>
            {Object.values(token.content.metadata).length > 0
              ? token.content.metadata.symbol
              : "-"}
          </li>
          <li>
            {token.token_info.balance / Math.pow(10, token.token_info.decimals)}
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
      ))}
    </>
  );
};

export default Tokens;
