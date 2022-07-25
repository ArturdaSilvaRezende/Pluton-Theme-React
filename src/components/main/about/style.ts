import styled from "styled-components";

export const AboutSection = styled.section`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 60px;
  }
`;

export const CardPerson = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;

  figure + figure {
    margin-left: 20px;
  }

  figure {
    border: 1px solid var(--white-color);
    padding: 15px;

    img {
      display: block;
      width: 100%;
      margin: 0 auto;
    }

    figcaption {
      h2 {
        color: var(--yellow-color);
        font-weight: normal;
        text-align: center;
        margin-top: 20px;
      }

      div {
        text-align: center;
        margin: 10px 0 15px 0;

        button + button {
          margin-left: 5px;
        }

        button {
          width: 32px;
          height: 32px;
          background-color: var(--yellow-color);
          border-radius: 50%;
          transition: 0.5s ease-out;

          &:hover {
            background-color: var(--white-color);
          }

          svg {
            margin-top: 5px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90%;

    figure {
      padding: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 70%;

    figure + figure {
      margin-top: 20px;
      margin-left: 0;
    }

    figure {
      padding: 10px;

      figcaption {
        h2 {
          font-size: 1.6rem;
          margin-top: 30px;
        }
      }
    }
  }
`;

export const AboutUs = styled.div`
  .about__title {
    text-align: center;

    width: 90%;
    margin: 50px auto 0 auto;

    h2 {
      color: var(--yellow-color);
      margin-bottom: 20px;
      font-size: 2.2rem;
    }

    p {
      font-size: clamp(1rem, 2vw, 1.2rem);
      font-weight: normal;
      line-height: 1.5;
      width: 85%;
      margin: 0 auto;
    }
  }

  .about__description {
    width: 90%;
    margin: 40px auto 0 auto;

    h2 {
      color: var(--yellow-color);
      margin-bottom: 20px;
      font-size: 2.2rem;
    }

    .about__contents {
      display: flex;

      .about__skills {
        width: 50%;
        margin-right: 20px;

        p + p {
          margin-top: 30px;
        }

        p {
          background-color: var(--white-color);
          padding: 10px;
          border: 1px solid var(--white-color);
          position: relative;

          .about__text {
            position: relative;
            color: var(--black-color);
          }

          .about__bar {
            display: block;
            background-color: var(--yellow-color);
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
          }

          &:nth-child(1) {
            .about__bar {
              width: 60%;
            }
          }

          &:nth-child(2) {
            .about__bar {
              width: 80%;
            }
          }

          &:nth-child(3) {
            .about__bar {
              width: 55%;
            }
          }

          &:nth-child(4) {
            .about__bar {
              width: 90%;
            }
          }
        }
      }

      .about__box {
        background-color: var(--white-color);
        padding: 20px;
        text-align: center;
        width: 50%;

        h3,
        p {
          color: var(--black-color);
          font-weight: normal;
        }

        h3 {
          margin-bottom: 20px;
          font-size: 2rem;
        }

        p {
          font-size: 0.9rem;
        }

        button {
          background-color: var(--yellow-color);
          padding: 10px;
          width: 100px;
          margin-top: 20px;
          transition: 0.5s ease-out;

          &:hover {
            background-color: var(--black-color);
            color: var(--yellow-color);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .about__description {
      .about__contents {
        .about__box {
          p {
            font-size: 0.7rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    .about__description {
      .about__contents {
        .about__skills {
          width: 55%;

          p + p {
            margin-top: 30px;
          }
        }

        .about__box {
          width: 40%;

          h3 {
            font-size: 1.7rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .about__description {
      h2 {
        font-size: 2rem;
        margin-bottom: 10px;
      }

      .about__contents {
        flex-direction: column;

        .about__skills {
          width: 100%;
          margin-right: 0;

          p + p {
            margin-top: 10px;
          }
        }

        .about__box {
          width: 100%;
          margin-top: 20px;

          h3 {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;

export const Hosting = styled.div`
  background-color: var(--yellow-color);
  margin-top: 60px;

  div {
    text-align: center;

    p {
      color: var(--black-color);
      width: 70%;
      margin: 0 auto;
      padding-top: 40px;
      font-size: clamp(1.2rem, 2.5vw, 1.8rem);
      font-weight: 300;
      line-height: 1.5;
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

  @media screen and (max-width: 767px) {
    div {
      p {
        width: 90%;
      }
    }
  }
`;
