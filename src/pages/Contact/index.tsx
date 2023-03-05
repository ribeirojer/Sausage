import styled from "styled-components";
import Button from "../../components/Button";
import {
  Section,
  Container,
  Box,
  Title,
  Info,
  Text,
  Heading,
  InfoWrapper,
  IconWrapper,
} from "./Contact";

type Props = {};

const ContactsMaps = styled.section`
  padding: 90px 8%;
  height: 100vh;
  h1 {
    margin-bottom: 25px;
  }
  div {
    display: flex;
    gap: 2rem;
  }
  input,
  textarea {
    width: 100%;
    height: 50px;
    margin-bottom: 25px;
    padding-left: 16px;
    border: 1px solid #999;
    outline: none;
    color: #000000;
    border-radius: 5px;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 16px;
  }
  textarea {
    height: 194px;
    padding: 16px 16px;
  }
  div iframe {
    width: 50%;
    height: 345px;
    border-radius: 10px;
    border: 1px solid var(--cor-B);
  }
`;

const Contact = (props: Props) => {
  return (
    <Section>
      <Box>
        <Title> Entre em Contato </Title>
        <Heading> Fale Conosco</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <InfoWrapper>
          <IconWrapper></IconWrapper>
          <Info>
            <h4>Our Location</h4>
            <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
          </Info>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper></IconWrapper>
          <Info>
            <h4>Número de Telefone</h4>
            <p>(+55) 98158 0992</p>
          </Info>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper></IconWrapper>
          <Info>
            <h4>Endereço de Email</h4>
            <p>contato@heythere.com</p>
          </Info>
        </InfoWrapper>
      </Box>
      <ContactsMaps>
        <h1>Entre em contato</h1>
        <div>
          <form action="">
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu E-mail" />
            <textarea placeholder="Comentário..."></textarea>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23794.594973182444!2d-48.84988049039123!3d-26.25560995099244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaff6766822b412e1!2sUdesc%20Joinville!5e0!3m2!1spt-BR!2sbr!4v1662576883382!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Button>Enviar</Button>
      </ContactsMaps>
    </Section>
  );
};

export default Contact;
