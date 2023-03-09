import styled from "styled-components";
import Button from "../../components/Button";
import imagem from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (1).png";
import { MouseSimple } from "phosphor-react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
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
`;

const Hero = () => {
  return (
    <Wrapper>
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
      <MouseSimple size={32} />
      <img src={imagem} alt="" />
    </Wrapper>
  );
};

export default Hero;
