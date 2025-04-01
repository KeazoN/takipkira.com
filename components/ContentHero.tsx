const ContentHero = ({
  title,
  title2,
  description,
}: {
  title: string;
  title2: string;
  description: string;
}) => {
  return (
    <section className="container mt-4 flex items-center justify-center max-w-[1450px] relative overflow-hidden w-full gap-20 rounded-3xl h-[370px] max-lg:h-fit max-lg:py-16 bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="flex flex-col items-center justify-center mt-16 max-lg:mt-0 gap-6 w-[40%] max-lg:w-[90%] max-sm:w-full max-sm:px-4 max-md:relative max-md:top-8">
        <h1 className="flex flex-col text-nowrap max-lg:text-wrap text-5xl max-lg:text-4xl max-sm:text-3xl text-center items-center justify-center transition-all duration-300 font-extrabold gap-2">
          {title}
          <span className="rounded-lg bg-primary text-center text-white px-4 py-2 max-sm:px-3 max-sm:py-1.5">
            {title2}
          </span>
        </h1>
        <p className="text-lg max-lg:text-base opacity-70 text-center leading-relaxed max-sm:text-sm">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ContentHero;
