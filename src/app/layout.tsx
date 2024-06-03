import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const barlow = Barlow({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "SunnySide Agency",
  description: "View the optimal layout for the site depending on their device's screen size",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
