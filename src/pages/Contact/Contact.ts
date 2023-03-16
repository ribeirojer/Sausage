import styled from "styled-components";

export const Section = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  .first {
    display: flex;
    img {
      width: 50%;
    }
    .contact-maps {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        margin-top: 1rem;

        input {
          padding: 0.5rem;
          border-radius: 0.3rem;
        }

        Button {
          
        }
      }
    }
  }

  .second {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: space-between;
    .box {
      width: 33%;
      max-width: 570px;

      section {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        padding: 0.5rem 0;
        width: 100%;

        div {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;

          h4 {
            font-size: 24px;
            font-weight: 700;
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 1rem 0px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
  margin-bottom: 25px;
  padding: 16px;
  border: 1px solid #999;
  outline: none;
  color: #000000;
  border-radius: 5px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
`;
