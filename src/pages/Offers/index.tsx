import { Section } from "./Styles";
import { Link } from "react-router-dom";
import CardOffer from "../../components/CardOffer";
import Button from "../../components/Button";
import { useEffect } from "react";

type Props = {};

const Services = (props: Props) => {
  const initialLink = "https://images.unsplash.com/photo-1";
  const data = [
    {
      img: "454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8",
      name: "Sites Corporativos",
    },
    {
      img: "563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8",
      name: "Landing Pages",
    },
    {
      img: "611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      name: "Branding",
    },
    {
      img: "531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8",
      name: "Consultoria",
    },
    {
      img: "552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8",
      name: "Marketing Digital",
    },
    {
      img: "576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8",
      name: "Blogs",
    },
    {
      img: "551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8",
      name: "E-commerces",
    },
    {
      img: "563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8",
      name: "Web 3.0",
    },
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <h2>O que nós Oferecemos</h2>
      <div className="cards">
        {data.map((item) => {
          return (
            <CardOffer
              srcImg={`${initialLink}${item.img}&auto=format&fit=crop&w=500&q=60`}
              service={item.name}
            ></CardOffer>
          );
        })}
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
