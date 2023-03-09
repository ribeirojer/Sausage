import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    max-width: 100%;
  }

  .footer-column {
    width: 100%;
    max-width: 250px;
    margin-bottom: 2rem;

    h4 {
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      font-weight: 600;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        margin-bottom: 0.5rem;
      }
    }
  }

  a {
    font-size: 1rem;
    line-height: 1.5;
    color: #666;

    &:hover {
      color: blue;
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;

    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      margin: 0 0.5rem;
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s ease-in-out;

      svg {
        width: 100%;
        height: 100%;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 640px) {
    .footer-column {
      width: 48%;
      max-width: none;
    }
  }

  @media (min-width: 1024px) {
    padding: 6rem 0 2rem 0;
    justify-content: space-around;

    .footer-column {
      width: 18%;
    }
  }
`;
