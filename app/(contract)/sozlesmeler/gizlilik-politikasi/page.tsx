import type { Metadata } from "next";
import PrivacyPolicy from "@/components/pages/Contract/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Takip Kira - Güvenli Gayrimenkul Yönetimi",
  description:
    "Takip Kira gizlilik politikası ve veri güvenliği taahhütlerimiz. Kişisel verilerinizin korunması, kullanımı ve güvenliği hakkında detaylı bilgiler. Güvenli gayrimenkul ve kira yönetim platformu.",
  keywords:
    "gizlilik politikası, veri güvenliği, kişisel veri koruma, takip kira güvenlik, emlak yazılımı gizlilik, kira takip sistemi güvenlik, gayrimenkul yönetimi gizlilik politikası, veri koruma taahhüdü, KVKK uyumlu platform, güvenli kira takibi",
  openGraph: {
    title: "Gizlilik Politikası | Takip Kira - Güvenli Gayrimenkul Yönetimi",
    description:
      "Takip Kira gizlilik politikası ve veri güvenliği taahhütlerimiz. Kişisel verilerinizin korunması ve güvenliği hakkında detaylı bilgiler.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/sozlesmeler/gizlilik-politikasi",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "legal",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
