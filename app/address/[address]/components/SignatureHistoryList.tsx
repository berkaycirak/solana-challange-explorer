"use client";

import React from "react";
import SignatureSelf from "./SignatureSelf";
import { cn } from "@/lib/utils";
import { redditMono } from "@/app/fonts";
import ListHeaders from "@/components/shared/ListHeaders";
import { History } from "lucide-react";
import { useParams } from "next/navigation";

import useAddressDetails from "@/hooks/useAddressDetails";
import Skeleton from "react-loading-skeleton";

const SignatureHistoryList = () => {
  // Get info about solana wallet adapter
  const params = useParams();
  const { signatureHistoryData, signatureHistoryStatus } = useAddressDetails({
    address: params.address as string,
  });

  return (
    <div>
      <h4 className={cn("mb-2 flex items-center gap-3", redditMono.className)}>
        Transaction History <History size={26} />
      </h4>
      <ListHeaders headers={["Signature", "Slot", "Time", "Status"]} />
      <ul
        className={cn(
          "flex flex-col gap-2 overflow-y-auto rounded bg-primary/20 py-2 backdrop-blur-lg md:h-[500px] 2xl:h-[700px]",
          redditMono.className,
        )}
      >
        {signatureHistoryStatus === "pending" ? (
          <Skeleton count={20} baseColor="grey" />
        ) : (
          signatureHistoryData?.map((signature) => (
            <SignatureSelf key={signature.slot} {...signature} />
          ))
        )}
      </ul>
    </div>
  );
};
export default SignatureHistoryList;
