import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  background-color: transparent;
`;

export const SquidWardImgTagWrap = styled.div`
  margin: 2rem 0 0 20rem;
  transition: 0.3s;
`;

export const SquidwardImgTag = styled.img`
  width: 100px;
  height: 150px;
  ${SquidWardImgTagWrap}:hover & {
    scale: calc(1.2);
  }
`;

export const SquidwardImgTagTitle = styled.p`
  background-color: var(--aqua-blue);
  color: var(--white);
  font-family: "Gowun Dodum";
  font-size: 3rem;
  z-index: 1;
  ${SquidWardImgTagWrap}:hover & {
    scale: calc(1.2);
  }
`;
