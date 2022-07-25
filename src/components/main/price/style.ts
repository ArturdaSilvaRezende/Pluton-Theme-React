import styled from "styled-components";

export const PriceSection = styled.section`
  background-color: var(--yellow-color);
  padding: 10px 0;

  .price__contact {
    margin-top: 30px;
    margin: 30px auto 0 auto;
    width: 90%;
    text-align: center;

    p {
      font-size: 1.3rem;
      color: var(--black-color);
    }

    button {
      width: 130px;
      border: 1px solid var(--black-color);
      padding: 10px;
      margin: 30px 0 20px 0;
      font-size: 1.2rem;
      transition: 0.5s ease-out;

      &:hover {
        background-color: var(--black-color);
        color: var(--white-color);
      }
    }
  }

  @media screen and (max-width: 480px) {
    .price__contact {
      width: 70%;
    }
  }
`;

export const PriceContents = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;

  .price__card + .price__card {
    margin: 0 0 0 30px;
  }

  .price__card {
    width: 33%;

    h2 {
      background-color: var(--black-color);
      color: var(--yellow-color);
      padding: 40px 0;
      text-align: center;
      border-radius: 10px 10px 0 0;
      font-size: 1.6rem;
    }

    .price__description {
      background-color: var(--white-color);
      text-align: center;
      text-align: center;
      border-radius: 0 0 10px 10px;

      p {
        color: var(--gray-color);
        padding: 20px 0;
        border-bottom: 1px solid var(--gray-color);
        width: 80%;
        margin: 0 auto;

        span {
          font-weight: bold;
          margin-right: 10px;
        }
      }

      .price__number {
        padding-top: 30px;
        font-size: 1.5rem;
      }

      button {
        background-color: var(--black-color);
        color: var(--yellow-color);
        margin: 25px 0;
        padding: 10px;
        width: 90px;
        border-radius: 5px;
        transition: 0.5s ease-out;

        &:hover {
          background-color: var(--yellow-color);
          color: var(--white-color);
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    .price__card + .price__card {
      margin: 30px 0 0 0;
    }

    .price__card {
      width: 100%;

      h2 {
        font-size: 2rem;
        padding: 20px 0;
      }

      .price__description {
        .price__number {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
