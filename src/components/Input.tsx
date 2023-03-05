import styled from "styled-components";

type Props = {
  backgroundColor?: string;
  color?: string;
  placeholder?: string;
  label?: string;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
`;

const InputField = styled.input<Props>`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: ${(props) => props.color || "#000"};

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #8e5572;
  }
`;

export const Input = ({ backgroundColor, color, label }: Props) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputField backgroundColor={backgroundColor} color={color} />
    </InputWrapper>
  );
};
