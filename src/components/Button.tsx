import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  background?: string;
  color?: string;
  children: ReactNode;
};

const ButtonWrapper = styled.button<Props>`
  margin-top: 15px;
  text-transform: uppercase;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 10px 55px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  border: 2px solid ${({ background }) => background};
  font-weight: 700;

  &:hover {
    color: ${({ background }) => background};
    background-color: ${({ color }) => color};
    border: 2px solid ${({ background }) => background};
    font-weight: 700;
  }
`;

const Button = ({
  background = "#8e5572",
  color = "#ffffff",
  children,
}: Props) => {
  return (
    <ButtonWrapper background={background} color={color}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
