import React, { useState } from "react";
import * as N from "layouts/Nav/NavStyle";
import Modal from "components/Modal";
import MenuButton from "components/Button";

const Nav = ({ characterMenu }) => {
  const [modal, setModal] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState(
    characterMenu[0].id
  );
  const [isHoveredCharacter, setIsHoveredCharacter] = useState(false);

  const selectedCharacter = characterMenu.find(
    (character) => character.id === selectedCharacterId
  );

  console.log(selectedCharacter);

  const clickModalOpen = () => {
    setModal(true);
  };

  const onMouseOver = () => {
    setIsHoveredCharacter(true);
  };

  const onMouseLeave = () => {
    setIsHoveredCharacter(false);
  };
  return (
    <>
      {isHoveredCharacter && <N.NavMessage>에게 메세지 보내기~!</N.NavMessage>}
      <N.Navbar>
        <MenuButton
          clickModalOpen={clickModalOpen}
          selectedCharacterId={selectedCharacterId}
          setSelectedCharacterId={setSelectedCharacterId}
          characterMenu={characterMenu}
          isSelected={characterMenu.id === selectedCharacterId}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
        {modal === true ? (
          <Modal
            characterMenu={characterMenu}
            selectedCharacter={selectedCharacter}
          />
        ) : null}
      </N.Navbar>
    </>
  );
};

export default Nav;
