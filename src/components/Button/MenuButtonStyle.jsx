import styled from "styled-components";

export const MenuBtnWrap = styled.div`
  margin: 40em 0 0 20rem;
  transition: 0.3s;
`;

export const MenuBtnImg = styled.img`
  width: 100px;
  height: 150px;
  ${MenuBtnWrap}:hover & {
    scale: calc(1.2);
  }
`;