import { TbChartBarPopular, TbPhoto } from "react-icons/tb";

const RentTracking = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <section className="grid grid-cols-2 items-center gap-20 w-full">
        <div className="flex flex-col gap-4">
          <span className="bg-sky-200 font-bold p-2 pr-4 text-sm flex w-fit items-center justify-center gap-2 rounded-full">
            <span className="p-2 bg-white rounded-full">
              <TbChartBarPopular className="w-5 h-5" />
            </span>
            Akıllı Kira Takibi
          </span>
          <h2 className="text-4xl font-bold">
            Kiranızı Takip Etmek Artık{" "}
            <span className="text-primary">Çok Kolay!</span>
          </h2>
          <p className="text-gray-500">
            Kira ödemelerinizi otomatik olarak takip edin, geciken ödemeler için
            anında bildirim alın. Geçmiş kira ödemelerinizi detaylı raporlarla
            inceleyerek finansal durumunuzu yönetin.
          </p>
        </div>
        <div className="w-full h-[400px] bg-sky-50 border border-sky-100 rounded-2xl flex items-center text-sky-200 justify-center">
          <TbPhoto size={32} />
        </div>
      </section>
    </div>
  );
};

export default RentTracking;
