import RotatingText from "@/components/animations/RotatingText";

const Hero = () => {
  return (
    <section className="container mt-4 flex flex-col md:flex-row items-center justify-center max-w-[1450px] relative overflow-hidden w-full gap-8 md:gap-20 rounded-3xl h-[300px] sm:h-[340px] md:h-[370px] bg-gradient-to-bl from-sky-50 to-sky-100 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center mt-8 md:mt-16 gap-4 md:gap-6 w-full md:w-[40%] max-md:relative max-md:top-4">
        <h1 className="flex flex-col text-center md:text-left text-3xl sm:text-4xl md:text-5xl transition-all duration-300 font-extrabold gap-2">
          <span className="whitespace-normal md:whitespace-nowrap">
            Sizin İçin Hizmetlerimiz
          </span>
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
            mainClassName="transition-all duration-1000 ease-in-out w-full text-nowrap px-2 sm:px-3 md:px-4 bg-primary text-white overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center rounded-lg text-2xl sm:text-3xl md:text-5xl"
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
        <p className="text-base sm:text-lg opacity-70 text-center leading-relaxed px-4 md:px-0">
          Mülkünüzün tüm işlerini bizde yapalım.
        </p>
      </div>
    </section>
  );
};

export default Hero;
