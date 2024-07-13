"use client";
import useAddressDetails from "@/hooks/useAddressDetails";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Copy } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import Skeleton from "react-loading-skeleton";

const AccountInfo = () => {
  const params = useParams();
  const { accountInfoData, accountInfoStatus } = useAddressDetails({
    address: params.address as string,
  });

  return (
    <div className="mb-8">
      <h4>Account Details</h4>

      <div className="space-y-2 divide-y-2 divide-gray-500 rounded-md bg-primary/20 xl:min-w-[600px] 2xl:max-w-2xl [&_li]:w-[50%] [&_li]:p-4 [&_li]:text-center [&_ul]:flex">
        <ul>
          <li className=""> Address</li>
          <li className="flex gap-2">
            {accountInfoData ? (
              <>
                {" "}
                <Copy className="transition duration-300 group-hover:text-green-500" />
                <p className="truncate font-bold">{params.address}</p>
              </>
            ) : (
              <Skeleton baseColor="grey" containerClassName="flex-1" />
            )}
          </li>
        </ul>
        <ul>
          <li>Balance</li>
          <li className="font-bold text-green-500">
            {accountInfoData ? (
              <span>
                {" "}
                {(
                  (accountInfoData.value?.lamports as number) / LAMPORTS_PER_SOL
                ).toFixed(3)}
                SOL
              </span>
            ) : (
              <Skeleton baseColor="grey" />
            )}
          </li>
        </ul>
        <ul>
          <li>Executable</li>
          <li className="font-bold">
            {accountInfoData ? (
              String(accountInfoData.value?.executable)
            ) : (
              <Skeleton baseColor="grey" />
            )}
          </li>
        </ul>
        <ul>
          <li>Assigned Program Id</li>
          <li className="group flex cursor-pointer items-center justify-center gap-2">
            {accountInfoData ? (
              <>
                {" "}
                <Copy
                  className="transition duration-300 group-hover:text-green-500"
                  size={16}
                />
                <p className="font-bold underline">System Program</p>
              </>
            ) : (
              <Skeleton baseColor="grey" containerClassName="flex-1" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountInfo;
