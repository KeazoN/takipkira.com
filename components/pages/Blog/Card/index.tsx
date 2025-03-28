import Image from "next/image";
import Link from "next/link";
import { TbArrowRight, TbPhoto } from "react-icons/tb";

const Card = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {/* <Image
          src="/assets/img/blog-placeholder.jpg"
          alt="Blog"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        /> */}
        <TbPhoto className="w-10 h-10 text-gray-400" />
      </div>
      <div className="p-6">
        <span className="text-sm text-primary font-medium">Emlak</span>
        <h2 className="text-xl font-bold mt-2 mb-3">
          Kira Yönetiminde Yeni Trendler
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">
          Modern emlak sektöründe kira yönetimi için önemli ipuçları ve yeni
          teknolojiler...
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">5 Mart 2024</span>
          <Link
            href="/blog/detay"
            className="text-primary font-medium flex items-center gap-2"
          >
            Devamını Oku
            <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
