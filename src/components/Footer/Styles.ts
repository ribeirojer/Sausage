import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 8%;
  height: 432px;
  background-color: #FFC1EB22;


  .footerwrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-top: 0.7rem;
        display: flex;
        align-items: center;
      }
      p svg {
        margin-right: 5px;
      }
    }

    .company {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-bottom: 0.8rem;
      }
      div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      div a {
        margin: 0 0.5rem;
        cursor: pointer;
        transition: 0.3s;
      }
      div a:hover {
        color: #FFC1EB;
      }
    }

    .hours {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 28px;
        font-family: "Dancing Script";
        font-weight: 700;
        margin-bottom: 1rem;
      }
      p {
        margin-top: 0.7rem;
      }
      p span {
        margin: 0 0.5rem;
      }
    }
  }

  .last {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    p {
      margin-bottom: 2rem;
    }
    p span {
      color: #f00;
    }
    a {
      color: var(--cor-C);
      text-decoration: none;
    }
  }
`;
