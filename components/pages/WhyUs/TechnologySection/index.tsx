import { TbBrain, TbLock, TbBolt } from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const technologies = [
  {
    icon: TbBrain,
    iconBgColor: "primary",
    iconColor: "primary",
    title: "Profesyonel Mülk Takibi",
    description:
      "Uzman ekibimiz mülklerinizi ve kiralarınızı sizin adınıza takip eder, ödemelerinizi düzenler ve raporlarınızı oluşturur.",
    features: [
      "Profesyonel kira takibi",
      "Zamanında ödeme takibi",
      "Detaylı raporlama",
    ],
  },
  {
    icon: TbLock,
    iconBgColor: "secondary",
    iconColor: "secondary",
    title: "Güvenli Veri Saklama",
    description:
      "En son güvenlik teknolojileri ile mülk ve kira verileriniz güvende. Tüm işlemleriniz şeffaf ve güvenli bir şekilde saklanır.",
    features: ["Şifreli veri depolama", "Yedekleme sistemi", "Güvenli erişim"],
  },
  {
    icon: TbBolt,
    iconBgColor: "success",
    iconColor: "success",
    title: "Hızlı Hizmet Merkezi",
    description:
      "Modern altyapımız ve uzman ekibimiz sayesinde tüm mülk ve kira işlemlerinizi sizin adınıza yönetiyoruz. Hızlı ve kesintisiz hizmet.",
    features: ["Anlık bildirimler", "Düzenli raporlama", "7/24 destek"],
  },
];

const TechnologySection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1255px] mx-auto">
        <SectionTitle
          title="Takip Kira'nın"
          highlight="Teknolojisi"
          description="En son teknolojileri kullanarak mülk ve kira takibini sizin için yapıyoruz."
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
