import { available_chains } from "@/available_chains";
import { HeliusSearchAssetsResponse } from "@/types/helius-search-assets-response.";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTokenHoldings = ({ address }: { address: string }) => {
  const fetchTokenHoldings = async () => {
    const tokenAssets = await axios.post(available_chains.devnet.heliusUrl, {
      jsonrpc: "2.0",
      id: "",
      method: "searchAssets",
      params: {
        page: 1,
        limit: 100,
        ownerAddress: address,
        tokenType: "all",
      },
    });
    const tokens = tokenAssets.data.result.items as HeliusSearchAssetsResponse;

    return tokens;
  };

  const { data, status } = useQuery({
    queryKey: [`token_holdings_${address}`],
    queryFn: fetchTokenHoldings,
  });

  return {
    tokenMintAddresses: data?.map((token) => token.id),
    fungibleTokens: data?.filter((token) =>
      token.interface.toLowerCase().includes("fungible"),
    ),
    nonFungibleTokens: data?.filter(
      (token) => !token.interface.toLowerCase().includes("fungible"),
    ),
    status,
  };
};

export default useTokenHoldings;
