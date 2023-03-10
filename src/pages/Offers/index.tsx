import { Section } from "./Styles";
import CardOffer from "../../components/CardOffer";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

type Props = {};

const Services = (props: Props) => {
  return (
    <Section className="container mx-auto">
      <span className="text-primary mb-2 block text-lg font-semibold">
        Nossos Serviços
      </span>
      <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
        O que nós Oferecemos
      </h2>
      <div className="cards">
        <CardOffer
          srcImg={
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          service={"Aline Almeida"}
        ></CardOffer>
        <CardOffer
          srcImg={
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          service={"Paulo Evandro"}
        ></CardOffer>
        <CardOffer
          srcImg={
            "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          service={"Yasmin Souza"}
        ></CardOffer>
        <CardOffer
          srcImg={
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          service={"Eduardo Ribeiro"}
        ></CardOffer>
        <CardOffer
          srcImg={
            "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          service={"Eduardo Ribeiro"}
        ></CardOffer>
        <CardOffer
          srcImg={
            "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          service={"Eduardo Ribeiro"}
        ></CardOffer>
        <CardOffer
          srcImg={
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          service={"Eduardo Ribeiro"}
        ></CardOffer>
        <CardOffer
          srcImg={
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          service={"Eduardo Ribeiro"}
        ></CardOffer>
      </div>
      <Link to={"/contact"}>
        <Button background="#FFC1EB" color="#2e1c20">
          Entrar em contato
        </Button>
      </Link>
    </Section>
  );
};

export default Services;
