import { Connection, LogsCallback } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

export async function subscribeToTransactions(
  callback: LogsCallback,
): Promise<number> {
  return connection.onLogs("all", callback);
}

export async function unsubscribeFromTransactions(
  subscriptionId: number,
): Promise<void> {
  await connection.removeOnLogsListener(subscriptionId);
}
