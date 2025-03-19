import RotatingText from "@/components/animations/RotatingText";
import SplitText from "@/components/animations/SplitText";
import AppGallery from "@/components/AppGallery";
import AppStore from "@/components/AppStore";
import PlayStore from "@/components/PlayStore";
import Image from "next/image";
import { TbArrowRight } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="container mt-4 flex items-center justify-center max-w-[1450px] relative overflow-hidden w-full gap-20 rounded-3xl h-[500px] bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="flex flex-col items-center justify-center mt-16 gap-6 w-[40%]">
        <h1 className="flex flex-col text-nowrap text-5xl  text-center items-center justify-center transition-all duration-300 font-extrabold gap-2">
          Sorularınız Mı Var?
          <span className="rounded-lg bg-primary text-center text-white px-4 py-2">
            Hemen Bize Ulaşın!
          </span>
        </h1>
        <p className="text-lg opacity-70 text-center leading-relaxed">
          Takip Kira ile ilgili veya mülk yönetimi ile ilgili sorularınızı
          direkt sorun.
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
      </div>
    </section>
  );
};

export default Hero;
