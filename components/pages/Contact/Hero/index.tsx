import Button from "@/components/Button";
import { PhoneNumberInput } from "@/components/PhoneInput";
import { TbSend } from "react-icons/tb";

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
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <PhoneNumberInput
                placeholder="Telefon Numaranızı Giriniz"
                className="!bg-white"
                defaultCountry="TR"
              />
            </div>
            <Button
              className="h-full"
              leftIcon={<TbSend className="w-5 h-5" />}
            >
              Sizi Arayalım
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
