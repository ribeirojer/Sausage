import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

type Props = {};

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

const CallToAction = (props: Props) => {
  return (
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
  );
};

export default CallToAction;
