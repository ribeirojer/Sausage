import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  background: string;
  color: string;
  children: ReactNode;
};

const ButtonWrapper = styled.button<Props>`
  margin-top: 15px;
  text-transform: uppercase;
  display: inline-block;
  padding: 10px 55px;
  background-color: ${(props) => props.background || "#8e5572"};
  color: ${(props) => props.color || "#ffffff"};
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  border: 2px solid ${(props) => props.background || "#8e5572"};
  font-weight: 700;

  &:hover {
    color: ${(props) => props.background || "#8e5572"};
    background-color: transparent;
    border: 2px solid ${(props) => props.background || "#8e5572"};
    font-weight: 700;
  }
`;

const Button = ({ background, color, children }: Props) => {
  return (
    <ButtonWrapper background={background} color={color}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
