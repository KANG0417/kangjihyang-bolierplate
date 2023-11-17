import { createGlobalStyle } from "styled-components";
import BodyImg from "assets/images/친구들집.jpg";
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
  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
