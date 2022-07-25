import styled from "styled-components";

import BgCarousel from "./img/Slider.jpg";

//carousel - container
export const CarouselSection = styled.section`
  background-image: url(${BgCarousel});
  background-repeat: repeat-x 0% center;
  background-size: auto 100%;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 520px;
  margin-top: 88px;

  .carousel__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--yellow-color);
    opacity: 0.85;
  }

  .mySwiper {
    width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 480px) {
    background-size: auto;
  }
`;

//carousel - contents
export const carouselContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 100px auto 0 auto;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 20px auto 0 auto;
  }
`;

//carousel - description
export const carouselDescription = styled.div`
  width: 70%;

  hgroup {
    color: var(--black-color);
    margin-bottom: 20px;

    h2 {
      font-weight: bold;
      font-size: 2rem;
    }
    h3 {
      font-size: 1.7rem;
    }
  }

  p {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 1.1rem;
    color: var(--black-color);
  }

  button {
    border: 1px solid var(--black-color);
    padding: 7px;

    &:hover {
      background-color: var(--black-color);
      color: var(--white-color);
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    width: 100%;

    hgroup {
      h2 {
        font-size: 1.7rem;
      }
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 992px) {
    order: 2;
    width: 90%;
    text-align: center;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    hgroup {
      margin: 20px 0;

      h2 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1.1rem;
      line-height: 1.2;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    hgroup {
      margin: 20px 0;
      h2 {
        font-size: 1.6rem;
      }
      h3 {
        font-size: 1.4rem;
      }
    }

    p {
      font-size: 1.1rem;
      line-height: 1.3;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    hgroup {
      h2 {
        font-size: 1.2rem;
        margin-top: 30px;
      }
    }

    p {
      font-size: 0.75rem;
      line-height: 1.3;
      text-align: center;
      width: 100%;
      margin: 30px auto 30px auto;
    }

    button {
      width: 120px;

      span {
        margin-top: 2px;
        display: block;
      }
    }
  }
`;

//carousel - image
export const carouselFigure = styled.figure`
  img {
    display: block;
    width: 50%;
    margin-left: auto;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    order: 1;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 5px;

    img {
      margin: 0 auto;
      width: 27%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    margin-top: 5px;

    img {
      margin: 0 auto;
      width: 40%;
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 2%;

    img {
      margin: 0 auto;
    }
  }
`;
