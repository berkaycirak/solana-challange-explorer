import Search from "@/components/shared/Search";
import Transactions from "@/components/shared/Transactions";
import { Input } from "@/components/ui/input";
import { useConnection } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container">
      <Search />
      {/* Transactions */}
      <Transactions />
    </section>
  );
}
