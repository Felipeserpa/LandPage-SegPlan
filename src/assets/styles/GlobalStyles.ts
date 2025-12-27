import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html {
    font-family: "Montserrat", sans-serif;
    scroll-behavior: smooth;
    background-color: ${(props) => props.theme.backgroundColor};
  }

  body {
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  /* 🔥 TEXTO GLOBAL (CONTROLADO) */
  p {
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    color: ${(props) => props.theme.grey};
  }

  /* Scrollbar */
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.backgroundColor};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondaryColor};
    border-radius: 10px;
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.secondaryColorHover};
  }

  /* Utilities */
  .text-white {
    color: ${(props) => props.theme.aliceBlue};
  }

  .text-blue {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default GlobalStyles;
