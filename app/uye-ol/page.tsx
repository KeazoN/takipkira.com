import type { Metadata } from "next";
import Register from "@/components/pages/Register";

export const metadata: Metadata = {
  title: "Üye Ol | Takip Kira - Profesyonel Mülk Yönetimi Sistemi",
  description:
    "Mülklerinizi bırakın biz yönetelim! Takip Kira ile kira takibi, mülk yönetimi ve kiracı ilişkilerini profesyonelce yönetiyoruz.",
  keywords:
    "mülk yönetimi programı, mülklerimi yönettirmek istiyorum, kira takip yazılımı, emlak yönetim sistemi, kiracı takibi, gayrimenkul yönetimi, üye ol, takip kira üyelik",
  openGraph: {
    title: "Üye Ol | Takip Kira - Profesyonel Mülk Yönetimi Sistemi",
    description:
      "Mülklerinizi bırakın biz yönetelim! Takip Kira ile kira takibi, mülk yönetimi ve kiracı ilişkilerini profesyonelce yönetiyoruz.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/uye-ol",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "business",
};

export default function RegisterPage() {
  return <Register />;
}
