import imagem from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (1).png";
import Portifolio from "../../components/Portifolio";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { MouseSimple } from "phosphor-react";
import { useRef, useState } from "react";

const Wrapperb = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  div {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3rem;
  }
  h2 {
    text-align: end;
  }
  img {
    width: 50vw;
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
`;

const StyledSection = styled.section`
  padding: 3rem 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 0;
    gap: 3rem;
    flex-direction: unset;
    h2 {
      font-size: 2rem;
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
    <main>
      <Wrapperb>
        <div>
          <h1>OLÁ! Pronto para expandir sua presença digital?</h1>
          <h2>
            Transforme sua presença digital e aumente seus resultados com nossas
            soluções de marketing personalizadas.
          </h2>
          <Link to={"/contact"}>
            <Button>SIM!</Button>
          </Link>
        </div>
        <MouseSimple className="desaparecer mover" size={32} />

        <img src={imagem} alt="" />
      </Wrapperb>
      <StyledSection>
        <h2>
          Queremos ajudar a sua empresa a alcançar o sucesso digital. <br></br>
          Entre em contato conosco hoje mesmo e saiba como nossos serviços
          personalizados podem levar o seu negócio para o próximo nível.
        </h2>
        <Link to={"/contact"}>
          <Button>Contato</Button>
        </Link>
      </StyledSection>
      <Portifolio></Portifolio>
    </main>
  );
}

export default Home;
