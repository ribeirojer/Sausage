import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

type Props = {};

const StyledSection = styled.section`
  padding: 3rem 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  @media (min-width: 1024px) {
    padding: 6rem 0;
  }
`;


const CallToAction = (props: Props) => {
  return (
    <StyledSection>
      <h2>
        Queremos ajudar a sua empresa a alcançar o sucesso digital. <br></br>Entre em
        contato conosco hoje mesmo e saiba como nossos serviços personalizados
        podem levar o seu negócio para o próximo nível.
      </h2>
      <Link to={"/contact"}>
        <Button background={""} color={""}>
          Contato
        </Button>
      </Link>
    </StyledSection>
  );
};

export default CallToAction;
