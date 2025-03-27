import Blog from "./Blog";
import GoMobile from "./GoMobile";
import Hero from "./Hero";
import Presentation from "./Presentation";
import Reference from "./Reference";
import Services from "./Services";
import WhoAreWe from "./WhoAreWe";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Home = () => {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.8,
        smartphone: {
          breakpoint: 0,
        },
      }}
    >
      <div className="flex flex-col gap-10 mb-20">
        <Hero />
        <Reference />
        <Services />
        <WhoAreWe />
        <Presentation />
        <GoMobile />
        <Blog />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
