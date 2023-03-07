import styled from "styled-components";

const maxWidth = "1140px";
const cardWidthMobile = "100%";
const cardWidthTablet = "50%";
const cardWidthDesktop = "25%";
const cardMargin = "0 1rem";
const cardBorderRadius = "0.5rem";

export const Section = styled.section`
  padding-top: 5rem;
  padding-bottom: 2.5rem;

  .container {
    margin: 0 auto;
    max-width: ${maxWidth};

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -1rem;

      > div {
        padding: 0 1rem;
        width: 100%;

        h2 {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;

          @media (min-width: 640px) {
            font-size: 2.5rem;
          }
        }

        p {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 0;
        }
      }

      @media (min-width: 640px) {
        > div {
          margin: 0 auto;
          max-width: 510px;
          text-align: center;
          margin-bottom: 60px;
        }
      }
    }

    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .item {
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
                border-radius: 0.375rem;
                overflow: hidden;

                h3 {
                  font-size: 1.25rem;
                  font-weight: 600;
                  line-height: 1.2;
                  margin-bottom: 0.5rem;
                  color: #1d1d1f;
                }

                p {
                  font-size: 0.875rem;
                  font-weight: 400;
                  line-height: 1.43;
                  color: #73737d;
                  margin-bottom: 0.75rem;
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
      }
    }
  }

  @media (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 5rem;
  }
`;
