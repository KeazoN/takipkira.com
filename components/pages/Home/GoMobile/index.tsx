import AppStore from "@/components/AppStore";
import PlayStore from "@/components/PlayStore";
import Image from "next/image";

const GoMobile = () => {
  return (
    <section className="container mt-20 flex items-center max-lg:py-10 max-lg:flex-col justify-center max-w-[1450px] relative w-full gap-20 rounded-3xl h-[400px] max-lg:h-fit bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="flex flex-col items-start gap-8 w-[40%] max-lg:w-full max-lg:items-center max-lg:text-center max-lg:px-6">
        <h1 className="flex flex-col text-nowrap text-4xl transition-all duration-300 font-extrabold gap-2 max-lg:text-3xl max-sm:text-2xl">
          Mobil Uygulamamızdan <span className="text-primary">Devam Edin!</span>
        </h1>
        <p className="text-lg opacity-70 leading-relaxed max-lg:text-base">
          Uygulama mağazalarından uygulumamızı şimdi indirebilir, kaydolabilir
          ve hemen kullanmaya başlayabilirsiniz.
        </p>
        <div className="flex items-center justify-center gap-4 max-sm:flex-col">
          <PlayStore className="w-36 h-fit !top-0 hover:scale-105 transition-transform" />
          <AppStore className="w-36 h-fit !top-0 hover:scale-105 transition-transform" />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/img/mobile/mobile.webp"
          alt="Mobil Uygulama Görünümü"
          width={600}
          height={600}
          className="relative w-full h-full drop-shadow-xl z-0 max-lg:h-fit max-lg:w-96"
          priority
        />
      </div>
    </section>
  );
};

export default GoMobile;
