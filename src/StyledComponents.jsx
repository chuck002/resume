import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Jersey+15&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

  body {
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
  }
`;

export default GlobalStyle;