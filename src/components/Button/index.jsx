import React, { useState } from "react";
import * as M from "./MenuButtonStyle";

function MenuButton({
  characterMenu,
  clickModalOpen,
  setSelectedCharacterId,
  onMouseOver,
}) {
  const clickChangeName = () => {
    setSelectedCharacterId(characterMenu.id);
  };

  return (
    <>
      {characterMenu.map((menu) => {
        return (
          <M.MenuBtnWrap key={menu.id} onMouseOver={onMouseOver}>
            <M.MenuBtn
              onClick={() => {
                clickChangeName();
                clickModalOpen();
              }}
            >
              <M.MenuBtnImg
                src={menu.img}
                alt={`${menu.characterName} 이미지`}
              />
            </M.MenuBtn>
          </M.MenuBtnWrap>
        );
      })}
    </>
  );
}

export default MenuButton;
