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
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <nav className="bg-primary px-12 py-4 shadow-lg">
      {/* Top  */}
      <div className="flex items-center justify-between border-b border-primary-foreground/30 pb-2">
        <Topbar />
      </div>
      {/* Main Navbar */}
      <div className="flex h-[4rem] w-full items-center justify-between">
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
