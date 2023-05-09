import imagem from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (1).png";
import imagem2 from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (5).png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { MouseSimple } from "phosphor-react";
import { Wrapper } from "./Styles";
import { useEffect } from "react";

function Home() {
  document.addEventListener("scroll", function () {
    var elemento = document.querySelector(".desaparecer");
    var scrollPosicao =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop;

    if (scrollPosicao > 20) {
      elemento?.classList.add("scroll");
    } else {
      elemento?.classList.remove("scroll");
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <div className="wrapperb">
        <div>
          <h1 className="toOcultSmall">
            Olá! Pronto para expandir sua presença digital?
          </h1>
          <h2 className="toOcult text-2xl">
            Transforme sua <span>presença digital</span> e aumente seus
            resultados com nossas soluções de marketing personalizadas.
          </h2>
          <Link to={"/contact"}>
            <Button background="#ffbb45" color="#2e1c20">
              SIM!
            </Button>
          </Link>
        </div>
        <MouseSimple className="desaparecer mover" size={32} />
        <img src={imagem} alt="" />
      </div>
      <div className="styledsection">
        <h1>O que nós oferecemos</h1>
        <div className="offer">
          <span>Landing Pages</span>
          <span>Sites Corporativos</span>
          <span>Blogs</span>
          <span>Branding</span>
          <span>Marketing Digital</span>
          <span>E-commerces</span>
        </div>
      </div>
      <div className="wrapperc">
        <div>
          <h2
            className="toOcult text-2xl"
            style={{
              fontFamily: "Dancing Script",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Queremos ajudar a sua empresa a alcançar o sucesso digital.{" "}
          </h2>
          <h2
            className="text-2xl"
            style={{
              fontFamily: "Dancing Script",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Entre em contato conosco hoje mesmo e saiba como nossos serviços
            personalizados podem levar o seu negócio para o próximo nível.
          </h2>
          <Link to={"/contact"}>
            <Button background="#ffbb45" color="#2e1c20">
              Contato
            </Button>
          </Link>
        </div>
        <img src={imagem2} alt="" />
      </div>
    </Wrapper>
  );
}

export default Home;
