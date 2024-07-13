"use client";
import React from "react";
import ClusterSwitcher from "../ClusterSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import useSolPrice from "@/hooks/useSolPrice";
import Skeleton from "react-loading-skeleton";

const Topbar = () => {
  const { data, status } = useSolPrice();

  return (
    <>
      <p className="flex items-center gap-1 text-sm">
        SOL Price:{" "}
        <span className="min-w-[40px] font-bold text-white">
          {data || <Skeleton baseColor="grey" />}
        </span>
        $
      </p>
      <div className="flex items-center gap-4">
        <ClusterSwitcher />
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Topbar;
