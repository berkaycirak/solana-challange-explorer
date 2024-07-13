import React from "react";
import AppWalletProvider from "./AppWalletProvider";
import QueryProvider from "./QueryProvider";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <AppWalletProvider>
        <ThemeProvider>
          <Toaster />
          {children}
        </ThemeProvider>
      </AppWalletProvider>
    </QueryProvider>
  );
};

export default Providers;
