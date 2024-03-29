import styled from "styled-components";

const colorClara = "#C7B8F8";
const colorBranca = "#fff";
const colorEscura = "#2e1c20";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  img {
    height: 5rem;
  }

  /* Menu Hamburguer */

  .checkbox-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checkbox {
    height: 100px;
    width: 100px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
    z-index: 9999;
    transition: 400ms ease-in-out 0s;
  }
  .checkbox .trace {
    width: 50px;
    height: 2px;
    background-color: ${colorBranca};
    position: absolute;
    border-radius: 4px;
    transition: 0.5s ease-in-out;
  }
  .checkbox .trace:nth-child(1) {
    top: 26px;
    transform: rotate(0);
  }
  .checkbox .trace:nth-child(2) {
    top: 46px;
    transform: rotate(0);
  }
  .checkbox .trace:nth-child(3) {
    top: 66px;
    transform: rotate(0);
  }
  #toggle {
    display: none;
  }

  /* menu */

  .menu {
    position: absolute;
    top: 28px;
    right: 30px;
    background: transparent;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 0px ${colorBranca};
    z-index: -1;
    transition: 400ms ease-in-out 0s;
  }
  .menu-itens {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transition: 400ms ease-in-out 0s;
  }
  .menu-itens ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }
  .menu-itens ul li a {
    margin: 1rem 0;
    color: ${colorEscura};
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 40px;
    line-height: 4rem;
  }

  /* animação do menu */

  #toggle:checked + .checkbox .trace:nth-child(1) {
    transform: rotate(45deg);
    background-color: ${colorEscura};
    top: 47px;
  }
  #toggle:checked + .checkbox .trace:nth-child(2) {
    transform: translate(-100px);
    width: 30px;
    visibility: hidden;
    opacity: 0;
  }
  #toggle:checked + .checkbox .trace:nth-child(3) {
    transform: rotate(-45deg);
    background-color: ${colorEscura};
    top: 48px;
  }
  #toggle:checked + .checkbox {
    background-color: ${colorClara};
  }
  #toggle:checked ~ .menu {
    box-shadow: 0px 0px 0px 100vmax ${colorClara};
    z-index: 1;
  }
  #toggle:checked ~ .menu-itens {
    visibility: visible;
    opacity: 1;
  }

  .menularge {
    display: none;
    li a {
      padding: 0.3rem;
      transition: 0.5s;
      font-weight: 700;
      &:hover {
        color: ${colorClara};
      }
    }
  }

  .active {
    border-bottom: 2px solid rgb(199, 184, 248);
  }

  @media (min-width: 640px) {
    .checkbox-wrapper {
      display: none;
    }
    .menularge {
      display: flex;
      ul {
        display: flex;
        gap: 1rem;
      }
    }
  }
`;
