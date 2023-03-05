import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";
import Portifolio from "../components/Portifolio";

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
