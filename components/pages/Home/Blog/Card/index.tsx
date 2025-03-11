import Image from "next/image";
import { TbArrowRight } from "react-icons/tb";

const Card = () => {
  return (
    <div className="bg-sky-50 border border-gray-200 flex flex-col gap-4 rounded-3xl p-2">
      <Image
        src="/assets/img/blog/1.jpg"
        alt="blog_1"
        width={500}
        height={500}
        className="h-[200px] w-full object-cover rounded-3xl border border-sky-200"
      />
      <div className="flex items-center flex-col gap-4 p-1">
        <h2 className="text-2xl font-bold">
          Mülk Takip Kira'sının Yeni Hizmetleri
        </h2>
        <p className="text-gray-500">
          Mülk Takip Kira, mülk sahiplerinin mülklerini takip etmek için yeni
          hizmetler sunuyor.
        </p>
        <button className="bg-primary w-full justify-center text-white px-8 shadow-lg py-2 rounded-3xl group flex items-center gap-2 transition hover:brightness-75">
          Devamını Oku
          <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </button>
      </div>
    </div>
  );
};

export default Card;
