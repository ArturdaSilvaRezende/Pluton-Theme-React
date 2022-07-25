import styled from "styled-components";

export const Header = styled.header`
  padding: 20px 0;
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: var(--black-color);

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 30px;
  }

  @media screen and (max-width: 767px) {
    padding: 20px 30px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Navbar = styled.nav`
  text-align: center;

  ul {
    display: flex;

    li {
      color: var(--white-color);
      font-weight: 300;
      text-transform: uppercase;
      line-height: auto;
      border: 1px solid var(--black-color);
      font-size: 1rem;
      transition: border-color 1s ease;
      display: block;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        border: 1px solid var(--yellow-color);
        color: var(--white-color);
        transition: border-color 1s ease;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    ul {
      li {
        font-size: 0.9rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
    background-color: var(--black-color);
    position: absolute;
    top: 87px;
    left: 0;
    right: 0;
    padding: 20px 0;
    z-index: 999;

    ul {
      flex-direction: column;
      width: 60%;
      padding: 0 10px;
      margin: 0 auto;

      li + li {
        margin-top: 15px;
      }
    }
  }
`;

export const Logo = styled.a`
  img {
    display: block;
    width: 65%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    img {
      width: 70%;
    }
  }

  @media screen and (max-width: 767px) {
    img {
      width: 60%;
    }
  }
`;

export const BtnMenu = styled.button`
  background-color: var(--yellow-color);
  padding: 5px;
  border: none;
  border-radius: 3px;
  display: none;

  img {
    position: relative;
    top: 2px;
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`;
