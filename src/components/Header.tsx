import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-full h-16" />
      </Link>
      <nav className="flex items-center space-x-6">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 14.293a1 1 0 11-1.414 1.414L10 11.414l-2.879 2.88a1 1 0 11-1.414-1.414L8.586 10l-2.88-2.879a1 1 0 111.414-1.414L10 8.586l2.879-2.88a1 1 0 111.414 1.414L11.414 10l2.879 2.879z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "space-y-6" : "hidden"
          } absolute top-24 right-2 z-10 bg-white rounded-lg p-4 w-52 md:flex md:static md:items-center md:justify-between md:w-auto`}
        >
          <li className="pr-4">
            <Link
              to={"/"}
              className="text-dark font-medium text-base hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li className="pr-4">
            <Link
              to={"/agency"}
              className="text-dark font-medium text-base hover:text-primary"
            >
              A Agência
            </Link>
          </li>
          <li className="pr-4">
            <Link
              to={"/services"}
              className="text-dark font-medium text-base hover:text-primary"
            >
              Serviços
            </Link>
          </li>
          <li className="pr-4">
            <Link
              to={"/team"}
              className="text-dark font-medium text-base hover:text-primary"
            >
              Time
            </Link>
          </li>
          <li className="pr-4">
            <Link
              to={"/projects"}
              className="text-dark font-medium text-base hover:text-primary"
            >
              Projetos
            </Link>
          </li>
          <li className="pr-4">
            <Link
              to={"/contact"}
              className="text-dark font-medium text-base hover:text-primary"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute w-[100vw] h-[100vh] bg-black"></div>
    </header>
  );
};

export default Header;
