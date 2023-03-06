import styled from "styled-components";

export const Section = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .box {
    width: 100%;
    max-width: 570px;

    h2 {
      margin-bottom: 6px;
      font-size: 32px;
      font-weight: 700;

      @media (min-width: 640px) {
        font-size: 40px;
      }

      @media (min-width: 1024px) {
        font-size: 36px;
      }

      @media (min-width: 1280px) {
        font-size: 40px;
      }
    }

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

    @media (min-width: 1024px) {
      margin-bottom: 0;
      width: 50%;
    }
  }

  .contact-maps {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
      width: 80%;

      div {
        width: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 120px 0;
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
