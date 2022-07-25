import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --black-color: #181A1C;
        --yellow-color: #FECE1A;
        --white-color: #fff;
        --red-color: #dc3545;
        --gray-color: #6c757d;
        --gray-dark-color: #838589;
        --swiper-navigation-color: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 100%;
        outline: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: var(--white-color);
        font-size: 17px;
        background-color: var(--black-color);
        width: 100%;
        height: 100vh;
    }

    ul>li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    textarea {
        resize: none;
    }
`;
