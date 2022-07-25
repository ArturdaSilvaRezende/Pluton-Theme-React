import styled from "styled-components";
import BgImage from "../clientsCarousel/img/brand-bg.png";

export const NewsletterSection = styled.section`
  background: url(${BgImage}) no-repeat center;
  padding: 50px 0 30px 0;

  h1 {
    color: var(--yellow-color);
    border-bottom: 1px solid var(--white-color);
    width: 90%;
    margin: 0 auto;
    font-size: 1.5rem;
    padding-bottom: 10px;
  }

  form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    p {
      margin: 30px auto 30px 0;
      line-height: 1.5;
      width: 60%;
      text-align: left;
      font-size: 1.2rem;
    }

    div {
      display: flex;
      width: 100%;

      input {
        padding: 10px;
        border: none;
        border-radius: 5px 0 0 5px;
        display: block;
        width: 400px;
        margin-left: auto;
      }

      button {
        background-color: var(--yellow-color);
        padding: 10px;
        border-radius: 0 5px 5px 0;

        &:hover {
          background-color: var(--white-color);
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    form {
      p {
        margin-right: 20px;
        width: 80%;
        font-size: 1rem;
      }

      div {
        input {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    form {
      flex-direction: column;

      p {
        width: 100%;
      }

      div {
        margin: 0 auto;
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    form {
      p {
        font-size: 1.1rem;
      }

      div {
        input {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    padding: 30px 0 40px 0;

    form {
      p {
        font-size: 1rem;
      }

      div {
        input {
          width: 100%;
        }
      }
    }
  }
`;
