import Hero from "./Hero";
import Reference from "./Reference";
import Services from "./Services";
import WhoAreWe from "./WhoAreWe";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 mb-20">
      <Hero />
      <Reference />
      <Services />
      <WhoAreWe />
    </div>
  );
};

export default Home;
