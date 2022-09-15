import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styleSettings from "../utils/settings/styleSettings";

const { colors } = styleSettings;

export const GlobalStyle = createGlobalStyle`
  ${reset} 

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: ${colors.grey.black};
    font-weight: normal;
    font-family: "Helvetica Neue", Verdana, Arial, sans-serif;
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${colors.grey.white};
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-family: "Helvetica Neue", Verdana, Arial, sans-serif;
  }
  button {
    outline: none;
    border: 0px;
    background: transparent;
  }
`;
