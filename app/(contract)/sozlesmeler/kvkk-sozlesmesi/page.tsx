import type { Metadata } from "next";
import KVKK from "@/components/pages/Contract/KVKK";

export const metadata: Metadata = {
  title: "KVKK Sözleşmesi | Takip Kira - Kişisel Verilerin Korunması",
  description:
    "Takip Kira KVKK sözleşmesi ve kişisel verilerin işlenmesi politikası. Verilerinizin güvenliği ve gizliliği bizim için önemli. KVKK uyumlu gayrimenkul yönetim sistemi.",
  keywords:
    "KVKK sözleşmesi, kişisel verilerin korunması, veri güvenliği, KVKK uyumlu emlak yazılımı, kira takip sistemi KVKK, gayrimenkul yönetimi veri güvenliği, takip kira KVKK, kişisel veri işleme politikası",
  openGraph: {
    title: "KVKK Sözleşmesi | Takip Kira - Kişisel Verilerin Korunması",
    description:
      "Takip Kira KVKK sözleşmesi ve kişisel verilerin işlenmesi politikası. KVKK uyumlu gayrimenkul yönetim sistemi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/sozlesmeler/kvkk-sozlesmesi",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "legal",
};

export default function KVKKPage() {
  return <KVKK />;
}
