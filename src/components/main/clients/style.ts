import styled from "styled-components";

export const ClientsSection = styled.section`
  padding-bottom: 50px;
  margin-top: -100px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-bottom: 80px;
    margin-top: -80px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 60px;
    margin-top: -60px;
  }
`;

export const ClientsContents = styled.div`
  .clients {
    display: flex;
    width: 90%;
    margin: 0 auto;

    .clients__contents + .clients__contents {
      margin-left: 20px;
    }

    .clients__contents {
      width: 33%;

      .clients__box {
        background-color: var(--yellow-color);
        color: var(--black-color);
        padding: 15px;
        font-size: 1rem;
      }

      .clients__arrow {
        width: 0;
        border-top: 10px solid var(--yellow-color);
        border-left: 20px outset transparent;
        border-right: 20px outset transparent;
        margin: -1px 0 0 10px;
      }

      figure {
        display: flex;
        align-items: center;

        img {
          display: block;
          width: 50px;
          height: 50px;
          margin-top: 10px;
        }

        figcaption {
          margin-left: 10px;

          h2 {
            color: var(--yellow-color);
            margin-bottom: 3px;
          }
        }
      }
    }
  }

  .clients__testimonial-text {
    text-align: center;
    margin-top: 50px;
    font-size: clamp(1rem, 2vw, 1.4rem);
    width: 50%;
    margin: 80px auto 0 auto;
    line-height: 1.5;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .clients {
      .clients__contents {
        .clients__box {
          font-size: 0.7em;
        }
      }
    }
    .clients__testimonial-text {
      width: 80%;
    }
  }

  @media screen and (max-width: 767px) {
    .clients {
      flex-direction: column;

      .clients__contents + .clients__contents {
        margin: 40px 0 0 0;
      }

      .clients__contents {
        width: 100%;

        .clients__box {
          width: 90%;
          margin: 0 auto;
          font-size: 0.9em;
        }
        .clients__arrow {
          margin: -1px 0 0 30px;
        }

        figure {
          width: 90%;
          margin: 0 auto;

          img {
            margin-top: 10px;
          }
        }
      }
    }

    .clients__testimonial-text {
      width: 85%;
      margin: 50px auto 0 auto;
    }
  }
`;
