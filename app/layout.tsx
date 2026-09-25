import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/section/TopBar/page";
import Header from "@/components/section/Header/page";
import Footer from "@/components/section/Footer/page";
import rawData from "@/components/data/data.json";
import { SiteData } from "@/components/type";
import BackToTop from "@/components/ui/BackToTop";

const siteData = rawData as SiteData;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoFix - Car Repair Service",
  description: "Trusted Care for Every Drive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <TopBar data={siteData.common.Topbar} />
        <Header data={siteData.common.Header} />
        <main className="flex-1">
          {children}
        </main>
        <Footer data={siteData.common.Footer} />
        <BackToTop />
      </body>
    </html>
  );
}
