import { cn } from "@/lib/utils";
import React from "react";

interface ListHeaders {
  headers: string[];
  className?: string;
}

const ListHeaders = ({ headers, className }: ListHeaders) => {
  return (
    <ul
      className={cn(
        "flex items-center rounded border-b bg-card-foreground/80 py-2 text-primary-foreground dark:border-slate-400 dark:bg-primary/40 dark:text-primary [&_li]:flex-1 [&_li]:text-center",
        className,
      )}
    >
      {headers.map((header) => (
        <li key={header}>{header}</li>
      ))}
    </ul>
  );
};

export default ListHeaders;
