import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 20px 0 10px 0;
  display: flex;
  flex-wrap: wrap;

  img {
    max-width: 100%;
  }
  .container {
    width: 100%;
    padding: 0 1rem;
    margin: 0 0 40px;
    h4 {
      margin-bottom: 36px;
      font-size: 20px;
      font-weight: 600;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      margin-bottom: 1rem;
    }
  }
  a {
    font-size: 16px;
    line-height: 1.5;
    &:hover {
      color: blue;
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .social-icons a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0 10px;
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  .social-icons a:hover {
    transform: scale(1.1);
  }
  @media (min-width: 640px) {
    .container {
      width: 50%;
    }
  }
  @media (min-width: 1024px) {
    padding: 120px 0 20px 0;
    .container {
      width: 20%;
    }
  }
`;
