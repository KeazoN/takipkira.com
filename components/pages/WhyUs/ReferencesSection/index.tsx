import { TbUser, TbQuote } from "react-icons/tb";
import SectionTitle from "../shared/SectionTitle";

const references = [
  {
    quote:
      "Takip Kira'nın kurumsal çözümleri sayesinde 500+ mülkün yönetimini yapıyoruz.",
    name: "Ali Yıldırım",
    title: "Teknopark Yöneticisi, Teknopark Kayseri",
  },
  {
    quote:
      "Takip Kira platformu ile kira yönetim maliyetlerimizi %40 oranında optimize ettik.",
    name: "Zeynep Kaya",
    title: "Finans Müdürü, XYZ Group",
  },
  {
    quote:
      "Blockchain altyapısı ve anlık raporlama özellikleri ile sektörün en kapsamlı çözümü.",
    name: "Murat Demir",
    title: "Teknoloji Direktörü, DEF Real Estate",
  },
];

const ReferencesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container max-w-[1255px] mx-auto">
        <SectionTitle
          title="Takip Kira'nın"
          highlight="Referansları"
          description="Müşterilerimizin başarı hikayeleri ve deneyimleri."
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
