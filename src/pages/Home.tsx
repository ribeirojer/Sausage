import Header from "../components/Header";
import imagem from "../assets/IMG-20230202-WA0006.jpg";

const Home = () => {
  return (
    <div className="relative">
      {/*<Header></Header>*/}
      <h1 className="absolute bottom-[10vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold z-10">
        Breve Novidades!
      </h1>
      <img className="w-[100vw] h-[100vh]" src={imagem} alt="" />
    </div>
  );
};

export default Home;
