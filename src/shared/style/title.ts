import styled from "styled-components";

type TitleProps = {
  colorTitle: string;
  paragraphTitle: string;
  lineTitle: string;
};

export const Title = styled.div<TitleProps>`
  width: 95%;
  margin: 60px auto 40px auto;

  h1 {
    font-weight: normal;
    text-align: center;
    font-size: 2.5rem;
    color: ${(props) => props.colorTitle};
  }

  p {
    color: ${(props) => props.paragraphTitle};
    line-height: 1.5;
    text-align: center;
    font-size: 1.2rem;
    width: 70%;
    margin: 20px auto 0 auto;
  }

  &:after {
    content: "";
    display: block;
    border-bottom: ${(props) => props.lineTitle};
    margin: 35px auto;
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 88%;
    margin: 60px auto 60px auto;

    h1 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.3rem;
      margin-top: 25px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    p {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 35px;
    }

    p {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 30px auto 40px auto;
    width: 88%;

    p {
      font-size: 1.1rem;
    }
  }
`;
