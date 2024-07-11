"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  return (
    <div className="inline-flex cursor-pointer items-center overflow-hidden rounded-lg border">
      <span className="px-2 py-1">
        <Sun size={16} className="" />
      </span>
      <span className="bg-primary-foreground px-2 py-1 text-primary">
        <Moon size={16} />
      </span>
    </div>
  );
};

export default ThemeSwitcher;
