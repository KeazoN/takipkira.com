import {
  TbArrowRight,
  TbBuildingBank,
  TbCash,
  TbEyeDollar,
  TbFileText,
  TbHome2,
  TbHomeShield,
  TbShieldCheck,
  TbSitemap,
} from "react-icons/tb";
import Card from "./Card";

const Services = () => {
  return (
    <section className="mt-20">
      <div className="container flex items-center justify-center flex-col gap-10 max-w-[1255px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-extrabold">
              Takip Kira'nın <span className="text-primary">Hizmetleri</span>
            </h2>
            <p className="text-gray-500">
              Takip Kira, mülk sahiplerinin mülklerini takip etmek harici birçok
              hizmet sunuyor.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-primary text-white px-8 shadow-lg py-2 rounded-3xl group flex items-center gap-2 transition hover:brightness-75">
              Hemen Başla
              <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full gap-4">
          <Card
            icon={<TbHome2 className="w-8 h-8" />}
            title="Güvenli Kiralama"
            description="Mülklerinizin güvenli kiralanması için gerekli olan tüm bilgileri"
          />
          <Card
            icon={<TbCash className="w-8 h-8" />}
            title="Kira & Tahsilat"
            description="Mülklerinizin güvenli kiralanması için gerekli olan tüm bilgileri"
          />
          <Card
            icon={<TbHomeShield className="w-8 h-8" />}
            title="Mülkün Fiziki Durumu"
            description="Mülklerinizin güvenli kiralanması için gerekli olan tüm bilgileri"
          />
          <Card
            icon={<TbFileText className="w-8 h-8" />}
            title="Sözleşme Takibi"
            description="Mülklerinizin güvenli kiralanması için gerekli olan tüm bilgileri"
          />
          <Card
            icon={<TbShieldCheck className="w-8 h-8" />}
            title="Risk Koruması"
            description="Mülklerinizin güvenli kiralanması için gerekli olan tüm bilgileri"
          />
          <Card
            icon={<TbEyeDollar className="w-8 h-8" />}
            title="Ödeme Takip"
            description="Mülklerinizin güvenli kiralanması için gerekli olan tüm bilgileri"
          />
          <Card
            icon={<TbBuildingBank className="w-8 h-8" />}
            title="Online Şube"
            description="Mülklerinizin güvenli kiralanması için gerekli olan tüm bilgileri"
          />
          <Card
            icon={<TbSitemap className="w-8 h-8" />}
            title="Daha Fazla Hizmet"
            description="Mülklerinizin güvenli kiralanması için gerekli olan tüm bilgileri"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
