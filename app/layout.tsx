import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { nunito } from "./fonts";
import { cn } from "@/lib/utils";
import Providers from "@/providers";
import Footer from "@/components/shared/Footer";
import Search from "@/components/shared/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolaScan",
  description:
    "SolaScan is an explorer to explore addresses, blocks and signatures on the Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto flex h-dvh max-h-dvh max-w-[1920px] flex-col text-primary dark:text-primary-foreground",
          nunito.className,
        )}
      >
        <Providers>
          <Navbar />

          <main className="relative h-full flex-1 overflow-y-auto bg-primary-foreground/90 py-6 dark:bg-primary/90">
            <Search />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
