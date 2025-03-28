import { TbBrain, TbLock, TbBolt } from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const technologies = [
  {
    icon: TbBrain,
    iconBgColor: "primary",
    iconColor: "primary",
    title: "Yapay Zeka Analizi",
    description:
      "Gelişmiş yapay zeka algoritmalarımız ile piyasa trendlerini analiz eder, kira değerlemesi yapar ve geleceğe yönelik tahminler oluştururuz.",
    features: [
      "Otomatik fiyat optimizasyonu",
      "Piyasa trend analizi",
      "Kişiselleştirilmiş öneriler",
    ],
  },
  {
    icon: TbLock,
    iconBgColor: "secondary",
    iconColor: "secondary",
    title: "Blockchain Güvenliği",
    description:
      "Blockchain teknolojisi ile verileriniz güvende. Akıllı kontratlar sayesinde tüm işlemleriniz şeffaf ve güvenli.",
    features: [
      "Akıllı kontratlar",
      "Şifrelenmiş veriler",
      "Dağıtık veri yapısı",
    ],
  },
  {
    icon: TbBolt,
    iconBgColor: "success",
    iconColor: "success",
    title: "Gerçek Zamanlı İşlemler",
    description:
      "Modern altyapımız sayesinde tüm işlemlerinizi anlık olarak takip edin ve yönetin. Hızlı ve kesintisiz hizmet.",
    features: ["Anlık bildirimler", "Otomatik raporlama", "Kesintisiz erişim"],
  },
];

const TechnologySection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1255px] mx-auto">
        <SectionTitle
          title="Takip Kira'nın"
          highlight="Teknolojisi"
          description="Geleceğin teknolojilerini bugünden kullanarak emlak sektörüne yön veriyoruz."
        />

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200"
              >
                <div
                  className={`w-16 h-16 bg-${tech.iconBgColor}/10 rounded-full flex items-center justify-center mb-6`}
                >
                  <tech.icon className={`w-8 h-8 text-${tech.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <ul className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 bg-${tech.iconColor} rounded-full`}
                      ></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
