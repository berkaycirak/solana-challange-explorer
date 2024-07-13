import { redditMono } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import WalletSection from "./WalletSection";
import Link from "next/link";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <nav className="bg-primary-foreground px-12 py-4 shadow-lg dark:bg-primary">
      {/* Top  */}
      <div className="flex items-center justify-between border-b pb-2 dark:border-primary-foreground/30">
        <Topbar />
      </div>
      {/* Main Navbar */}
      <div className="flex h-[4rem] w-full items-center justify-between">
        <Link
          href={"/"}
          className={cn(
            "font-bold text-primary dark:text-primary-foreground",
            redditMono.className,
          )}
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
