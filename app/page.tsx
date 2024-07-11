import Search from "@/components/shared/Search";
import Blocks from "@/components/shared/Blocks";
import { Input } from "@/components/ui/input";
import { useConnection } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import Image from "next/image";
import ListHeaders from "@/components/shared/ListHeaders";

export default function Home() {
  return (
    <section className="container">
      <Search />
      {/* Latest Blocks */}
      <Blocks />
    </section>
  );
}
