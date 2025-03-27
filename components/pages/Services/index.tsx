import ContentHero from "@/components/ContentHero";
import React from "react";
import Services from "../Home/Services";

const ServicesPageDetail = () => {
  return (
    <>
      <ContentHero
        title="Size Özel"
        title2="Hizmetlerimiz"
        description="Hizmetlerimiz hakkında bilgi almak için lütfen aşağıdaki butonlara tıklayınız."
      />
      <Services />
    </>
  );
};

export default ServicesPageDetail;
