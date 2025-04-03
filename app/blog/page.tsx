import type { Metadata } from "next";
import Blog from "@/components/pages/Blog";

export const metadata: Metadata = {
  title: "Takip Kira Blog | Kira, Mülk ve Gayrimenkul Yönetimi Rehberi",
  description:
    "Kira yönetimi, mülk yatırımı, gayrimenkul piyasası ve emlak sektörü hakkında güncel bilgiler, uzman tavsiyeleri ve detaylı rehberler. Türkiye'nin en kapsamlı emlak ve kira blogu.",
  keywords:
    "kira blog, mülk yönetimi blog, gayrimenkul blog, emlak blog, kira rehberi, mülk yatırımı, gayrimenkul yatırımı, emlak piyasası, kira artışı, kiracı hakları, ev sahibi hakları, emlak danışmanlığı, kira sözleşmesi, tapu işlemleri",
  openGraph: {
    title: "Takip Kira Blog | Kira, Mülk ve Gayrimenkul Yönetimi Rehberi",
    description:
      "Kira yönetimi, mülk yatırımı ve gayrimenkul piyasası hakkında güncel bilgiler ve uzman tavsiyeleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/blog",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "blog",
};

export default function BlogPage() {
  return <Blog />;
}
