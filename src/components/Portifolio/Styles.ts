import styled from "styled-components";

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 12px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 90px;
  }
  h1 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1280px) {
    max-width: 1152px;
  }
  @media (min-width: 1536px) {
    max-width: 1344px;
  }
`;
