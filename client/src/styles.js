import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0 auto;
    }

    .app {
      font-family: Monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #757575;
    }

`;
