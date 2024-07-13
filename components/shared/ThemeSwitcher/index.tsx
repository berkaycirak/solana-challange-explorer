"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  console.log(theme);
  return (
    <div className="inline-flex cursor-pointer items-center overflow-hidden rounded-lg border">
      <span className="bg-primary-foreground px-2 py-1 text-primary dark:bg-primary dark:text-primary-foreground">
        <Sun size={16} onClick={() => setTheme("light")} />
      </span>
      <span className="px-2 py-1 dark:bg-primary-foreground dark:text-primary">
        <Moon size={16} onClick={() => setTheme("dark")} />
      </span>
    </div>
  );
};

export default ThemeSwitcher;
