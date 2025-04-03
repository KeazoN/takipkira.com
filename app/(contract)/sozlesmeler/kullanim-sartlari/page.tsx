import type { Metadata } from "next";
import TermsOfUse from "@/components/pages/Contract/TermsOfUse";

export const metadata: Metadata = {
  title:
    "Kullanım Şartları ve Koşulları | Takip Kira - Gayrimenkul Yönetim Platformu",
  description:
    "Takip Kira kullanım şartları ve koşulları. Gayrimenkul ve kira yönetimi platformumuzun kullanımına ilişkin detaylı bilgiler, kullanıcı hakları ve sorumlulukları.",
  keywords:
    "takip kira kullanım şartları, kira takip sistemi kullanım koşulları, gayrimenkul yönetimi şartları, emlak yazılımı kullanım şartları, kira yönetimi platform şartları, mülk yönetimi kullanım koşulları, kiracı takip sistemi şartları",
  openGraph: {
    title:
      "Kullanım Şartları ve Koşulları | Takip Kira - Gayrimenkul Yönetim Platformu",
    description:
      "Takip Kira kullanım şartları ve koşulları. Gayrimenkul ve kira yönetimi platformumuzun kullanımına ilişkin detaylı bilgiler.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/sozlesmeler/kullanim-sartlari",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "legal",
};

export default function TermsOfUsePage() {
  return <TermsOfUse />;
}
