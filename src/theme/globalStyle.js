import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background-color: #f2f2f2;
    font-family: Hind;
    font-weight: normal;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input, textarea, button {
    font-family: inherit
  }
`
