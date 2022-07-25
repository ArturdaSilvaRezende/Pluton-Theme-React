import styled from "styled-components";

//container - index
export const PortfolioSection = styled.section`
  background-color: var(--yellow-color);
  width: 100%;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 60px;
  }
`;

//contents - portfolio
export const PortfolioContents = styled.div``;

//menu - navpill
export const NavPill = styled.nav`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 35px;

  .active {
    color: var(--white-color);
    background-color: var(--black-color);
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    li + li {
      margin-left: 15px;
    }

    li {
      width: 80px;
      border: 1px solid var(--black-color);
      text-align: center;
      border-radius: 4px;
      color: var(--black-color);
      display: block;
      padding: 10px;
      cursor: pointer;

      &:hover {
        color: var(--white-color);
        background-color: var(--black-color);
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 992px) {
    margin-bottom: 6%;
  }

  @media screen and (max-width: 480px) {
    ul {
      justify-content: center;

      li + li {
        margin-left: 0;
      }

      li {
        width: 33%;
        font-size: 1.1rem;
      }
    }
  }
`;

//cards - container
export const CardsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

//contents - figure
export const Figure = styled.figure`
  position: relative;
  width: 32%;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
    height: 50vh;
    border-radius: 10px 10px 0 0;
  }

  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 75px;
    background-color: var(--black-color);
    opacity: 0.9;
    padding: 10px 0;
    display: none;
    border-radius: 10px 10px 0 0;

    h2 {
      color: var(--yellow-color);
      padding: 10px 20px;

      &:after {
        content: "";
        display: block;
        border: 1px solid var(--yellow-color);
        margin: 10px 0;
      }
    }

    .description {
      padding: 0 20px;

      div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        p {
          text-align: left;

          &:first-child {
            color: var(--yellow-color);
            margin-right: 25px;
          }
          &:last-child {
            text-align: left;
          }
        }
      }
    }

    .about {
      line-height: 1.5;
      text-align: justify;
      width: 90%;
      margin: 20px auto 0 auto;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1279px) {
    img {
      height: 60vh;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 45%;

    &:last-child {
      margin-left: 22px;
    }

    img {
      height: 35vh;
    }

    figcaption {
      .about {
        margin: 40px auto 0 auto;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    img {
      height: 36vh !important;
      object-fit: fill;
    }
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 90%;
    margin: 0 auto;

    img {
      max-height: 50vh;
    }

    figcaption {
      bottom: 74px;

      .about {
        margin: 20px auto 0 auto;
      }
    }
  }

  @media screen and (max-width: 375px) {
    width: 90%;

    img {
      max-height: 45vh;
      object-fit: cover;
    }

    figcaption {
      .description {
        div {
          p {
            font-size: 0.8rem;
          }
        }
      }

      .about {
        font-size: 0.85rem;
        margin: 30px auto 0 auto;
      }
    }
  }

  @media screen and (max-width: 320px) {
    img {
      max-height: 70vh !important;
    }

    figcaption {
      .about {
        font-size: 0.7rem !important;
        margin-top: 15px !important;
      }
    }
  }
`;

//contents - buttons
export const ButtonsControl = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;

  button {
    width: 50%;
    padding: 6px;
    font-size: 1.4rem;

    &:first-child {
      color: var(--white-color);
      background-color: var(--red-color);
      border-right: 3px solid var(--white-color);

      &:hover {
        background-color: var(--black-color);
      }
    }

    &:last-child {
      color: var(--white-color);
      background-color: var(--black-color);

      &:hover {
        background-color: var(--red-color);
      }
    }

    svg {
      margin-top: 5px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    margin: 0 auto 30px auto;
  }
`;
