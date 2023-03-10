import styled from "styled-components";

type Props = {
  srcImg: string;
  name: string;
  job: string;
};

const cardWidthMobile = "100%";
const cardWidthTablet = "50%";
const cardWidthDesktop = "25%";
const cardMargin = "0 1rem";
const cardBorderRadius = "0.5rem";

export const Section = styled.section`
  width: ${cardWidthMobile};
  padding: ${cardMargin};

  .team-member {
    margin: 0 auto;
    width: 100%;
    max-width: 370px;

    img {
      width: 100%;
    }

    .card {
      position: relative;
      overflow: hidden;
      border-radius: ${cardBorderRadius};
      margin-bottom: 2rem;

      .details {
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 100%;
        text-align: center;

        .info {
          position: relative;
          margin: 0.5rem 1rem;
          padding: 5px 3px;
          background-color: #fff;
          border-radius: 0.5rem;
          overflow: hidden;
          color: #1d1d1f;
          font-weight: bold;

          h2 {
            font-size: 2rem;
            margin-bottom: 0.2rem;
          }

          p {
            margin-bottom: 0.5rem;
            color: rebeccapurple;
          }
        }
      }
    }
  }

  @media (min-width: 640px) {
    width: ${cardWidthTablet};
  }

  @media (min-width: 1024px) {
    width: ${cardWidthDesktop};
  }
`;

const CardTeam = ({ srcImg, name, job }: Props) => {
  return (
    <Section>
      <div className="team-member">
        <div className="card">
          <img src={srcImg} alt="image" />
          <div className="details">
            <div className="info">
              <h2>{name}</h2>
              <p>{job}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CardTeam;
