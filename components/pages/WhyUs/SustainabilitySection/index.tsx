import { TbCheck, TbBolt, TbPlus, TbSunHigh } from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const SustainabilitySection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1255px] mx-auto">
        <SectionTitle
          title="Takip Kira'nın"
          highlight="Güvenilirliği"
          description="Mülk ve kira takibini sizin için biz yapıyoruz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TbCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">Profesyonel Takip</h3>
            <p className="text-gray-600">Uzman ekibimizle kira takibi</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TbBolt className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Hızlı Çözüm</h3>
            <p className="text-gray-600">Sorunlara anında müdahale</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TbPlus className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold mb-2">Otomatik Raporlama</h3>
            <p className="text-gray-600">Düzenli durum bildirimi</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TbSunHigh className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-bold mb-2">Sürekli Destek</h3>
            <p className="text-gray-600">7/24 müşteri hizmeti</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
