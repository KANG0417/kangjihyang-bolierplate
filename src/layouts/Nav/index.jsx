import React, { useState } from "react";
import * as N from "layouts/Nav/NavStyle";
import Modal from "components/Modal";
import MenuButton from "components/Button";

const Nav = ({ charactersMenu }) => {
  const [modal, setModal] = useState(false);

  const clickModalOpen = () => {
    console.log("모달창 오픈");
    setModal(true);
  };

  return (
    <N.Navbar>
      <h1 style={{ fontSize: "10rem" }}>Copy</h1>
      <MenuButton
        clickModalOpen={clickModalOpen}
        charactersMenu={charactersMenu}
      />
      {modal === true ? <Modal /> : null}
    </N.Navbar>
  );
};

export default Nav;
