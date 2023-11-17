import { createGlobalStyle } from "styled-components";
import IAMAPLAYERWOFF from "assets/fonts/IAMAPLAYER.woff";
import IAMAPLAYERWOFF2 from "assets/fonts/IAMAPLAYER.woff2";
// import IAMAPLAYERWTTF from "assets/fonts/IAMAPLAYER.woff";

const styled = { createGlobalStyle };

const GlobalFonts = styled.createGlobalStyle`
  @font-face {
    font-family: "I AM A PLAYER";
    font-weight: normal;
    src: local("I AM A PLAYER"), url(${IAMAPLAYERWOFF2}) format("font-woff2"),
      url(${IAMAPLAYERWOFF}) format("font-woff");
    /* url("assets/fonts/I AM A PLAYER.ttf") format("truetype"); */
  }
`;

export default GlobalFonts;
