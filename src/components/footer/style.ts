import styled from "styled-components";

export const Footer = styled.footer`
  padding-top: 20px;

  div,
  form {
    h2 {
      color: var(--yellow-color);
      margin: 15px 0;
    }
  }

  hr {
    width: 90%;
    margin: 30px auto;
  }

  .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    h2 {
      border-bottom: 1px solid var(--white-color);
      padding-bottom: 15px;
    }

    .footer__address {
      address {
        p + p {
          margin-top: 10px;
        }

        p {
          a {
            color: var(--yellow-color);
            transition: 0.5s ease-out;

            &:hover {
              color: var(--white-color);
            }
          }
        }
      }
    }

    .footer__social {
      ul {
        display: flex;
        text-align: center;

        li + li {
          margin-left: 15px;
        }

        li {
          width: 35px;
          height: 35px;
          border-radius: 7px;
          background-color: var(--yellow-color);
          color: var(--black-color);
          font-size: 1.2rem;
          cursor: pointer;
          transition: 0.5s ease-out;

          &:hover {
            background-color: var(--white-color);
          }

          svg {
            margin-top: 8px;
          }
        }
      }
    }

    .footer__newsletter {
      div {
        display: flex;

        input {
          padding: 10px;
          border-radius: 5px 0 0 5px;
          border: 1px solid var(--white-color);
        }
        button {
          background-color: var(--yellow-color);
          padding: 10px;
          border-radius: 0 5px 5px 0;
        }
      }
    }
  }

  .copyright {
    width: 50%;
    margin: 0 auto 15px auto;
    padding-bottom: 20px;

    p {
      text-align: center;
      margin-bottom: 20px;
      line-height: 1.5;

      a {
        color: var(--yellow-color);
        transition: 0.5s ease-out;

        &:hover {
          color: var(--white-color);
        }
      }
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .container {
      .footer__address {
        address {
          p {
            font-size: 0.9rem;
          }
        }
      }

      .footer__social {
        margin: 0 50px;
      }
    }

    .copyright {
      margin: 60px auto 15px auto;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 992px) {
    .container {
      text-align: center;
      padding: 20px 0 50px 0;
      flex-direction: column;

      h2 {
        width: 35%;
        margin: 15px auto;
      }

      .footer__social {
        margin: 35px 0;

        ul {
          justify-content: center;
        }
      }

      .footer__newsletter {
        div {
          justify-content: center;
        }
      }
    }
    .copyright {
      width: 80%;
    }
  }

  @media screen and (max-width: 480px) {
    hr {
      display: none;
    }

    .container {
      padding: 20px 0 40px 0;
      flex-direction: column;

      .footer__address {
        address {
          p {
            font-size: 1rem;
          }
        }
      }

      .footer__social {
        margin: 15px 0;
      }

      .footer__newsletter {
        input {
          width: 80%;
        }
      }
    }

    .copyright {
      margin: 30px auto 15px auto;
      width: 80%;
    }
  }
`;
