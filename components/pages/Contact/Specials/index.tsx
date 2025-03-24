import { TbArrowRight, TbHome } from "react-icons/tb";
import Card from "./Card";

const Specials = () => {
  return (
    <section>
      <div className="container max-w-[1255px] flex flex-col gap-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-extrabold">
              En Güvenli{" "}
              <span className="text-primary">Sistemlerimizi Oluşturduk!</span>
            </h2>
            <p className="text-gray-500">
              Güvenlik ve mülk yönetimi için en güvenli sistemleri oluşturduk.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-primary text-white px-8 shadow-lg py-2 rounded-3xl group flex items-center gap-2 transition hover:brightness-75">
              Hemen Başla
              <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Card
            title="Güvenlik Sistemleri"
            description="Güvenlik ve mülk yönetimi için en güvenli sistemleri oluşturduk."
            icon={<TbHome className="w-8 h-8" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Specials;
