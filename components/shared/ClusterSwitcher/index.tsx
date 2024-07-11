"use client";
import { redditMono } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";

const ClusterSwitcher = () => {
  return (
    <div className={cn("flex items-center gap-1", redditMono.className)}>
      <span className="block h-[10px] w-[10px] animate-pulse rounded-full bg-green-400"></span>
      <p className="flex cursor-pointer items-center text-sm font-bold text-purple-400">
        Devnet <ChevronDown size={18} color="white" />
      </p>
    </div>
  );
};

export default ClusterSwitcher;
