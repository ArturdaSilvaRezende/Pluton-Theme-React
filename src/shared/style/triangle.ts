import styled from "styled-components";

type TitleProps = {
  borderColor: string;
};

export const Triangle = styled.div<TitleProps>`
  margin: 0 auto;
  text-align: center;
  width: 0;
  height: 0;
  border-top: 35px solid ${(props) => props.borderColor};
  border-left: 585px outset transparent;
  border-right: 585px outset transparent;
  position: relative;
  z-index: 30;
  top: -1px;

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    border-left: 400px outset transparent;
    border-right: 400px outset transparent;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    border-left: 380px outset transparent;
    border-right: 380px outset transparent;
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    border-left: 270px outset transparent;
    border-right: 270px outset transparent;
  }

  @media screen and (min-width: 321px) and (max-width: 480px) {
    border-left: 160px outset transparent;
    border-right: 160px outset transparent;
  }

  @media screen and (max-width: 320px) {
    border-left: 130px outset transparent;
    border-right: 130px outset transparent;
  }
`;
