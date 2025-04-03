import type { Metadata } from "next";
import CookiePolicy from "@/components/pages/Contract/CookiePolicy";

export const metadata: Metadata = {
  title:
    "Çerez Politikası | Takip Kira - Güvenli Gayrimenkul Yönetim Platformu",
  description:
    "Takip Kira çerez (cookie) politikası. Web sitemizde kullanılan çerezler, gizlilik ve güvenlik önlemlerimiz hakkında detaylı bilgi. Şeffaf ve güvenli gayrimenkul yönetim platformu.",
  keywords:
    "çerez politikası, cookie policy, takip kira çerezler, emlak yazılımı çerez politikası, kira takip sistemi güvenlik, gayrimenkul yönetimi çerez kullanımı, web çerezleri, site güvenliği, çerez ayarları, KVKK uyumlu çerezler, güvenli platform",
  openGraph: {
    title:
      "Çerez Politikası | Takip Kira - Güvenli Gayrimenkul Yönetim Platformu",
    description:
      "Takip Kira çerez politikası ve güvenlik önlemlerimiz. Web sitemizde kullanılan çerezler hakkında detaylı bilgi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/sozlesmeler/cerez-politikasi",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "legal",
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
}
