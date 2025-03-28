import { TbBolt, TbLock, TbMessageDots } from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const advantages = [
  {
    icon: TbBolt,
    title: "Hızlı ve Güvenilir",
    description:
      "Modern altyapımız sayesinde işlemlerinizi hızlı ve güvenli bir şekilde gerçekleştirin.",
  },
  {
    icon: TbLock,
    title: "Güvenli Altyapı",
    description:
      "Verileriniz en üst düzey güvenlik önlemleriyle korunur ve yedeklenir.",
  },
  {
    icon: TbMessageDots,
    title: "7/24 Destek",
    description:
      "Uzman destek ekibimiz her zaman yanınızda, sorularınıza anında çözüm bulun.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1255px] mx-auto">
        <SectionTitle
          title="Takip Kira'nın"
          highlight="Avantajları"
          description="Takip Kira, mülk sahiplerine birçok avantaj ve kolaylık sağlıyor."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <advantage.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
