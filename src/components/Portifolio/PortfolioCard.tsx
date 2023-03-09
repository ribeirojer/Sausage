import styled from "styled-components";
import Button from "../Button";

type Props = {
  imgSrc: string;
  category: string;
  title: string;
};

const Card = styled.div`
  width: 100%;
  padding: 0 4px;
  margin-bottom: 2rem;

  img {
    overflow: hidden;
    border-radius: 0.5rem;
    border: 1px solid #d4d4d4;
  }
  div {
    position: relative;
    z-index: 10;
    margin: 0 7px;
    width: 100%;
    padding: 2rem 1.5rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -3.125rem;
    border-radius: 0.5rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  span {
    display: block;
    color: #00f;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 33.3333%;
  }
`;

const CardComponent = ({ imgSrc, category, title }: Props) => {
  return (
    <Card>
      <img src={imgSrc} alt={title} />
      <div>
        <span>{category}</span>
        <h3>{title}</h3>
        <Button>Ver Detalhes</Button>
      </div>
    </Card>
  );
};

export default CardComponent;
