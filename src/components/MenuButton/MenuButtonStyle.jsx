import styled from "styled-components";

export const MenuBtnWrap = styled.div`
  margin: 25rem 0 0 20rem;
  transition: 0.3s;
`;

export const MenuMessage = styled.p`
  font-size: 3rem;
`;

export const MenuBtn = styled.button``;

export const MenuBtnImg = styled.img`
  width: 150px;
  height: 200px;
  ${MenuBtnWrap}:hover & {
    scale: calc(1.2);
  }
`;
