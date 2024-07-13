"use client";
import React from "react";
import ClusterSwitcher from "../ClusterSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import useSolPrice from "@/hooks/useSolPrice";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "next-themes";

const Topbar = () => {
  const { data, status } = useSolPrice();
  const { theme } = useTheme();
  console.log(theme);

  return (
    <>
      <p className="flex items-center gap-1 text-sm">
        SOL Price:{" "}
        <span className="min-w-[40px] font-bold text-primary dark:text-primary-foreground">
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
