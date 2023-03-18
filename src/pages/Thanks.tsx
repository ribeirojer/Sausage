import imagem from "../assets/DrawKit Vector Illustration Black Friday & Online Shopping (10).png";
import Button from "../components/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {};

export const Wrapper = styled.main`
  max-width: 1280px;
  display: flex;
  margin: 2rem auto;
  justify-content: space-evenly;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    h1 {
      text-align: center;
    }
  }

  img {
    width: 100%;
    margin: 0 auto;
    height: auto;
    max-width: 600px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Thanks = (props: Props) => {
  return (
    <Wrapper>
      <div>
        <h1>
          E-mail enviado!<br></br> Em breve responderemos.
        </h1>
        <Link to={"/"}>
          <Button background="#C7B8F8" color="#2e1c20">
            Início
          </Button>
        </Link>
      </div>
      <img src={imagem} alt="" />
    </Wrapper>
  );
};

export default Thanks;
