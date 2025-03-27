const Tabs = () => {
  return (
    <section>
      <div className="container max-w-[1255px] flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold">
            Sorularınızı Önceden{" "}
            <span className="text-primary">Tahmin Ettik!</span>
          </h2>
          <ul className="flex items-center gap-2">
            <li className="px-6 py-2 rounded-full cursor-pointer transition bg-primary text-white font-medium">
              Genel
            </li>
            <li className="px-6 py-2 rounded-full cursor-pointer border border-gray-200 transition hover:bg-gray-100 font-medium">
              Mülk Sahibi
            </li>
            <li className="px-6 py-2 rounded-full cursor-pointer border border-gray-200 transition hover:bg-gray-100 font-medium">
              Danışman
            </li>
            <li className="px-6 py-2 rounded-full cursor-pointer border border-gray-200 transition hover:bg-gray-100 font-medium">
              Kiracı
            </li>
            <li className="px-6 py-2 rounded-full cursor-pointer border border-gray-200 transition hover:bg-gray-100 font-medium">
              Tadilat
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
