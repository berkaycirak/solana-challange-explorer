import { timeToHumanRead, truncateString } from "@/utils";
import { ConfirmedSignatureInfo } from "@solana/web3.js";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignatureSelf = ({
  err,
  memo,
  signature,
  slot,
  blockTime,
  confirmationStatus,
}: ConfirmedSignatureInfo) => {
  return (
    <ul className="flex items-center [&_li]:flex-1 [&_li]:cursor-pointer [&_li]:text-center">
      <Link
        href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}
        target="_blank"
        className="group flex flex-1 items-center justify-center gap-4 text-purple-500 hover:underline"
      >
        {truncateString(signature, 7, 7)}
        <ExternalLink size={16} className="invisible group-hover:visible" />
      </Link>
      <li>{slot}</li>
      <li className="opacity-70"> {timeToHumanRead(blockTime as number)}</li>
      <li>
        <p className="inline-block rounded-xl bg-green-500 px-2 py-1 font-bold text-secondary-foreground">
          {confirmationStatus}
        </p>
      </li>
    </ul>
  );
};

export default SignatureSelf;
