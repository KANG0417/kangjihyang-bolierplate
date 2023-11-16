import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as N from "layouts/Nav/NavStyle";
import Modal from "components/Modal";
import MenuButton from "components/Button";

const Nav = ({ navTitle }) => {
  const [modal, setModal] = useState(false);

  const clickModalOpen = () => {
    console.log("모달창 오픈");
    setModal(true);
  };

  return (
    <N.Navbar>
      <Link to="/spongebob">스폰지밥</Link>
      <Link to="/patrick">뚱이</Link>
      <MenuButton clickModalOpen={clickModalOpen} navTitle={navTitle} />
      {modal === true ? <Modal /> : null}
    </N.Navbar>
  );
};

export default Nav;
