import { TbCheck, TbBolt, TbPlus, TbSunHigh } from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const SustainabilitySection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1255px] mx-auto">
        <SectionTitle
          title="Takip Kira'nın"
          highlight="Sürdürülebilirliği"
          description="Çevreye duyarlı ve sürdürülebilir çözümlerimiz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TbCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">Kağıtsız Ofis</h3>
            <p className="text-gray-600">
              Dijital dönüşüm ile doğayı koruyoruz
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TbBolt className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Enerji Tasarrufu</h3>
            <p className="text-gray-600">Yeşil teknoloji kullanımı</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TbPlus className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold mb-2">Sosyal Sorumluluk</h3>
            <p className="text-gray-600">Topluma katkı sağlayan projeler</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TbSunHigh className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-bold mb-2">Yenilenebilir Enerji</h3>
            <p className="text-gray-600">Sürdürülebilir altyapı</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
