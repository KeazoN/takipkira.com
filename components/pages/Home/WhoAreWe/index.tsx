import Image from "next/image";
import { TbArrowRight } from "react-icons/tb";

const WhoAreWe = () => {
  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1255px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="block lg:hidden">
            <Image
              src="/assets/img/whoarewe/nasil-calisiriz.png"
              alt="Takip Kira"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          <div className="flex items-start gap-6 lg:gap-8 flex-col">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
              Takip Kira Nasıl Çalışır? Size Özel{" "}
              <span className="text-primary">Tam 4 Adımda Takip Kira</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-center lg:text-left">
              Takip Kira, gayrimenkul yönetimini dijitalleştirerek mülk
              sahiplerine benzersiz bir deneyim sunuyor. Modern teknolojilerle
              donatılmış platformumuz, kira takibinden sözleşme yönetimine kadar
              tüm süreçleri tek bir noktadan yönetmenizi sağlıyor.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <div className="bg-sky-50 transition-all duration-300 border border-sky-100 rounded-2xl p-4 group">
                <div className="flex items-center gap-4">
                  <span className="bg-sky-100 text-sky-700 font-bold text-base lg:text-lg min-w-[48px] h-12 flex items-center justify-center border border-sky-200 rounded-full transition-all duration-300">
                    1
                  </span>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold">Üye Olun</h3>
                    <p className="text-gray-500 mt-1 text-sm lg:text-base">
                      Hemen ücretsiz üye olun ve sistemimizi kullanmaya
                      başlayın.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50 transition-all duration-300 border border-sky-100 rounded-2xl p-4 group">
                <div className="flex items-center gap-4">
                  <span className="bg-sky-100 text-sky-700 font-bold text-base lg:text-lg min-w-[48px] h-12 flex items-center justify-center border border-sky-200 rounded-full transition-all duration-300">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold">Üye Olun</h3>
                    <p className="text-gray-500 mt-1 text-sm lg:text-base">
                      Hemen ücretsiz üye olun ve sistemimizi kullanmaya
                      başlayın.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50 transition-all duration-300 border border-sky-100 rounded-2xl p-4 group">
                <div className="flex items-center gap-4">
                  <span className="bg-sky-100 text-sky-700 font-bold text-base lg:text-lg min-w-[48px] h-12 flex items-center justify-center border border-sky-200 rounded-full transition-all duration-300">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold">Üye Olun</h3>
                    <p className="text-gray-500 mt-1 text-sm lg:text-base">
                      Hemen ücretsiz üye olun ve sistemimizi kullanmaya
                      başlayın.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50 transition-all duration-300 border border-sky-100 rounded-2xl p-4 group">
                <div className="flex items-center gap-4">
                  <span className="bg-sky-100 text-sky-700 font-bold text-base lg:text-lg min-w-[48px] h-12 flex items-center justify-center border border-sky-200 rounded-full transition-all duration-300">
                    4
                  </span>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold">Üye Olun</h3>
                    <p className="text-gray-500 mt-1 text-sm lg:text-base">
                      Hemen ücretsiz üye olun ve sistemimizi kullanmaya
                      başlayın.
                    </p>
                  </div>
                </div>
              </div>
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

          <div className="hidden lg:block">
            <Image
              src="/assets/img/whoarewe/nasil-calisiriz.png"
              alt="Takip Kira"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
