import ContentHero from "@/components/ContentHero";
import Calc from "./Calc";

const RentIncrease = () => {
  return (
    <section className="flex flex-col gap-10 mb-10">
      <ContentHero
        title="Yeni Zamlarla Birlikte"
        title2="Kira Artış Oranı Hesapla"
        description="Takip Kira ile birlikte kira artış oranınızı yasal düzeyde hesaplayın."
      />
      <Calc />
    </section>
  );
};

export default RentIncrease;
