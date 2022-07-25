import styled from "styled-components";

import BgImage from "./img/brand-bg.png";

export const ClientsCarouselSection = styled.section`
  background-color: var(--yellow-color);
  padding-top: 7px;

  .mySwiper {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  background: url(${BgImage}) no-repeat center;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 40px;
  }
`;

export const HeaderCarousel = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--white-color);
  padding: 60px 0 15px 0;

  h1 {
    color: var(--yellow-color);
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: normal;
  }

  div {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 10px;
    }

    button {
      background-color: var(--yellow-color);
      border-radius: 3px;
      width: 30px;
      transition: 0.5s ease-out;

      &:hover {
        background-color: var(--black-color);
        color: var(--yellow-color);
      }

      svg {
        font-size: 1.4rem;
        position: relative;
        top: 2.5px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 40px 0 15px 0;
  }
`;

export const CardsCarousel = styled.figure`
  border: 1px solid var(--white-color);
  width: 80%;
  margin: 40px auto 0 auto;
  cursor: pointer;

  &:hover {
    background-color: var(--yellow-color);
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 30px auto 0 auto;
    width: 90%;
  }
`;
