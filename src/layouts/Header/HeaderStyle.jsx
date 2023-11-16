import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 6rem;
  margin: 5rem auto 2rem auto;
  background-color: var(--aqua-blue);
  border-radius: 70px;
`;

export const HeaderTitle = styled.h1`
  background: linear-gradient(to bottom, var(--yellow), var(--aqua-blue));
  color: transparent;
  -webkit-background-clip: text;
  font-family: "Bagel Fat One", sans-serif;
  font-size: 3rem;
`;
