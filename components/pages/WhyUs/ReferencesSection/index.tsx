import { TbUser, TbQuote } from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const references = [
  {
    quote:
      "Takip Kira ile mülklerimin takibini artık düşünmüyorum. Her şeyi onlar hallediyor.",
    name: "Ali Yıldırım",
    title: "Mülk Sahibi, Kayseri",
  },
  {
    quote:
      "Kiracılarımla ilgili tüm işlemleri Takip Kira yönetiyor. Zamandan ve maliyetten tasarruf ediyorum.",
    name: "Zeynep Kaya",
    title: "İşletme Sahibi, İstanbul",
  },
  {
    quote:
      "Profesyonel ekipleri sayesinde mülklerimin takibi çok kolay. Düzenli raporlar ve ödemeler için teşekkürler.",
    name: "Murat Demir",
    title: "Yatırımcı, Ankara",
  },
];

const ReferencesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container max-w-[1255px] mx-auto">
        <SectionTitle
          title="Takip Kira'nın"
          highlight="Referansları"
          description="Müşterilerimizin memnuniyet ve deneyimleri."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {references.map((reference, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <TbQuote className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-600 mb-6 mt-4 text-lg leading-relaxed italic">
                "{reference.quote}"
              </p>
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <TbUser className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">
                    {reference.name}
                  </p>
                  <p className="text-sm text-gray-500">{reference.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
