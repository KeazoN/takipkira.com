import type { Metadata } from "next";
import RentIncrease from "@/components/pages/Transactions/RentIncrease";

export const metadata: Metadata = {
  title: "Kira Artış Oranı Hesaplama | 2025 TÜFE Kira Zam Oranı Hesaplayıcı",
  description:
    "Güncel kira artış oranı hesaplama aracı. 2025 TÜFE kira zam oranlarına göre yasal kira artış hesaplama. Ücretsiz kira artış hesaplayıcı ile kiranızı hemen hesaplayın.",
  keywords:
    "kira artış oranı hesaplama, kira zam oranı 2025, TÜFE kira artış hesaplama, yasal kira artış oranı, kira zammı hesaplama, kira artış hesaplayıcı, güncel kira artış oranı, kira artış oranı TÜFE, kira zam hesaplama, kira artış hesaplama 2024",
  openGraph: {
    title: "Kira Artış Oranı Hesaplama | 2025 TÜFE Kira Zam Oranı Hesaplayıcı",
    description:
      "Güncel TÜFE oranlarına göre yasal kira artış hesaplama aracı. Ücretsiz kira artış hesaplayıcı ile kiranızı hemen hesaplayın.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/islemler/kira-artis-orani",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "calculator",
};

const RentIncreaseRatePage = () => {
  return <RentIncrease />;
};

export default RentIncreaseRatePage;
