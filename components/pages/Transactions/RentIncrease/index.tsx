import ContentHero from "@/components/ContentHero";
import Calc from "./Calc";
import SquareCard from "../../Contact/FAQ/SquareCard";
import RectangleCard from "../../Contact/FAQ/RectangleCard";
import Table from "./Table";

const questions = [
  {
    title: "Kira artış oranı nasıl hesaplanır?",
    description:
      "Kira artış oranı, Türkiye İstatistik Kurumu tarafından açıklanan TÜFE oranına göre hesaplanır. Kira artış oranı, TÜFE'nin yıllık ortalamasının %25'ini geçemez.",
  },
  {
    title: "Kira artış oranı ne zaman uygulanır?",
    description:
      "Kira artış oranı, kira sözleşmesinin yenilenme tarihinde uygulanır. Kira artış oranı, kiracıya en az 15 gün önceden yazılı olarak bildirilmelidir.",
  },
  {
    title: "Kira artış oranı sınırı nedir?",
    description:
      "6098 sayılı Türk Borçlar Kanunu'na göre kira artış oranı, bir önceki kira yılında TÜFE'de gerçekleşen artış oranını geçemez. Bu oran en fazla %25 olabilir.",
  },
  {
    title: "Kira artış oranı nasıl öğrenilir?",
    description:
      "Kira artış oranını TÜİK'in resmi web sitesinden, e-Devlet üzerinden veya Takip Kira gibi güvenilir platformlardan öğrenebilirsiniz.",
  },
  {
    title: "Kira artış oranı zorunlu mudur?",
    description:
      "Kira artış oranı yasal bir haktır ancak zorunlu değildir. Ev sahibi ve kiracı karşılıklı anlaşarak farklı bir oran belirleyebilir veya artış yapmamayı tercih edebilir.",
  },
];

const RentIncrease = () => {
  return (
    <section className="flex flex-col gap-10 mb-10">
      <ContentHero
        title="Yeni Zamlarla Birlikte"
        title2="Kira Artış Oranı Hesapla"
        description="Takip Kira ile birlikte kira artış oranınızı yasal düzeyde hesaplayın."
      />
      <Calc />
      <div className="container max-w-[1255px] flex flex-col gap-4">
        {questions.map((question, index) => (
          <RectangleCard
            key={index}
            title={question.title}
            description={question.description}
          />
        ))}
      </div>
      <Table />
    </section>
  );
};

export default RentIncrease;
