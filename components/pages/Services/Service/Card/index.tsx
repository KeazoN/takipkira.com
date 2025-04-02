import { ReactNode } from "react";
import { TbArrowRight } from "react-icons/tb";
interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-3xl p-4 sm:p-5 md:p-6 flex items-center justify-center flex-col gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg">
      <span className="bg-sky-100 text-sky-700 font-bold text-sm p-2 sm:p-2.5 md:p-3 border border-sky-200 rounded-full transition-transform duration-300 hover:scale-110">
        {icon}
      </span>
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <h3 className="text-xl sm:text-2xl font-bold text-center transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-center text-sm sm:text-base line-clamp-2 sm:line-clamp-none">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
