import HeroSection from "./HeroSection";
import CallToAction from "./CallToAction";
import Portifolio from "./Portifolio";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection></HeroSection>
      <CallToAction></CallToAction>
      <Portifolio></Portifolio>
    </div>
  );
};

export default Home;
