import { createGlobalStyle } from "styled-components";
// import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    .home {
      min-height: 1080px;
    }
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
