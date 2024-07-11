import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { nunito } from "./fonts";
import { cn } from "@/lib/utils";
import Providers from "@/providers";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          "flex h-dvh max-h-dvh flex-col text-primary-foreground",
          nunito.className,
        )}
      >
        <Providers>
          <Navbar />
          <main className="relative h-full flex-1 overflow-y-auto bg-primary/90 py-6">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
