import RotatingText from "@/components/animations/RotatingText";
import SplitText from "@/components/animations/SplitText";
import AppGallery from "@/components/AppGallery";
import AppStore from "@/components/AppStore";
import { Input } from "@/components/Input";
import PlayStore from "@/components/PlayStore";
import Image from "next/image";
import { TbArrowRight, TbMail, TbPhone, TbSearch } from "react-icons/tb";

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
        <div className="flex flex-col gap-3 w-full">
          <div className="relative flex items-center justify-center w-full">
            <input
              type="text"
              placeholder="Sorularınızı yazın..."
              className="py-3 rounded-full bg-white border pl-12 outline-none transition focus:ring focus:ring-primary w-full disabled:bg-gray-200 disabled:text-gray-500"
            />
            <button className="absolute left-4 text-gray-400">
              <TbSearch className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button className="flex items-center justify-center gap-2 w-fit px-3 py-1 rounded-full bg-danger/15 text-danger border border-danger font-medium transition hover:text-white hover:bg-danger">
              <p className="text-xs">Acil Destek</p>
            </button>
            <button className="flex items-center justify-center gap-2 w-fit px-3 py-1 rounded-full bg-warning/15 text-warning border border-warning font-medium transition hover:text-white hover:bg-warning">
              <p className="text-xs">Kritik Bildirim</p>
            </button>
            <button className="flex items-center justify-center gap-2 w-fit px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary font-medium transition hover:text-white hover:bg-primary">
              <p className="text-xs">Olsa Fena Olmaz</p>
            </button>
            <button className="flex items-center justify-center gap-2 w-fit px-3 py-1 rounded-full bg-success/15 text-success border border-success font-medium transition hover:text-white hover:bg-success">
              <p className="text-xs">İstek</p>
            </button>
          </div>
        </div>

        <p className="text-xs relative top-8 text-gray-500">
          Lütfen{" "}
          <a href="#" className="text-primary underline">
            Hizmet Sözleşmesi
          </a>{" "}
          ve{" "}
          <a href="#" className="text-primary underline">
            Gizlilik Politikası
          </a>{" "}
          okuduğunuza emin olunuz.
        </p>
      </div>
    </section>
  );
};

export default Hero;
