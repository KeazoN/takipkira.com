import AppStore from "@/components/AppStore";
import PlayStore from "@/components/PlayStore";
import Image from "next/image";
import { TbArrowRight } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="container mt-4 flex items-center justify-center max-w-[1450px] relative overflow-hidden w-full gap-20 rounded-3xl h-[650px] bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="flex flex-col items-start gap-6 w-[40%]">
        <span className="bg-sky-200 font-bold p-2 pr-4 text-sm flex items-center justify-center gap-2 rounded-full">
          <span className="px-2 py-1 bg-white rounded-full">Yeni!</span>
          Panel Güncelleme
        </span>
        <h1 className="text-4xl font-bold">
          Mülklerinizin Bütün İşlerini{" "}
          <span className="text-primary">Bize Bırakın!</span>
        </h1>
        <p className="text-lg opacity-70 leading-relaxed">
          Takip Kira, kira takip sistemidir. Kira takip sistemini kullanarak
          kira takipini kolaylaştirin.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-primary text-white px-8 py-2 group rounded-full font-medium flex items-center justify-center gap-2 transition border border-primary hover:brightness-75">
            Hemen Başla{" "}
            <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
          <button className="bg-white text-primary px-8 py-2 group rounded-full font-medium border-gray-100 flex items-center justify-center gap-2 transition border hover:border-gray-400">
            Daha Fazla{" "}
            <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 absolute bottom-24">
          <PlayStore />
          <AppStore />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/img/phone/mockup.png"
          alt="mockup"
          width={600}
          height={600}
          className="relative top-16 drop-shadow-lg z-20"
        />
        <div className="absolute top-20 z-0 -right-16 w-full h-full">
          <Image
            src="/assets/blobs/blobs.svg"
            alt="blobs"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
