import type { Metadata } from "next";
import WhyUs from "@/components/pages/WhyUs";

export const metadata: Metadata = {
  title: "Neden Takip Kira? | En İyi Kira Takip ve Mülk Yönetim Yazılımı",
  description:
    "Takip Kira ile profesyonel kira takibi ve mülk yönetimi. Otomatik hatırlatmalar, detaylı raporlar ve kolay kullanım. Türkiye'nin lider kira takip yazılımı.",
  keywords:
    "kira takibi, kira takip programı, mülk yönetimi yazılımı, emlak yönetimi, kiracı takip sistemi, kira ödeme takibi, gayrimenkul yönetimi",
  openGraph: {
    title: "Neden Takip Kira? | En İyi Kira Takip ve Mülk Yönetim Yazılımı",
    description:
      "Takip Kira ile profesyonel kira takibi ve mülk yönetimi. Otomatik hatırlatmalar, detaylı raporlar ve kolay kullanım.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/neden-biz",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "business",
};

export default function WhyUsPage() {
  return <WhyUs />;
}
