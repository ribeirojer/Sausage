import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 2.5rem;
  h2 {
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    margin-bottom: 2rem;
  }

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1140px;
  }

  .wrapperb {
    max-width: 1280px;
    display: flex;
    margin: -4rem auto 0;
    align-items: center;
    img {
      width: 50vw;
    }

    @media (max-width: 1024px) {
      .wrapperb {
        display: flex;
      }
    }

    @media (max-width: 640px) {
      .wrapperb {
        display: block;
        img {
          width: unset;
        }
        h2 {
          text-align: center;
        }
      }
    }

    .desaparecer {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    .desaparecer.scroll {
      opacity: 0;
    }
    .mover {
      position: fixed;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      animation: moveUpDown 2s ease-in-out infinite;
    }

    @keyframes moveUpDown {
      0% {
        transform: translate(-50%, 0);
      }
      50% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 0);
      }
    }
  }

  a {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;
