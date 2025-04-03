import type { Metadata } from "next";
import Contact from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "İletişim & Müşteri Hizmetleri | Takip Kira - 7/24 Destek",
  description:
    "Takip Kira müşteri hizmetleri ve teknik destek. Mülk yönetimi, kira takibi ve gayrimenkul yönetimi konularında uzman ekibimizle yanınızdayız. 7/24 canlı destek hizmeti.",
  keywords:
    "takip kira müşteri hizmetleri, takip kira yardım, takip kira destek, mülk yönetimi yardım, kira takip desteği, gayrimenkul yönetimi destek, emlak yazılımı yardım, kiracı takibi destek",
  openGraph: {
    title: "İletişim & Müşteri Hizmetleri | Takip Kira - 7/24 Destek",
    description:
      "Mülk yönetimi ve kira takibi konularında profesyonel destek için Takip Kira müşteri hizmetleri ekibimizle iletişime geçin.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/iletisim",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "business",
};

export default function ContactPage() {
  return <Contact />;
}
