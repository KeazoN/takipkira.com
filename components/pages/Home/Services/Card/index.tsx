import Link from "next/link";
import { ReactNode } from "react";
import { TbArrowRight } from "react-icons/tb";
interface CardProps {
  title: string;
  description?: string;
  icon: ReactNode;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-3xl p-6 flex items-center justify-center flex-col gap-4">
      <span className="bg-sky-100 text-sky-700 font-bold text-sm p-3 border border-sky-200 rounded-full">
        {icon}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        {description && (
          <p className="text-gray-500 text-center">{description}</p>
        )}
      </div>
      <Link href="/hizmetlerimiz" className="bg-primary text-white px-8 mt-2 shadow-lg py-2 rounded-3xl group flex items-center gap-2 transition hover:brightness-75">
        Daha Fazla
        <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
      </Link>
    </div>
  );
};

export default Card;
