import Hero from "./Hero";
import Reference from "./Reference";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 mb-20">
      <Hero />
      <Reference />
    </div>
  );
};

export default Home;
