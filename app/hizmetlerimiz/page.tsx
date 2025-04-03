import type { Metadata } from "next";
import ServicesPageDetail from "@/components/pages/Services";

export const metadata: Metadata = {
  title:
    "Takip Kira Hizmetleri | Kira Takip, DASK, Emlak Vergisi ve Daha Fazlası",
  description:
    "Takip Kira ile tüm gayrimenkul hizmetleriniz tek çatı altında. Kira takibi, DASK sigortası, emlak vergisi takibi, aidat yönetimi, site yönetimi ve daha fazlası için profesyonel çözümler.",
  keywords:
    "takip kira hizmetleri, kira takip hizmeti, DASK hizmeti, emlak vergisi takibi, aidat yönetimi, site yönetimi, apartman yönetimi, gayrimenkul yönetimi, kira sözleşmesi, tapu işlemleri, emlak danışmanlığı, mülk değerleme, kira gelir vergisi, stopaj hesaplama",
  openGraph: {
    title:
      "Takip Kira Hizmetleri | Kira Takip, DASK, Emlak Vergisi ve Daha Fazlası",
    description:
      "Takip Kira ile tüm gayrimenkul hizmetleriniz tek çatı altında. Profesyonel emlak ve kira yönetim çözümleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Takip Kira",
  },
  alternates: {
    canonical: "https://takipkira.com/hizmetlerimiz",
  },
  robots: "index, follow",
  authors: [{ name: "Takip Kira" }],
  category: "business",
};

export default function ServicesPage() {
  return <ServicesPageDetail />;
}
