import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { cn } from "@/lib/cn";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className={cn(
        "flex items-center justify-start flex-col",
        "min-h-screen",
        "gap-4 py-2"
      )}>
        <Header />
        <main
          className={cn(
            "flex flex-col px-4 md:px-0",
            "md:w-10/12 w-full max-w-250",
          )}>
          {children}
          <SpeedInsights />
        </main>
        {/* <Footer /> */}
      </body>
    </html >
  );
}
