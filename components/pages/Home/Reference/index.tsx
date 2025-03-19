"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Reference = () => {
  const references = [
    { src: "/assets/img/ref/albaraka.png", alt: "albaraka" },
    { src: "/assets/img/ref/kuveyt.svg", alt: "kuveyt" },
    { src: "/assets/img/ref/kuveytTurkApi.svg", alt: "kuveytturkapi" },
    { src: "/assets/img/ref/turktelekom.png", alt: "turktelekom" },
    { src: "/assets/img/ref/puzzleLogo.svg", alt: "puzzle" },
    { src: "/assets/img/ref/erciyesTeknopark.svg", alt: "erciyesTeknopark" },
    { src: "/assets/img/ref/albaraka.png", alt: "albaraka" },
    { src: "/assets/img/ref/kuveyt.svg", alt: "kuveyt" },
    { src: "/assets/img/ref/kuveytTurkApi.svg", alt: "kuveytturkapi" },
    { src: "/assets/img/ref/turktelekom.png", alt: "turktelekom" },
    { src: "/assets/img/ref/puzzleLogo.svg", alt: "puzzle" },
    { src: "/assets/img/ref/erciyesTeknopark.svg", alt: "erciyesTeknopark" },
    { src: "/assets/img/ref/albaraka.png", alt: "albaraka" },
    { src: "/assets/img/ref/kuveyt.svg", alt: "kuveyt" },
    { src: "/assets/img/ref/kuveytTurkApi.svg", alt: "kuveytturkapi" },
    { src: "/assets/img/ref/turktelekom.png", alt: "turktelekom" },
    { src: "/assets/img/ref/puzzleLogo.svg", alt: "puzzle" },
    { src: "/assets/img/ref/erciyesTeknopark.svg", alt: "erciyesTeknopark" },
  ];
  return (
    <section className="mt-10">
      <div className="container flex items-center justify-center flex-col gap-10 max-w-[1255px]">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center flex-col gap-2">
            <h2 className="text-4xl font-extrabold">
              Onlarla Çalışıyoruz,{" "}
              <span className="text-primary">Gücünüze Güç Katıyoruz!</span>
            </h2>
            <p className="text-gray-500">
              İşletmelerinizin güvenliğini sağlamak için güvenilir bir partner
              arıyorsanız, bizimle iletişime geçin.
            </p>
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 70,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-flex items-center justify-start gap-20"
            >
              {references.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={50}
                  className="h-10 w-fit object-contain"
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
