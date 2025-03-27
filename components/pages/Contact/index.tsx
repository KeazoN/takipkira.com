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
      <div className="container max-w-[1255px] mx-auto mt-24">
        <div className="grid grid-cols-2 gap-8">
          <Card
            title="Hemen Müşteri Ol!"
            description="Şimdi Takip Kira müşterisi olun ve kazançlarınızı izleyin."
            buttonText="Müşteri Ol"
            icon={<TbUserPlus className="w-5 h-5" />}
            backgroundColor="bg-secondary text-white"
            image="/assets/img/svg/hand.svg"
            buttonColor="bg-primary"
          />
          <Card
            title="Müşteri Temsilcimiz!"
            description="Sorunuzun cevabı yok mu? Müşteri Temsilcimize ulaşın."
            buttonText="Müşteri Temsilcisi"
            icon={<TbHeadphones className="w-5 h-5" />}
            backgroundColor="bg-[#0b3636] text-white"
            image="/assets/img/svg/customerService.svg"
            buttonColor="bg-success"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
