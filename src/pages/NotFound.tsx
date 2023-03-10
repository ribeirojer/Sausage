import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

type Props = {};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: 100vh;
`;

const NotFound = (props: Props) => {
  return (
    <Wrapper>
      <h2>Página não encontrada.</h2>
      <Link to={"/"}>
        <Button background="" color="">
          Ir para o início
        </Button>
      </Link>
    </Wrapper>
  );
};

export default NotFound;
