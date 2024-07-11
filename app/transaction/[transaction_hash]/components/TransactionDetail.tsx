"use client";

import useTransactionDetail from "@/hooks/useTransactionDetail";
import { useParams } from "next/navigation";
import React from "react";
import TransactionSelf from "./TransactionSelf";
import TransactionInstructions from "./TransactionInstructions";
import TransactionLogs from "./TransactionLogs";

const TransactionDetail = () => {
  const params = useParams();
  const { transactionDetail, status } = useTransactionDetail({
    address: params.transaction_hash as string,
  });

  return (
    <div className="space-y-6 p-12">
      {transactionDetail && (
        <TransactionSelf
          fee={transactionDetail?.meta?.fee as number}
          signature={params.transaction_hash as string}
          slot={transactionDetail.slot}
          status={transactionDetail.meta?.err === null ? "Success" : "Error"}
          timestamp={transactionDetail.blockTime as number}
        />
      )}

      {/* <TransactionInstructions /> */}
      <TransactionLogs
        logs={transactionDetail?.meta?.logMessages as string[]}
      />
    </div>
  );
};

export default TransactionDetail;
