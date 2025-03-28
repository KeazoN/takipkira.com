import RotatingText from "@/components/animations/RotatingText";
import AppStore from "@/components/AppStore";
import PlayStore from "@/components/PlayStore";
import Image from "next/image";
import { TbArrowRight } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="container mt-4 flex items-center justify-between max-w-[1450px] relative overflow-hidden w-full gap-20 rounded-3xl h-[650px] bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="container w-full max-w-[1255px] mx-auto flex items-center justify-between">
        <div className="flex flex-col items-start gap-6 w-[45%] max-lg:w-full max-lg:items-center max-lg:text-center">
          <span className="bg-sky-200 font-bold p-2 pr-4 text-sm flex items-center justify-center gap-2 rounded-full max-lg:text-xs max-lg:flex-wrap">
            <span className="px-2 py-1 bg-white rounded-full">Hesapla</span>
            Kira Artışı İçin Tıklayın!
          </span>
          <h1 className="flex flex-col text-nowrap text-5xl transition-all duration-300 font-extrabold gap-2 max-lg:text-4xl max-sm:text-3xl">
            Takip Kira ile Kolayı Var
            <RotatingText
              texts={[
                "Mülk Takibi!",
                "Kira Takibi!",
                "Sözleşme Takibi!",
                "Tadilat Takibi!",
              ]}
              mainClassName="transition-all duration-1000 ease-in-out w-full text-nowrap px-4 sm:px-2 md:px-3 bg-primary text-white overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
              rotationInterval={4000}
            />
          </h1>
          <p className="text-lg opacity-70 leading-relaxed max-lg:text-base">
            Takip Kira, kira takip sistemidir. Kira takip sistemini kullanarak
            kira takipini kolaylaştırın.
          </p>
          <div className="flex items-center justify-center gap-4 max-sm:flex-col max-sm:w-full">
            <button className="bg-primary text-white px-8 py-2 group rounded-full font-medium flex items-center justify-center gap-2 transition border border-primary hover:brightness-75 max-sm:w-full">
              Hemen Başla{" "}
              <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            <button className="bg-white text-primary px-8 py-2 group rounded-full font-medium border-gray-100 flex items-center justify-center gap-2 transition border hover:border-gray-400 max-sm:w-full">
              Daha Fazla{" "}
              <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 absolute bottom-24 max-lg:relative max-lg:bottom-0 max-lg:grid-cols-2">
            <PlayStore />
            <AppStore />
          </div>
        </div>
        <div className="relative left-20 lg:block hidden">
          <Image
            src="/assets/img/hero/taki_phone.webp"
            alt="mockup"
            width={700}
            height={700}
            className="relative top-16 drop-shadow-xl z-20"
            priority
          />
          <div className="absolute top-20 z-0 -right-0 left-96 w-full h-full">
            <Image
              src="/assets/blobs/blobs.svg"
              alt="blobs"
              width={1200}
              height={1200}
              className="scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
