import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styleSettings from "../utils/settings/styleSettings";

const { fonts, colors } = styleSettings;

export const GlobalStyle = createGlobalStyle`
  ${reset} 

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: ${colors.grey.black};
    font-weight: ${fonts.primary.regular.fontWeight};
    font-family: ${fonts.primary.fontFamily};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: #ffffff;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: ${fonts.primary.bold.fontWeight};
    font-family: ${fonts.primary.fontFamily};
  }
  button {
    outline: none;
    border: 0px;
    background: transparent;
  }
`;
