import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-full h-16" />
      </Link>
      <nav className="flex items-center space-x-6">
        <Link
          to={"/"}
          className="text-dark font-medium text-base hover:text-primary"
        >
          Home
        </Link>
        <Link
          to={"/agency"}
          className="text-dark font-medium text-base hover:text-primary"
        >
          A Agência
        </Link>
        <Link
          to={"/services"}
          className="text-dark font-medium text-base hover:text-primary"
        >
          Serviços
        </Link>
        <Link
          to={"/team"}
          className="text-dark font-medium text-base hover:text-primary"
        >
          Time
        </Link>
        <Link
          to={"/projects"}
          className="text-dark font-medium text-base hover:text-primary"
        >
          Projetos
        </Link>
        <Link
          to={"/contact"}
          className="text-dark font-medium text-base hover:text-primary"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header;
