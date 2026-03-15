import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "GoddoNebianU's Blog",
  description: "Think diffient",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <Navbar />
        <div className={cn(
          "flex justify-center items-center"
        )}>
          <div
            className={cn(
              "flex flex-col",
              "p-4 md:w-10/12 w-full max-w-250",
            )}>
            {children}
          </div>
        </div>
      </body>
    </html >
  );
}
