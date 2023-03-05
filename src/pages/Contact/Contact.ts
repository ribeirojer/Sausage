import styled from "styled-components";

export const Section = styled.section`
  background-color: aliceblue;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding: 120px 0;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 15px;

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Box = styled.div`
  width: 100%;
  max-width: 570px;
  margin-bottom: 12px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 50%;
  }
`;

export const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1rem;
  font-weight: 600;
`;

export const Heading = styled.h2`
  margin-bottom: 6px;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;

  @media (min-width: 640px) {
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  margin-bottom: 9px;
  font-size: 1rem;
  line-height: 1.5;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  width: 100%;
  max-width: 370px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  max-width: 60px;
  background-color: greenyellow;
  margin-right: 6px;
  border-radius: 9999px;

  @media (min-width: 640px) {
    height: 70px;
    max-width: 70px;
  }
`;

export const Info = styled.div`
  width: 100%;

  h4 {
    margin-bottom: 1px;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
  }
`;
