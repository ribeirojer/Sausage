import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Portifolio from "../components/Portifolio";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection></HeroSection>
      <CallToAction></CallToAction>
      <Portifolio></Portifolio>
      <Footer></Footer>
    </div>
  );
};

export default Home;
