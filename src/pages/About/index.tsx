import { MouseSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import imagem1 from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (9).png";
import Button from "../../components/Button";
import CardTeam from "../../components/CardTeam";
import { Section } from "./Styles";

type Props = {};

const About = (props: Props) => {
  return (
    <Section>
      <div className="wrapperb">
        <div>
          <h2>
            Somos um grupo de amigos apaixonados por tecnologia e marketing que
            se reunia frequentemente para discutir as últimas tendências do
            mercado digital.
          </h2>
          <br />
          <h2>
            Fizemos cursos, participamos de workshops e lemos muitos livros
            sobre o assunto. Após meses de preparação, finalmente abrimos as
            portas da nossa agência digital.
          </h2>
        </div>
        <MouseSimple className="desaparecer mover" size={32} />
        <img src={imagem1} alt="" />
      </div>
      <h2>Nossa Equipe Incrível</h2>
      <p>
        Composta por profissionais altamente qualificados e especializados em
        diferentes áreas do marketing digital.
      </p>
      <div className="cards">
        <CardTeam
          srcImg={
            "https://images.unsplash.com/photo-1550480082-dd9c35032f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
          name={"Aline Almeida"}
          job={"Gerente de projeto"}
        ></CardTeam>
        <CardTeam
          srcImg={
            "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
          name={"Paulo Evandro"}
          job={"Designer gráfico"}
        ></CardTeam>
        <CardTeam
          srcImg={
            "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
          name={"Yasmin Souza"}
          job={"Especialistas em mídias sociais"}
        ></CardTeam>
        <CardTeam
          srcImg={
            "https://images.unsplash.com/photo-1614890085618-0e1054da74f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
          name={"Eduardo Ribeiro"}
          job={"Desenvolvedor de Software"}
        ></CardTeam>
      </div>
      <Link to={"/contact"}>
        <Button background="#FFC1EB" color="#2e1c20">
          Entrar em contato
        </Button>
      </Link>
    </Section>
  );
};

export default About;
