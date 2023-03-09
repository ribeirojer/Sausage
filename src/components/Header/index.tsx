import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview.png";
import { Container } from "./Styles";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="checkbox-container">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="toggle"
            checked={isMenuOpen}
            onChange={handleMenuClick}
          />
          <label htmlFor="toggle" className="checkbox">
            <div className="trace"></div>
            <div className="trace"></div>
            <div className="trace"></div>
          </label>
          <div className="menu"></div>
          <nav className="menu-itens">
            <ul>
              <li>
                <Link to={"/"} onClick={handleMenuClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/agency"} onClick={handleMenuClick}>
                  A Agência
                </Link>
              </li>
              <li>
                <Link to={"/services"} onClick={handleMenuClick}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to={"/projects"} onClick={handleMenuClick}>
                  Projetos
                </Link>
              </li>
              <li>
                <Link to={"/contact"} onClick={handleMenuClick}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Header;
