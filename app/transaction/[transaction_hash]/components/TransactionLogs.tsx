import { redditMono } from "@/app/fonts";
import React from "react";

interface TransactionLogsProps {
  logs: string[];
}
const TransactionLogs = ({ logs }: TransactionLogsProps) => {
  return (
    <div>
      <h4>Logs</h4>
      {logs?.map((log) => (
        <p className={redditMono.className} key={log}>
          {log}
        </p>
      ))}
    </div>
  );
};

export default TransactionLogs;
