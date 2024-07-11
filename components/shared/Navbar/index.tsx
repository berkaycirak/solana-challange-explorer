import { redditMono } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import WalletButton from "../WalletButton";
import ThemeSwitcher from "../ThemeSwitcher";
import { useWallet } from "@solana/wallet-adapter-react";
import { usePathname } from "next/navigation";
import useBalance from "@/hooks/useBalance";
import WalletSection from "./WalletSection";
import ClusterSwitcher from "../ClusterSwitcher";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary px-12 py-4 shadow-lg">
      {/* Top  */}
      <div className="flex items-center justify-between border-b border-primary-foreground/30 pb-2">
        <p className="text-sm font-bold opacity-85">SOL Price: 200$</p>
        <div className="flex items-center gap-4">
          <ClusterSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
      {/* Main Navbar */}
      <div className="flex h-[5rem] w-full items-center justify-between">
        <Link
          href={"/"}
          className={cn("font-bold text-white", redditMono.className)}
        >
          <h4>
            Sola<span className="text-purple-500">Scan</span>
          </h4>
        </Link>
        <WalletSection />
      </div>
    </nav>
  );
};

export default Navbar;
