const Card = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-sky-50 transition-all duration-300 border border-sky-100 rounded-2xl p-4 group">
      <div className="flex items-center gap-4">
        <span className="bg-sky-100 text-sky-700 font-bold text-base lg:text-lg min-w-[48px] h-12 flex items-center justify-center border border-sky-200 rounded-full transition-all duration-300">
          {number}
        </span>
        <div>
          <h3 className="text-lg lg:text-xl font-bold">{title}</h3>
          <p className="text-gray-500 mt-1 text-sm lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
