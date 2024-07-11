"use client";

import useTransactionDetail from "@/hooks/useTransactionDetail";
import { useParams } from "next/navigation";
import React from "react";

const TransactionDetail = () => {
  const params = useParams();
  const { transactionDetail, status } = useTransactionDetail({
    address: params.transaction_hash as string,
  });

  return <div>TransactionDetail</div>;
};

export default TransactionDetail;
