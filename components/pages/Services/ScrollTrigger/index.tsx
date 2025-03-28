"use client";

import { TbPhoto } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "Kira Tahsilatı",
    description: `
      <h3>Profesyonel Kira Tahsilat Yönetimi</h3>
      <p>
        Kiracılarınızdan düzenli kira ödemelerinin tahsilatı ve takibini profesyonel bir şekilde yönetiyoruz. Zamanında tahsilat, gecikme bildirimleri ve detaylı ödeme raporlaması sunuyoruz.
      </p>
      <ul>
        <li>Otomatik ödeme hatırlatmaları ve bildirimler</li>
        <li>Çoklu ödeme seçenekleri (EFT, havale, kredi kartı)</li>
        <li>Aylık detaylı tahsilat raporları</li>
        <li>Gecikme durumunda profesyonel takip süreci</li>
        <li>Online ödeme takip platformu</li>
      </ul>
      <p>
        *Tüm ödemeler yasal mevzuata uygun şekilde kayıt altına alınır ve raporlanır.
      </p>
    `,
  },
  {
    id: 2,
    title: "Bakım Yönetimi",
    description: `
      <h3>Profesyonel Bakım ve Onarım Yönetimi</h3>
      <p>
        Mülkünüzün değerini korumak ve yaşam kalitesini artırmak için kapsamlı bakım ve onarım hizmetleri sunuyoruz. Düzenli kontroller ve önleyici bakım programları ile mülkünüzün her zaman en iyi durumda kalmasını sağlıyoruz.
      </p>
      <ul>
        <li>Periyodik bakım planlaması ve takibi</li>
        <li>Önleyici bakım programları</li>
        <li>Acil onarım müdahaleleri</li>
        <li>Profesyonel tedarikçi ağı</li>
        <li>Detaylı bakım raporları ve dokümantasyon</li>
      </ul>
      <p>
        *Tüm bakım ve onarım işlemleri uzman ekipler tarafından gerçekleştirilir ve garanti kapsamında yapılır.
      </p>
    `,
  },
  {
    id: 3,
    title: "Kiracı Değerlendirmesi",
    description: `
      <h3>Profesyonel Kiracı Değerlendirme ve Seçim Süreci</h3>
      <p>
        Mülkünüz için en uygun kiracıyı bulma sürecinde kapsamlı bir değerlendirme sistemi uyguluyoruz. Potansiyel kiracıların finansal durumu, kredi geçmişi ve referanslarını detaylı olarak inceleyerek risk değerlendirmesi yapıyoruz.
      </p>
      <ul>
        <li>Detaylı kimlik ve adres doğrulaması</li>
        <li>Kredi skoru ve finansal geçmiş analizi</li>
        <li>İş ve gelir durumu teyidi</li>
        <li>Önceki kira ödemelerinin kontrolü</li>
        <li>Referans kontrolleri ve görüşmeler</li>
        <li>Adli sicil kaydı sorgulaması</li>
      </ul>
      <p>
        *Tüm değerlendirme süreci KVKK kapsamında yürütülür ve gizlilik esaslarına uygun şekilde gerçekleştirilir.
      </p>
      <p>
        Kiracı değerlendirme sürecimiz, mülk sahiplerini olası risklerden korumak ve uzun vadeli, güvenilir kiralama ilişkileri kurmak için tasarlanmıştır.
      </p>
    `,
  },
  {
    id: 4,
    title: "Yasal Destek",
    description: `
      <h3>Profesyonel Hukuki Danışmanlık ve Yasal Süreç Yönetimi</h3>
      <p>
        Kira sözleşmelerinin hazırlanmasından yasal süreçlerin takibine kadar tüm hukuki konularda uzman desteği sağlıyoruz. Deneyimli hukuk ekibimiz, mülk sahiplerinin haklarını korumak ve yasal süreçleri sorunsuz yönetmek için yanınızda.
      </p>
      <ul>
        <li>Profesyonel kira sözleşmesi hazırlama</li>
        <li>Yasal danışmanlık hizmetleri</li>
        <li>Kiracı-mal sahibi anlaşmazlıklarında arabuluculuk</li>
        <li>İcra ve tahliye süreçlerinin yönetimi</li>
        <li>Yasal değişikliklerin takibi ve uyum sağlama</li>
        <li>Vergi ve muhasebe danışmanlığı</li>
      </ul>
      <p>
        *Tüm yasal süreçler deneyimli avukatlarımız tarafından takip edilir ve düzenli olarak raporlanır.
      </p>
      <p>
        Yasal destek hizmetlerimiz, mülk sahiplerinin hukuki haklarını korumak ve olası riskleri minimize etmek için tasarlanmıştır. Güncel mevzuat değişikliklerini takip ederek, sözleşmelerinizin ve işlemlerinizin her zaman yasal çerçevede kalmasını sağlıyoruz.
      </p>
    `,
  },
  {
    id: 5,
    title: "Mülk Denetimi",
    description: `
      <h3>Profesyonel Mülk Denetimi ve Raporlama</h3>
      <p>
        Mülkünüzün sağlığını ve değerini sürekli olarak kontrol ediyoruz. Düzenli denetimler, güvenlik, enerji verimliliği ve yapısal durumunu kontrol ediyoruz.
      </p>
      <ul>
        <li>Güvenlik kontrolleri ve raporları</li>
        <li>Enerji verimliliği değerlendirmeleri</li>
        <li>Yapısal durum kontrolleri</li>
        <li>Güvenlik önerileri ve yapısal güvenlik değerlendirmeleri</li>
        <li>Detaylı denetim raporları</li>
      </ul>
      <p>
        *Tüm denetimler ve raporlar detaylı bir şekilde kayıt altına alınır ve mülk sahiplerine sunulur.
      </p>
      <p>
        Mülk denetimi hizmetlerimiz, mülk sahiplerinin mülklerinin sağlığını ve değerini sürekli olarak kontrol etmek için tasarlanmıştır.
      </p>
    `,
  },
  {
    id: 6,
    title: "Acil Durum Yönetimi",
    description: `
      <h3>Profesyonel Acil Durum Yönetimi ve Müdahale Hizmeti</h3>
      <p>
        Mülkünüzün güvenliği ve sağlığı için acil durumlarda hızlı ve profesyonel yanıt veriyoruz.
      </p>
      <ul>
        <li>Acil durumlarda hızlı müdahale</li>
        <li>Acil durum raporlamaları ve kayıt altına alınması</li>
        <li>Profesyonel ekiplerin hızlı yanıt vermesi</li>
        <li>Acil durum planları ve yedek planları</li>
      </ul>
      <p>
        *Tüm acil durumlar profesyonel ekipler tarafından yönetilir ve mülk sahiplerine raporlanır.
      </p>
      <p>
        Acil durum yönetimi hizmetlerimiz, mülk sahiplerinin mülklerinin güvenliği ve sağlığı için acil durumlarda hızlı ve profesyonel yanıt vermek için tasarlanmıştır.
      </p>
    `,
  },
  {
    id: 7,
    title: "Finansal Raporlama",
    description: `
      <h3>Profesyonel Finansal Raporlama ve Takip Hizmeti</h3>
      <p>
        Mülkünüzün finansal durumunu detaylı olarak takip ediyor ve raporluyoruz.
      </p>
      <ul>
        <li>Detaylı gelir-gider takibi</li>
        <li>Aylık ve yıllık finansal raporlar</li>
        <li>Nakit akışı analizleri</li>
        <li>Bütçe planlaması ve yönetimi</li>
        <li>Vergi planlaması ve optimizasyonu</li>
      </ul>
      <p>
        *Tüm finansal raporlar detaylı bir şekilde hazırlanır ve mülk sahiplerine sunulur.
      </p>
      <p>
        Finansal raporlama hizmetlerimiz, mülk sahiplerinin finansal durumlarını şeffaf ve detaylı bir şekilde takip etmeleri için tasarlanmıştır.
      </p>
    `,
  },
  {
    id: 8,
    title: "Pazarlama Hizmetleri",
    description: `
      <h3>Profesyonel Pazarlama ve Tanıtım Hizmeti</h3>
      <p>
        Mülkünüzün değerini en iyi şekilde yansıtacak profesyonel pazarlama hizmetleri sunuyoruz.
      </p>
      <ul>
        <li>Profesyonel fotoğraf ve video çekimleri</li>
        <li>Dijital pazarlama stratejileri</li>
        <li>Hedef kitle analizi ve konumlandırma</li>
        <li>Sosyal medya yönetimi</li>
        <li>İlan yönetimi ve optimizasyonu</li>
      </ul>
      <p>
        *Tüm pazarlama faaliyetleri profesyonel ekipler tarafından yürütülür.
      </p>
      <p>
        Pazarlama hizmetlerimiz, mülkünüzün potansiyel kiracılara en etkili şekilde tanıtılması için tasarlanmıştır.
      </p>
    `,
  },
  {
    id: 9,
    title: "Sigorta Yönetimi",
    description: `
      <h3>Kapsamlı Sigorta Yönetimi ve Takip Hizmeti</h3>
      <p>
        Mülkünüzün güvenliği için kapsamlı sigorta çözümleri sunuyoruz.
      </p>
      <ul>
        <li>Özel sigorta paketleri</li>
        <li>Düzenli poliçe takibi</li>
        <li>Hasar yönetimi ve takibi</li>
        <li>Risk değerlendirmesi</li>
        <li>Sigorta yenileme hatırlatmaları</li>
      </ul>
      <p>
        *Tüm sigorta işlemleri uzman ekipler tarafından yönetilir.
      </p>
      <p>
        Sigorta yönetimi hizmetlerimiz, mülkünüzün olası risklere karşı tam koruma altında olması için tasarlanmıştır.
      </p>
    `,
  },
  {
    id: 10,
    title: "Online Yönetim",
    description: `
      <h3>7/24 Online Mülk Yönetim Platformu</h3>
      <p>
        Mülkünüzün tüm yönetim süreçlerini tek bir platformdan takip edebilirsiniz.
      </p>
      <ul>
        <li>Anlık bildirimler ve raporlamalar</li>
        <li>Online ödeme takibi</li>
        <li>Dijital doküman yönetimi</li>
        <li>Mobil uygulama desteği</li>
        <li>7/24 destek hizmeti</li>
      </ul>
      <p>
        *Platform sürekli olarak güncellenir ve geliştirilir.
      </p>
      <p>
        Online yönetim platformumuz, mülk sahiplerinin tüm işlemlerini dijital ortamda kolayca yönetmeleri için tasarlanmıştır.
      </p>
    `,
  },
  {
    id: 11,
    title: "Kira Tahsilatı",
    description: `
      <h3>Profesyonel Kira Tahsilat ve Takip Hizmeti</h3>
      <p>
        Kira ödemelerinin düzenli ve zamanında tahsilatını sağlıyoruz.
      </p>
      <ul>
        <li>Otomatik ödeme sistemleri</li>
        <li>Gecikme bildirimleri</li>
        <li>Tahsilat raporlaması</li>
        <li>Yasal süreç yönetimi</li>
        <li>Ödeme planı oluşturma</li>
      </ul>
      <p>
        *Tüm tahsilat işlemleri yasal mevzuata uygun şekilde yürütülür.
      </p>
      <p>
        Kira tahsilatı hizmetlerimiz, mülk sahiplerinin kira gelirlerini düzenli ve güvenli bir şekilde almalarını sağlamak için tasarlanmıştır.
      </p>
    `,
    image: "/images/services/rent-collection.jpg",
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
    <section className="container max-w-[1255px] mx-auto mt-20">
      <div className="flex items-stretch justify-between gap-10">
        <div className="w-[60%] flex flex-col gap-20 py-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el: HTMLDivElement | null) => {
                serviceRefs.current[index] = el;
                return undefined;
              }}
            >
              <h3 className="text-3xl font-bold mb-3 flex items-center gap-2">
                <span className="text-primary text-6xl">•</span>
                {service.title}
              </h3>
              <div
                className="prose prose-lg"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          ))}
        </div>
        <div className="sticky h-full top-24 w-[40%]">
          <div className="w-full h-[400px] bg-sky-50 border border-sky-100 rounded-2xl flex items-center text-sky-200 justify-center overflow-hidden">
            {services[activeService]?.image ? (
              <img
                src={services[activeService]?.image}
                alt={services[activeService]?.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <TbPhoto size={32} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTrigger;
