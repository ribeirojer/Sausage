import imagem from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (1).png";
import imagem2 from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (5).png";
import styled from "styled-components";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { MouseSimple } from "phosphor-react";

const Wrapper = styled.main`
  .wrapperb,
  .wrapperc {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    img {
      width: 50vw;
    }
  }
  .wrapperb {
    margin: 0 auto;
    div {
      margin: 4rem 0 0 2rem;
      align-items: flex-end;
    }
    h2 {
      text-align: end;

      span {
        color: #ffbb45;
      }
    }
    .desaparecer {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    .desaparecer.scroll {
      opacity: 0;
    }
    .mover {
      position: fixed;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      animation: moveUpDown 2s ease-in-out infinite;
    }

    @keyframes moveUpDown {
      0% {
        transform: translate(-50%, 0);
      }
      50% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 0);
      }
    }
  }

  .styledsection {
    padding: 3rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6dc8c2;
    color: #4a1942;

    h2 {
      font-size: 1.5rem;
    }

    .offer {
      display: flex;
      span {
        color: white;
        font-weight: bold;
        padding: 1rem;
        border-radius: 1rem;
        background-color: #4a1942;
        margin: 0 1rem;
      }
    }

    @media (min-width: 1024px) {
      gap: 3rem;
      flex-direction: column;
      h2 {
        font-size: 2rem;
      }
    }
  }

  .wrapperc {
    margin: 3rem auto;
    flex-direction: row-reverse;
    div {
      justify-content: center;
    }
    img {
      transform: scaleX(-1);
    }
  }
`;

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

  return (
    <Wrapper>
      <div className="wrapperb">
        <div>
          <h1>Olá! Pronto para expandir sua presença digital?</h1>
          <h2>
            Transforme sua <span>presença digital</span> e aumente seus
            resultados com nossas soluções de marketing personalizadas.
          </h2>
          <Link to={"/contact"}>
            <Button background="#C7B8F8" color="#2e1c20">
              SIM!
            </Button>
          </Link>
        </div>
        <MouseSimple className="desaparecer mover" size={32} />
        <img src={imagem} alt="" />
      </div>
      <div className="styledsection">
        <h1>O que nós ofereçemos</h1>
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
          <h2>Queremos ajudar a sua empresa a alcançar o sucesso digital. </h2>
          <h2>
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
