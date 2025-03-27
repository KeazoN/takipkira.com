import AppStore from "@/components/AppStore";
import PlayStore from "@/components/PlayStore";
import Image from "next/image";

const GoMobile = () => {
  return (
    <section className="container mt-20 flex items-center justify-center max-w-[1450px] relative w-full gap-20 rounded-3xl h-[400px] bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="flex flex-col items-start gap-8 w-[40%]">
        <h1 className="flex flex-col text-nowrap text-4xl transition-all duration-300 font-extrabold gap-2">
          Mobil Uygulamamızdan <span className="text-primary">Devam Edin!</span>
        </h1>
        <p className="text-lg opacity-70 leading-relaxed">
          Uygulama mağazalarından uygulumamızı şimdi indirebilir, kaydolabilir
          ve hemen kullanmaya başlayabilirsiniz.
        </p>
        <div className="flex items-center justify-center gap-4">
          <PlayStore className="w-36 h-fit !top-0" />
          <AppStore className="w-36 h-fit !top-0" />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/img/mobile/androidAndIosMockup.png"
          alt="mockup"
          width={600}
          height={600}
          className="relative w-full h-full drop-shadow-lg z-0"
        />
      </div>
    </section>
  );
};

export default GoMobile;
