import styled from "styled-components";

//container
export const OurServicesSection = styled.section`
  width: 100%;
  padding: 30px 0;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 80px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 60px 0;
  }
`;

//card-container
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

//card
export const Services = styled.figure`
  width: 33%;
  padding: 30px 0;

  img {
    width: 40%;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
    border: 4px solid var(--white-color);
  }

  figcaption {
    text-align: center;
    margin-top: 30px;

    h2 {
      color: var(--yellow-color);
      font-size: 1.7rem;
    }

    p {
      line-height: 1.5;
      font-weight: normal;
      width: 90%;
      margin: 20px auto 0 auto;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 33%;

    img {
      width: 50%;
      margin: 0 auto;
    }

    figcaption {
      margin-top: 20px;

      h2 {
        font-size: 1.7rem;
      }

      p {
        font-size: 0.9rem;
        width: 60%;
        margin: 20px auto 40px auto;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    img {
      width: 40%;
    }

    figcaption {
      h2 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    img {
      margin: 0 auto;
    }

    figcaption {
      margin: 40px 0;

      h2 {
        margin-bottom: 10px;
      }

      p {
        width: 80%;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 50%;
    }

    figcaption {
      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 0.96rem;
      }
    }
  }
`;
