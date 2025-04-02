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
      className={`w-full h-full flex max-lg:flex-col shadow-md items-center rounded-3xl p-6 max-sm:p-4 justify-between gap-8 max-lg:gap-6 ${backgroundColor}`}
    >
      <div className="flex justify-center flex-col gap-4 w-1/2 max-lg:w-full max-lg:text-center max-lg:items-center">
        <h3 className="text-2xl max-sm:text-xl font-bold">{title}</h3>
        <p className="opacity-60 max-sm:text-sm">{description}</p>
        <button
          className={`w-fit text-white px-6 py-2.5 max-sm:px-4 max-sm:py-2 rounded-3xl flex items-center gap-2 transition hover:brightness-75 ${buttonColor}`}
        >
          {icon} {buttonText}
        </button>
      </div>
      <div
        className={`w-1/2 max-lg:w-full flex items-end justify-end max-lg:justify-center h-[150px]`}
      >
        {image === "/assets/img/svg/mobile.webp" ? (
          <Image
            src={image}
            alt="card"
            width={500}
            height={400}
            className="h-36 max-sm:h-32 w-fit object-cover"
          />
        ) : (
          <Image
            src={image}
            alt="card"
            width={500}
            height={400}
            className="h-48 relative top-[26px] left-0 max-sm:h-32 w-fit object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
