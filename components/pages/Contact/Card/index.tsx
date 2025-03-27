import Image from "next/image";
import { TbUserPlus } from "react-icons/tb";

const Card = ({
  title,
  description,
  buttonText,
  image,
  icon,
  backgroundColor,
  buttonColor,
}: {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  icon: React.ReactNode;
  backgroundColor: string;
  buttonColor: string;
}) => {
  return (
    <div
      className={`w-full h-full flex shadow-md itmes-center rounded-3xl p-6 justify-between gap-8 ${backgroundColor}`}
    >
      <div className="flex justify-center flex-col gap-4 w-1/2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="opacity-60">{description}</p>
        <button
          className={`w-fit text-white px-4 py-2 rounded-3xl flex items-center gap-2 transition hover:brightness-75 ${buttonColor}`}
        >
          {icon} {buttonText}
        </button>
      </div>
      <div className="w-1/2 flex items-end justify-end">
        <Image
          src={image}
          alt="card"
          width={500}
          height={400}
          className="h-40 w-fit object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
