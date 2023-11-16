import * as N from "layouts/Nav/NavStyle";
import { useState } from "react";
import styled from "styled-components";

const Nav = ({ navTitle }) => {
  const [modal, setModal] = useState(false);

  const clickModalOpen = () => {
    console.log("모달창 오픈");
    setModal(true);
  };

  return (
    <N.Navbar>
      <Button>스폰지밥</Button>
      <Button>뚱이</Button>

      {/* <MenuButton clickModalOpen={clickModalOpen} navTitle={navTitle} />
      {modal === true ? <Modal /> : null} */}
    </N.Navbar>
  );
};

const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  color: #000;
  padding: 0.5rem 2rem;
  font-size: 15px;
`;

export default Nav;
