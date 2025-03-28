import ContentHero from "@/components/ContentHero";
import { TbUserPlus, TbHeadphones } from "react-icons/tb";
import Card from "../Contact/Card";
import TechnologySection from "./TechnologySection";
import AdvantagesSection from "./AdvantagesSection";
import ReferencesSection from "./ReferencesSection";
import AchievementsSection from "./AchievementsSection";
import SustainabilitySection from "./SustainabilitySection";
import GoMobile from "../Home/GoMobile";
const WhyUs = () => {
  return (
    <main className="w-full">
      <ContentHero
        title="Takip Kira ile Tanışın"
        title2="Neden Biz?"
        description="Yenilikçi teknolojimiz ve uzman ekibimizle kira yönetimini kolaylaştırıyor, size değerli zamanınızı geri kazandırıyoruz."
      />

      <AdvantagesSection />
      <AchievementsSection />
      <TechnologySection />
      <ReferencesSection />
      <SustainabilitySection />

      <div className="my-28">
        <GoMobile />
      </div>

      <div className="container max-w-[1255px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Hemen Müşteri Ol!"
            description="Şimdi Takip Kira müşterisi olun ve kazançlarınızı izleyin."
            buttonText="Müşteri Ol"
            icon={<TbUserPlus className="w-5 h-5" />}
            backgroundColor="bg-secondary text-white"
            image="/assets/img/svg/hand.svg"
            buttonColor="bg-primary"
          />
          <Card
            title="Müşteri Temsilcimiz!"
            description="Sorunuzun cevabı yok mu? Müşteri Temsilcimize ulaşın."
            buttonText="Müşteri Temsilcisi"
            icon={<TbHeadphones className="w-5 h-5" />}
            backgroundColor="bg-[#0b3636] text-white"
            image="/assets/img/svg/customerService.svg"
            buttonColor="bg-success"
          />
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
