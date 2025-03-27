import FAQ from "./FAQ";
import Hero from "./Hero";
import Tabs from "./Tabs";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 mb-20">
      <Hero />
      <Tabs />
      <FAQ />
    </div>
  );
};

export default Contact;
