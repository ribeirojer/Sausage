import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  TwitterLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FooterContainer } from "./Styles";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterContainer>
      <div className="footer-column">
        <Link to={"/"} className="mb-6 inline-block max-w-[160px]">
          <img src={logo} alt="logo" />
        </Link>
        <p>
          Diga "Oi!" para seu novo parceiro digital, "Hey there!" levando sua
          presença digital para o próximo nível
        </p>
        <p className="text-dark flex items-center text-sm font-medium">
          <span className="text-primary mr-3">
            <Phone size={32} />{" "}
          </span>
          <span>(12) 98158 0992</span>
        </p>
      </div>
      <div className="footer-column">
        <h4>Recursos</h4>
        <ul>
          <li>
            <Link to="/saas-development">Desenvolvimento de SaaS</Link>
          </li>
          <li>
            <Link to="/our-products">Nossos produtos</Link>
          </li>
          <li>
            <Link to="/user-flow">Fluxo de usuário</Link>
          </li>
          <li>
            <Link to="/user-strategy">Estratégia do usuário</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Empresa</h4>
        <ul>
          <li>
            <Link to="/about-us">Sobre a Hey There</Link>
          </li>
          <li>
            <Link to="/contact">Contato e Suporte</Link>
          </li>
          <li>
            <Link to="/success-stories">Histórico de sucesso</Link>
          </li>
          <li>
            <Link to="/settings-and-privacy">Configurações e privacidade</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Links rápidos</h4>
        <ul>
          <li>
            <Link to="/suporte-premium">Suporte Premium</Link>
          </li>
          <li>
            <Link to="/nossos-servicos">Nossos serviços</Link>
          </li>
          <li>
            <Link to="/conheca-nossa-equipe">Conheça nossa equipe</Link>
          </li>
          <li>
            <Link to="/baixe-o-app">Baixe o App</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Siga-nos</h4>
        <div className="social-icons">
          <a target={"_blank"} href="https://www.facebook.com">
            <FacebookLogo size={32} />
          </a>
          <a target={"_blank"} href="https://www.twitter.com">
            <TwitterLogo size={32} />
          </a>
          <a target={"_blank"} href="https://www.instagram.com">
            <InstagramLogo size={32} />
          </a>
          <a target={"_blank"} href="https://www.linkedin.com">
            <LinkedinLogo size={32} />
          </a>
        </div>
        <p>&copy; 2023 Hey There</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
