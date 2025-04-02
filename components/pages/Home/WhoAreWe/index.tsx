import Image from "next/image";
import { TbArrowRight } from "react-icons/tb";
import Card from "./Card";

const WhoAreWe = () => {
  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1255px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 lg:gap-20">
          <div className="block lg:hidden">
            <Image
              src="/assets/img/svg/stepStep.webp"
              alt="Takip Kira"
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          <div className="flex items-start gap-6 lg:gap-8 flex-col">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
              Takip Kira Nasıl Çalışır? Size Özel{" "}
              <span className="text-primary">Tam 4 Adımda Takip Kira</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-center lg:text-left">
              Modern teknolojilerle donatılmış platformumuz, kira takibinden
              sözleşme yönetimine kadar tüm süreçleri tek bir noktadan
              yönetmenizi sağlıyor.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <Card
                number="1"
                title="Üye Olun"
                description="Hemen ücretsiz üye olun ve sistemimizi kullanmaya başlayın."
              />
              <Card
                number="2"
                title="İletişime Geçelim"
                description="Kayıt formunu doldurun ve sizi arayalım."
              />
              <Card
                number="3"
                title="Takip Kira'yı Kullanın"
                description="Takip Kira'yı kullanın ve kira takibini yönetin."
              />
              <Card
                number="4"
                title="Gelirinizi Takip Edin"
                description="Kazançlarınızı takip edin ve kira ödemelerini takip edin."
              />
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row w-full sm:w-auto">
              <button className="bg-primary text-white px-8 shadow-lg py-2 rounded-3xl group flex items-center gap-2 transition hover:brightness-75 w-full sm:w-auto justify-center">
                Hemen Başla
                <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="bg-transparent text-primary border border-primary px-8 py-2 rounded-3xl group flex items-center gap-2 transition hover:brightness-75 w-full sm:w-auto justify-center">
                Daha Fazla
                <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <Image
              src="/assets/img/svg/stepStep.webp"
              alt="Takip Kira"
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
