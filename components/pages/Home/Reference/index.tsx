"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Reference = () => {
  const references = [
    { src: "/assets/img/ref/albaraka.png", alt: "albaraka" },
    { src: "/assets/img/ref/kuveyt.svg", alt: "kuveyt" },
    { src: "/assets/img/ref/turktelekom.png", alt: "turktelekom" },
    { src: "/assets/img/ref/puzzleLogo.svg", alt: "puzzle" },
    { src: "/assets/img/ref/erciyesTeknopark.svg", alt: "erciyesTeknopark" },
    { src: "/assets/img/ref/albaraka.png", alt: "albaraka" },
    { src: "/assets/img/ref/kuveyt.svg", alt: "kuveyt" },
    { src: "/assets/img/ref/turktelekom.png", alt: "turktelekom" },
    { src: "/assets/img/ref/puzzleLogo.svg", alt: "puzzle" },
    { src: "/assets/img/ref/erciyesTeknopark.svg", alt: "erciyesTeknopark" },
    { src: "/assets/img/ref/albaraka.png", alt: "albaraka" },
    { src: "/assets/img/ref/kuveyt.svg", alt: "kuveyt" },
    { src: "/assets/img/ref/turktelekom.png", alt: "turktelekom" },
    { src: "/assets/img/ref/puzzleLogo.svg", alt: "puzzle" },
    { src: "/assets/img/ref/erciyesTeknopark.svg", alt: "erciyesTeknopark" },
  ];
  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="container flex items-center justify-center flex-col gap-10 max-w-[1255px]">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center flex-col gap-2 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-3xl">
              Onlarla Çalışıyoruz,{" "}
              <span className="text-primary">Gücünüze Güç Katıyoruz!</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
              Bize güvenen markalarla birlikte, kira yönetimini daha kolay ve
              verimli hale getiriyoruz. İş ortaklarımızla güçlü çözümler
              üretiyor, sektöre değer katıyoruz.
            </p>
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap relative w-full">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-[50px] sm:w-[100px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-[50px] sm:w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 70,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-flex items-center justify-start gap-10 sm:gap-20"
            >
              {references.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={50}
                  className="h-6 sm:h-8 md:h-10 w-fit object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reference;
