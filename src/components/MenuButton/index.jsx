import React, { useState } from "react";
import * as M from "components/MenuButton/MenuButtonStyle";

function MenuButton({
  menu,
  clickModalOpen,
  setSelectedCharacterId,
  onMouseOver,
  onMouseLeave,
}) {
  const clickChangeName = () => {
    setSelectedCharacterId(menu.id);
  };

  return (
    <>
      <M.MenuBtnWrap>
        <M.MenuBtn
          onClick={() => {
            clickChangeName();
            clickModalOpen();
          }}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <M.MenuBtnImg src={menu.img} alt={`${menu.characterName} 이미지`} />
        </M.MenuBtn>
      </M.MenuBtnWrap>
    </>
  );
}

export default MenuButton;
