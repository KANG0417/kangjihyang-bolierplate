import React from "react";
import * as M from "./MenuButtonStyle";
import SquidwardImg from "assets/징징이.png";

function MenuButton({ clickModalOpen }) {
  return (
    <M.MenuBtnWrap>
      <button onClick={clickModalOpen}>
        <M.MenuBtnImg src={SquidwardImg} alt="징징이"></M.MenuBtnImg>
      </button>
    </M.MenuBtnWrap>
  );
}

export default MenuButton;
