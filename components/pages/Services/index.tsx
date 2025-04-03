import React from "react";
import Hero from "./Hero";
import ScrollTrigger from "./ScrollTrigger";
import GoMobile from "../Home/GoMobile";
import { TbHeadphones } from "react-icons/tb";
import Card from "../Contact/Card";
import { TbUserPlus } from "react-icons/tb";
import Service from "./Service";

const ServicesPageDetail = () => {
  return (
    <section className="mb-10">
      <Hero />
      <Service />
      <ScrollTrigger />
      <div className="my-32">
        <GoMobile />
      </div>
      <div className="container max-w-[1255px] mx-auto mt-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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
    </section>
  );
};

export default ServicesPageDetail;
