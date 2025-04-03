import { TbHeadphones, TbUserPlus } from "react-icons/tb";
import Card from "./Card";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Tabs from "./Tabs";
import GoMobile from "../Home/GoMobile";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <Hero />
      <Tabs />
      <FAQ />
      <GoMobile />
      <div className="container max-w-[1255px] mx-auto mt-24 max-lg:mt-16 max-md:mt-12 max-sm:mt-8 px-4">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-4">
          <Card
            title="Hemen Müşteri Ol!"
            description="Şimdi Takip Kira müşterisi olun ve kazançlarınızı izleyin."
            buttonText="Müşteri Ol"
            icon={<TbUserPlus className="w-5 h-5" />}
            backgroundColor="bg-secondary text-white"
            image="/assets/img/svg/mobile.webp"
            buttonColor="bg-primary"
            href="https://panel.takipkira.com/musteri"
            target="_blank"
          />
          <Card
            title="Müşteri Temsilcimiz!"
            description="Sorunuzun cevabı yok mu? Müşteri Temsilcimize ulaşın."
            buttonText="Müşteri Temsilcisi"
            icon={<TbHeadphones className="w-5 h-5" />}
            backgroundColor="bg-[#0b3636] text-white"
            image="/assets/img/svg/customerService.webp"
            buttonColor="bg-success"
            href="tel:+905524114748"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
