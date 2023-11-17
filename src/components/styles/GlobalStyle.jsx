import { createGlobalStyle } from "styled-components";
import BodyImg from "assets/images/친구들집.jpg";
import IAmAPlayerTTF from "assets/fonts/I AM A PLAYER.ttf";
import IAmAPlayerWOFF from "assets/fonts/IAMAPLAYER.woff";
import IAmAPlayerWOFF2 from "assets/fonts/IAMAPLAYER.woff2";
import reset from "styled-reset";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  input,
  textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  body {
    background-image: url(${BodyImg});
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  @font-face {
    font-family: "I AM A PLAYER";
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: local("I AM A PLAYER"), url(${IAmAPlayerWOFF2}) format("font-woff2"),
      url(${IAmAPlayerWOFF}) format("font-woff"),
      url(${IAmAPlayerTTF}) format("truetype");
  }
`;

export default GlobalStyle;
