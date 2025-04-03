import {
  TbBuildingSkyscraper,
  TbUsers,
  TbHeartHandshake,
  TbHeadset,
  TbHome,
  TbCash,
} from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const achievements = [
  {
    icon: TbHome,
    value: "250+",
    label: "Takip Edilen Mülk",
    color: "primary",
  },
  {
    icon: TbCash,
    value: "₺500K+",
    label: "Yönetilen Kira",
    color: "secondary",
  },
  {
    icon: TbHeartHandshake,
    value: "95%",
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
          description="Takip Kira olarak kısa sürede elde ettiğimiz başarıları sizlerle paylaşmaktan gurur duyuyoruz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-200"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  achievement.color === "primary"
                    ? "bg-primary/10"
                    : achievement.color === "secondary"
                    ? "bg-secondary/10"
                    : achievement.color === "success"
                    ? "bg-success/10"
                    : ""
                }`}
              >
                <achievement.icon
                  className={`w-8 h-8 ${
                    achievement.color === "primary"
                      ? "text-primary"
                      : achievement.color === "secondary"
                      ? "text-secondary"
                      : achievement.color === "success"
                      ? "text-success"
                      : ""
                  }`}
                />
              </div>
              <p
                className={`text-4xl font-bold mb-2 ${
                  achievement.color === "primary"
                    ? "text-primary"
                    : achievement.color === "secondary"
                    ? "text-secondary"
                    : achievement.color === "success"
                    ? "text-success"
                    : ""
                }`}
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
