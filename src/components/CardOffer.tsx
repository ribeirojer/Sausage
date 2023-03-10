import styled from "styled-components";

type Props = {
  srcImg: string;
  service: string;
};

const cardWidthMobile = "100%";
const cardWidthTablet = "50%";
const cardWidthDesktop = "25%";
const cardMargin = "0 1rem";

export const Section = styled.section`
  width: ${cardWidthMobile};
  padding: ${cardMargin};

  img {
    border-radius: 0.5rem;
  }
  @media (min-width: 640px) {
    width: ${cardWidthTablet};
  }

  @media (min-width: 1024px) {
    width: ${cardWidthDesktop};
  }
`;

const CardTeam = ({ srcImg, service }: Props) => {
  return (
    <Section>
      <img src={srcImg} alt="image" />
      <p>{service}</p>
    </Section>
  );
};

export default CardTeam;
