import { TbFileText, TbPhoto, TbTools } from "react-icons/tb";

const DocumentStorage = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <section className="grid grid-cols-2 items-center gap-20 w-full">
        <div className="w-full h-[400px] bg-sky-50 border border-sky-100 rounded-2xl flex items-center text-sky-200 justify-center">
          <TbPhoto size={32} />
        </div>
        <div className="flex flex-col gap-4">
          <span className="bg-sky-200 font-bold p-2 pr-4 text-sm flex w-fit items-center justify-center gap-2 rounded-full">
            <span className="p-2 bg-white rounded-full">
              <TbFileText className="w-5 h-5" />
            </span>
            Sözleşme & Evrak Depolama
          </span>
          <h2 className="text-4xl font-bold">
            Önemli Belgeleriniz <span className="text-primary">Güvende!</span>
          </h2>
          <p className="text-gray-500">
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
