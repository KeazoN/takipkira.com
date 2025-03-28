import RotatingText from "@/components/animations/RotatingText";

const Hero = () => {
  return (
    <section className="container mt-4 flex items-center justify-center max-w-[1450px] relative overflow-hidden w-full gap-20 rounded-3xl h-[370px] bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="flex flex-col items-center justify-center mt-16 gap-6 w-[40%]">
        <h1 className="flex flex-col text-nowrap text-5xl transition-all duration-300 font-extrabold gap-2">
          Sizin İçin Hizmetlerimiz
          <RotatingText
            texts={[
              "Güvenli Kiralama",
              "Kira & Tahsilat",
              "Mülkün Fiziki Durumu",
              "Sözleşme Takibi",
              "Risk Koruması",
              "Ödeme Takibi",
              "Online Şube",
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
          Mülkünüzün tüm işlerini bizde yapalım.
        </p>
      </div>
    </section>
  );
};

export default Hero;
