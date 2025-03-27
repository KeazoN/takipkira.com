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
    <section className="container mt-4 flex items-center justify-center max-w-[1450px] relative overflow-hidden w-full gap-20 rounded-3xl h-[370px] bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="flex flex-col items-center justify-center mt-16 gap-6 w-[40%]">
        <h1 className="flex flex-col text-nowrap text-5xl  text-center items-center justify-center transition-all duration-300 font-extrabold gap-2">
          {title}
          <span className="rounded-lg bg-primary text-center text-white px-4 py-2">
            {title2}
          </span>
        </h1>
        <p className="text-lg opacity-70 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ContentHero;
