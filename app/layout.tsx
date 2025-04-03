import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/inc/Nav";
import Footer from "@/components/inc/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsappButton from "@/components/WhatsappButton";
import { Toaster } from "react-hot-toast";
import Clarity from "@microsoft/clarity";

export const metadata: Metadata = {
  title: "Takip Kira - Profesyonel Kira Takip ve Yönetim Sistemi",
  description:
    "Türkiye'nin en kapsamlı kira takip yazılımı. Kiracı takibi, kira ödemeleri, sözleşme yönetimi ve daha fazlası için ideal çözüm. Kira yönetimini kolaylaştırın!",
  keywords:
    "takip kira, kira takip programı, kiracı takibi, kira yönetimi, emlak yazılımı, kira ödeme takibi",
  openGraph: {
    title: "Takip Kira - Profesyonel Kira Takip ve Yönetim Sistemi",
    description:
      "Türkiye'nin en kapsamlı kira takip yazılımı. Kiracı takibi, kira ödemeleri, sözleşme yönetimi ve daha fazlası için ideal çözüm.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://takipkira.com",
  },
  authors: [{ name: "Takip Kira" }],
  category: "business",
  themeColor: "#ffffff",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== "undefined") {
    Clarity.init("qy9o617avj");
  }

  return (
    <html lang="tr">
      <body className={`${outfit.variable} antialiased text-[#010F34]`}>
        <Nav />
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-S7RE5G8E88" />
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
