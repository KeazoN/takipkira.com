import { TbCash, TbPhoto } from "react-icons/tb";

const IncomeExpenseAnalysis = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4">
      <section className="flex flex-col-reverse lg:!grid lg:grid-cols-2 items-center gap-8 lg:gap-20 w-full">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="bg-sky-200 font-bold p-2 pr-4 text-xs sm:text-sm flex w-fit items-center justify-center gap-2 rounded-full mx-auto lg:mx-0">
            <span className="p-1.5 sm:p-2 bg-white rounded-full">
              <TbCash className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            Gelir & Gider Analizi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Mülklerinizin Finansal Durumunu{" "}
            <span className="text-primary">Kontrol Edin!</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Kira gelirlerinizi ve harcamalarınızı detaylı grafiklerle inceleyin.
            Gelir-gider dengenizi koruyarak, mülklerinizden maksimum verim alın.
          </p>
        </div>
        <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-sky-50 border border-sky-100 rounded-2xl flex items-center text-sky-200 justify-center mt-4 lg:mt-0">
          <TbPhoto className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
      </section>
    </div>
  );
};

export default IncomeExpenseAnalysis;
