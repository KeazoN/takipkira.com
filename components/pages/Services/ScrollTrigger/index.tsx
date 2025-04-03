"use client";

import { TbPhoto } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Bakım & Tadilat Hizmetleri",
    description: `
      <h3>Ekonomik ve Hızlı Bakım-Tadilat Çözümleri</h3>
      <p>
        Mülkünüzde ihtiyaç duyulan tüm bakım ve tadilat işlemleri, çözüm ortaklarımız aracılığıyla hızlı ve uygun maliyetlerle gerçekleştirilir. Her işlem öncesinde sizin onayınız alınır.
      </p>
      <ul>
        <li>Güncel fiyatlarla profesyonel hizmet</li>
        <li>Mülk değerini koruyan uygulamalar</li>
        <li>Tam şeffaflık ile faturalandırma</li>
      </ul>
    `,
    image: "/assets/img/service/bakim_tadilat.png",
  },
  {
    id: 2,
    title: "Dask & Sigorta Hizmetleri",
    description: `
      <h3>DASK ve Sigorta Süreçlerinde Tam Takip</h3>
      <p>
        Mülkünüz için gerekli olan Zorunlu Deprem Sigortası (DASK) ve özel sigorta işlemleri zamanında yenilenir, takibi sistem üzerinden yapılır.
      </p>
      <ul>
        <li>Poliçe yenileme hatırlatmaları</li>
        <li>Risk analizi ve danışmanlık</li>
        <li>Hasar anında destek</li>
      </ul>
    `,
    image: "/assets/img/service/dask_and_sigorta.png",
  },
  {
    id: 3,
    title: "Güncel Kira Bedel Tespiti",
    description: `
      <h3>Kira Ekspertiz Raporu ile Değer Tespiti</h3>
      <p>
        SPK lisanslı uzmanlar tarafından hazırlanan ekspertiz raporu ile mülkünüzün gerçek kira değeri bilimsel yöntemlerle belirlenir.
      </p>
      <ul>
        <li>SPK lisanslı uzmanlardan analiz</li>
        <li>Bölgeye ve mülke özel değerlendirme</li>
        <li>Kira artış dönemlerinde doğru yönlendirme</li>
      </ul>
    `,
    image: "/assets/img/service/guncel_kira_bedel.png",
  },
  {
    id: 4,
    title: "Güvenli Kiralama",
    description: `
      <h3>Kişiye Özel, Hukuki Güvenceli Kiralama</h3>
      <p>
        Hazırlanan özel sözleşmeler ve doğru kiracı seçimiyle kiralama süreci sorunsuz ve güvenli hale getirilir.
      </p>
      <ul>
        <li>Kişiye özel kira sözleşmesi</li>
        <li>Kiracı profili analizi</li>
        <li>Hak kayıplarını önleyici yapı</li>
      </ul>
    `,
    image: "/assets/img/service/guvenli_kiralama.png",
  },
  {
    id: 5,
    title: "Kira & Tahsilat Takibi",
    description: `
      <h3>Zamanında Tahsilat, Düzenli Takip</h3>
      <p>
        Kiracınızla tüm görüşmeler yapılır, tahsilat süreci dijital olarak yönetilir. Gecikmeler anında bildirilir.
      </p>
      <ul>
        <li>Otomatik tahsilat hatırlatmaları</li>
        <li>Dijital ödeme takibi</li>
        <li>Gecikme bildirimi ve çözüm süreci</li>
      </ul>
    `,
    image: "/assets/img/service/kira_takibi.png",
  },
  {
    id: 6,
    title: "Online Şube Hizmeti",
    description: `
      <h3>7/24 Şeffaf ve Dijital Takip</h3>
      <p>
        Nerede olursanız olun, tüm kira, ödeme, evrak ve mülk süreçlerinizi Online Şube üzerinden kolayca takip edebilirsiniz.
      </p>
      <ul>
        <li>Mobil ve web erişim</li>
        <li>Anlık bildirimler ve raporlar</li>
        <li>Tam şeffaflık ve veri güvenliği</li>
      </ul>
    `,
    image: "/assets/img/service/online_sube.png",
  },
  {
    id: 7,
    title: "Fırsat Yatırımlar",
    description: `
      <h3>Yüksek Getirili Yatırım Fırsatları</h3>
      <p>
        Gayrimenkul piyasasındaki fırsat yatırımlar hakkında size özel analiz ve yönlendirme sunarız.
      </p>
      <ul>
        <li>Yüksek kira getirili portföyler</li>
        <li>Bölgesel gelişim analizleri</li>
        <li>Profesyonel yatırım danışmanlığı</li>
      </ul>
    `,
    image: "/assets/img/service/firsat_yatirimlar.png",
  },
  {
    id: 8,
    title: "Mülkün Fiziki Durumu",
    description: `
      <h3>Görsel ve Teknik Durum Raporlaması</h3>
      <p>
        Mülkünüzün güncel görselleri ve teknik durumu sisteminize yüklenerek size sürekli bilgi verilir.
      </p>
      <ul>
        <li>Fotoğraflı durum tespiti</li>
        <li>Periyodik fiziki kontroller</li>
        <li>Online Şube'den erişim</li>
      </ul>
    `,
    image: "/assets/img/service/mulkun_fiziki.png",
  },
  {
    id: 9,
    title: "Ödeme Takip Hizmetleri",
    description: `
      <h3>Fatura ve Kira Ödemelerinde Takip</h3>
      <p>
        Fatura, vergi ve kira ödemeleri düzenli olarak sistem üzerinden takip edilir, size ve kiracınıza bildirim yapılır.
      </p>
      <ul>
        <li>Fatura ve vergi ödeme hatırlatmaları</li>
        <li>Online ödeme geçmişi</li>
        <li>Mobil uygulama üzerinden takip</li>
      </ul>
    `,
    image: "/assets/img/service/odeme_takip.png",
  },
  {
    id: 10,
    title: "Satış Hizmetleri",
    description: `
      <h3>Mülkünüzü Değerinde Satıyoruz</h3>
      <p>
        Satmak istediğiniz gayrimenkuller, geniş yatırımcı ağına ulaştırılır. Tüm süreç uzmanlar tarafından yönetilir.
      </p>
      <ul>
        <li>Değerinde ve hızlı satış</li>
        <li>Yatırımcı portföyü ile doğrudan erişim</li>
        <li>Tüm yasal süreç desteği</li>
      </ul>
    `,
    image: "/assets/img/service/satis_hizmetleri.png",
  },
  {
    id: 11,
    title: "Risk Koruması",
    description: `
      <h3>Risklere Karşı Tam Güvence</h3>
      <p>
        Mülkünüzü kira alamama, gecikme ve hasar gibi risklere karşı koruyacak çözümler sunarız.
      </p>
      <ul>
        <li>Kira garanti sistemleri</li>
        <li>Hasar ve ödeme riski analizi</li>
        <li>Proaktif çözüm önerileri</li>
      </ul>
    `,
    image: "/assets/img/service/risk_korumasi.png",
  },
  {
    id: 12,
    title: "Teminat",
    description: `
      <h3>Güvenceli Kiralama Süreci</h3>
      <p>
        Kiralama süreçlerinde teminat bedelleri ve güvence sistemleri ile mülk sahibinin çıkarları korunur.
      </p>
      <ul>
        <li>Teminat bedeli takibi</li>
        <li>Güvence sistemleri entegrasyonu</li>
        <li>Teminat iadelerinde raporlama</li>
      </ul>
    `,
    image: "/assets/img/service/teminat.png",
  },
];

const ScrollTrigger = () => {
  const [activeService, setActiveService] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const elementTop = ref.offsetTop;
          const elementBottom = elementTop + ref.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveService(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container max-w-[1255px] mx-auto mt-20 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10">
        <div className="w-full lg:w-[60%] flex flex-col gap-20 py-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el: HTMLDivElement | null) => {
                serviceRefs.current[index] = el;
                return undefined;
              }}
            >
              <div className="lg:hidden mb-6">
                <div className="w-full h-[250px] rounded-2xl flex items-center text-sky-200 justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    {service.image ? (
                      <motion.img
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <TbPhoto size={32} />
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2">
                <span className="text-primary text-4xl md:text-6xl">•</span>
                {service.title}
              </h3>
              <div
                className="prose prose-sm md:prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          ))}
        </div>
        <div className="hidden lg:block w-full lg:w-[40%] lg:sticky lg:h-full lg:top-24">
          <div className="w-full h-[250px] md:h-[300px] lg:h-[450px] rounded-2xl flex items-center text-sky-200 justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {services[activeService]?.image ? (
                <motion.img
                  key={services[activeService].id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <TbPhoto size={32} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTrigger;
