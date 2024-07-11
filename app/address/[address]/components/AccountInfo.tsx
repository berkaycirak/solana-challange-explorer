"use client";
import useAddressDetails from "@/hooks/useAddressDetails";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Copy } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const AccountInfo = () => {
  const params = useParams();
  const { accountInfoData, accountInfoStatus } = useAddressDetails({
    address: params.address as string,
  });

  return (
    <div className="mb-8">
      <h4>Account Details</h4>
      {accountInfoData && (
        <div className="space-y-2 divide-y-2 divide-gray-500 rounded-md bg-primary/20 2xl:max-w-2xl [&_li]:w-[50%] [&_li]:p-4 [&_li]:text-center [&_ul]:flex">
          <ul>
            <li className=""> Address</li>
            <li className="flex gap-2">
              {" "}
              <Copy className="transition duration-300 group-hover:text-green-500" />
              <p className="truncate font-bold">{params.address}</p>
            </li>
          </ul>
          <ul>
            <li>Balance</li>
            <li className="font-bold text-green-500">
              {(
                (accountInfoData.value?.lamports as number) / LAMPORTS_PER_SOL
              ).toFixed(3)}{" "}
              SOL
            </li>
          </ul>
          <ul>
            <li>Executable</li>
            <li className="font-bold">
              {String(accountInfoData.value?.executable)}
            </li>
          </ul>
          <ul>
            <li>Assigned Program Id</li>
            <li className="group flex cursor-pointer items-center justify-center gap-2">
              {" "}
              <Copy className="transition duration-300 group-hover:text-green-500" />{" "}
              <p className="font-bold underline">System Program</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
