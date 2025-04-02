const Tabs = () => {
  return (
    <section>
      <div className="container max-w-[1255px] flex flex-col gap-10 px-4">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-extrabold">
            Sorularınızı Önceden{" "}
            <span className="text-primary">Tahmin Ettik!</span>
          </h2>
          <ul className="flex items-center gap-2 max-sm:flex-col max-sm:w-full">
            <li className="px-6 py-2 rounded-full cursor-pointer transition bg-primary text-white font-medium max-sm:text-sm max-sm:w-full max-sm:text-center">
              Genel
            </li>
            <li className="px-6 py-2 rounded-full cursor-pointer border border-gray-200 transition hover:bg-gray-100 font-medium max-sm:text-sm max-sm:w-full max-sm:text-center">
              Mülk Sahibi
            </li>
            <li className="px-6 py-2 rounded-full cursor-pointer border border-gray-200 transition hover:bg-gray-100 font-medium max-sm:text-sm max-sm:w-full max-sm:text-center">
              Kiracı
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
