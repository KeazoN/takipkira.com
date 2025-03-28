import {
  TbBuildingSkyscraper,
  TbUsers,
  TbHeartHandshake,
  TbHeadset,
} from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const achievements = [
  {
    icon: TbUsers,
    value: "10K+",
    label: "Aktif Kullanıcı",
    color: "primary",
  },
  {
    icon: TbBuildingSkyscraper,
    value: "50K+",
    label: "Yönetilen Mülk",
    color: "secondary",
  },
  {
    icon: TbHeartHandshake,
    value: "99%",
    label: "Müşteri Memnuniyeti",
    color: "success",
  },
  {
    icon: TbHeadset,
    value: "24/7",
    label: "Teknik Destek",
    color: "primary",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container max-w-[1255px] mx-auto">
        <SectionTitle
          title="Takip Kira'nın"
          highlight="Başarıları"
          description="Takip Kira olarak başarılarımızı sizlerle paylaşmaktan gurur duyuyoruz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-200"
            >
              <div
                className={`w-16 h-16 bg-${achievement.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <achievement.icon
                  className={`w-8 h-8 text-${achievement.color}`}
                />
              </div>
              <p
                className={`text-4xl font-bold text-${achievement.color} mb-2`}
              >
                {achievement.value}
              </p>
              <p className="text-gray-600">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
