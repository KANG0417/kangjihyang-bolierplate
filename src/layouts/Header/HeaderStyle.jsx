import styled from "styled-components";
import SpongebobLogo from "assets/images/스폰지밥로고.png";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 300px;
  margin: 5rem auto 2rem auto;
  background-image: url(${SpongebobLogo});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 70px;
`;

export const HeaderTitle = styled.h1`
  background: linear-gradient(to bottom, var(--yellow), var(--aqua-blue));
  color: transparent;
  -webkit-background-clip: text;
  font-family: "SDSwagger", sans-serif;
  font-size: 3rem;
`;
