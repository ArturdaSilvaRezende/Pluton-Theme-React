import styled from "styled-components";

export const ContactUsSection = styled.section`
  background-color: var(--yellow-color);
  padding: 10px 0 60px 0;
`;

export const ContactUsContents = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 20px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContactUsForm = styled.form`
  background-color: var(--white-color);
  border-radius: 10px;

  h2,
  input,
  textarea,
  button {
    color: var(--gray-dark-color);

    &::placeholder {
      color: var(--gray-dark-color);
    }
  }

  input,
  textarea,
  button {
    border: 1px solid var(--gray-dark-color);
  }

  input,
  button {
    padding: 10px;
  }

  h2 {
    padding: 30px 0;
    font-size: 1.7rem;
    text-align: center;
  }

  div {
    width: 90%;
    margin: 0 auto;
    display: flex;

    flex-direction: column;

    input {
      margin-bottom: 20px;
      border-radius: 3px;
    }

    textarea {
      width: 99%;
      padding: 15px;
    }

    button {
      margin: 20px 0;
      transition: 0.5s ease-out;
      width: 170px;
      border-radius: 3px;

      &:hover {
        background-color: var(--yellow-color);
        color: var(--black-color);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    margin-right: 10px;
  }

  @media screen and (max-width: 480px) {
    h2 {
      padding: 50px 0;
    }

    div {
      input {
        width: 100%;
      }

      textarea {
        width: 99%;
      }
    }
  }
`;
