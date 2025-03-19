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
        <h1 className="flex flex-col text-nowrap text-5xl  transition-all duration-300 font-extrabold gap-2">
          Takip Kira ile Kolayı Var
          <RotatingText
            texts={[
              "Mülk Takibi Bizde!",
              "Kira Takibi Bizde!",
              "Sözleşme Takibi Bizde!",
              "Tadilat Takibi Bizde!",
              "Sözleşme Takibi Bizde!",
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
        <p className="text-lg opacity-70 text-center leading-relaxed">
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
      </div>
    </section>
  );
};

export default Hero;
