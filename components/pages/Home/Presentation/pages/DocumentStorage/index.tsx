import Image from "next/image";
import { TbFileText, TbPhoto, TbTools } from "react-icons/tb";

const DocumentStorage = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4">
      <section className="flex flex-col lg:!grid lg:grid-cols-2 items-center gap-8 lg:gap-20 w-full">
        <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-2xl flex items-center text-sky-200 justify-center mt-4 lg:mt-0">
          <Image
            src="/assets/img/slayt/sozlesme.png"
            alt="Sözleşme & Evrak Depolama"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="bg-sky-200 font-bold p-2 pr-4 text-xs sm:text-sm flex w-fit items-center justify-center gap-2 rounded-full mx-auto lg:mx-0">
            <span className="p-1.5 sm:p-2 bg-white rounded-full">
              <TbFileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            Sözleşme & Evrak Depolama
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Önemli Belgeleriniz <span className="text-primary">Güvende!</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Kira kontratları, tapular ve diğer önemli belgeleri dijital olarak
            saklayın. İstediğiniz zaman tek tıkla erişin ve evraklarınızı
            kaybetme riskini ortadan kaldırın.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DocumentStorage;
