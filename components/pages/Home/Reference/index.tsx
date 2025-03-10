import Image from "next/image";
import { TbArrowRight, TbLogin } from "react-icons/tb";

const Reference = () => {
  return (
    <section>
      <div className="container flex items-center justify-center flex-col gap-10 max-w-[1255px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-extrabold">
              Onlarla Çalışıyoruz,{" "}
              <span className="text-primary">Gücünüze Güç Katıyoruz!</span>
            </h2>
            <p className="text-gray-500">
              İşletmelerinizin güvenliğini sağlamak için güvenilir bir partner
              arıyorsanız, bizimle iletişime geçin.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-primary text-white px-8 shadow-lg py-2 rounded-3xl group flex items-center gap-2 transition hover:brightness-75">
              Hemen Başla
              <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="w-[1000px] relative">
            <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="animate-slide flex items-center justify-start gap-20">
              <Image
                src="/assets/img/ref/albaraka.png"
                alt="reference"
                width={150}
                height={50}
                className="h-10 w-fit object-contain"
              />
              <Image
                src="/assets/img/ref/albaraka.png"
                alt="reference"
                width={150}
                height={50}
                className="h-10 w-fit object-contain"
              />
              <Image
                src="/assets/img/ref/albaraka.png"
                alt="reference"
                width={150}
                height={50}
                className="h-10 w-fit object-contain"
              />
              <Image
                src="/assets/img/ref/albaraka.png"
                alt="reference"
                width={150}
                height={50}
                className="h-10 w-fit object-contain"
              />
              <Image
                src="/assets/img/ref/albaraka.png"
                alt="reference"
                width={150}
                height={50}
                className="h-10 w-fit object-contain"
              />
              <Image
                src="/assets/img/ref/albaraka.png"
                alt="reference"
                width={150}
                height={50}
                className="h-10 w-fit object-contain"
              />
              <Image
                src="/assets/img/ref/albaraka.png"
                alt="reference"
                width={150}
                height={50}
                className="h-10 w-fit object-contain"
              />
              <Image
                src="/assets/img/ref/albaraka.png"
                alt="reference"
                width={150}
                height={50}
                className="h-10 w-fit object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reference;
