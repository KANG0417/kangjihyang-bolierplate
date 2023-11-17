import React, { useState } from "react";
import * as M from "./MenuButtonStyle";

function MenuButton({ charactersMenu, clickModalOpen }) {
  const [selectedCharacterId, setSelectedCharacterId] = useState(
    charactersMenu[0].id
  );

  const clickChangeName = () => {
    setSelectedCharacterId(charactersMenu.id);
  };

  return (
    <>
      {charactersMenu.map((menu) => {
        return (
          <M.MenuBtnWrap key={menu.id}>
            <M.MenuBtnTitle>{menu.characterName}</M.MenuBtnTitle>
            <button
              onClick={() => {
                clickChangeName();
                clickModalOpen();
              }}
            >
              <M.MenuBtnImg
                src={menu.img}
                alt={`${menu.characterName} 이미지`}
              />
            </button>
          </M.MenuBtnWrap>
        );
      })}
    </>
  );
}

export default MenuButton;
