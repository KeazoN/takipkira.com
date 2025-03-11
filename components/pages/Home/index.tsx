import GoMobile from "./GoMobile";
import Hero from "./Hero";
import Presentation from "./Presentation";
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
      <Presentation />
      <GoMobile />
    </div>
  );
};

export default Home;
