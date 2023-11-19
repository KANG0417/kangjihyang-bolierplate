import React, { useState } from "react";
import * as N from "layouts/Nav/NavStyle";
import Modal from "components/Modal";
import MenuButton from "components/MenuButton";
import SquidwardImg from "assets/images/징징이2.png";
import SpongebobImg from "assets/images/스폰지밥.png";
import Patrick from "assets/images/뚱이.png";

const characterMenus = [
  { id: 1, characterName: "스폰지밥", img: SpongebobImg },
  { id: 2, characterName: "뚱이", img: Patrick },
  { id: 3, characterName: "징징이", img: SquidwardImg },
];

const Nav = ({ letters, setLetters }) => {
  const [modal, setModal] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState();
  const [hoverdCharacterId, setHoverdCharacterId] = useState();

  const hoverdCharacter = characterMenus.find(
    (character) => character.id === hoverdCharacterId
  );

  const selectedCharacter = characterMenus.find(
    (character) => character.id === selectedCharacterId
  );

  const clickModalOpen = () => {
    setModal(true);
  };

  const clickModalClose = () => {
    setModal(false);
  };

  const onMouseOver = (characterId) => {
    setHoverdCharacterId(characterId);
  };

  const onMouseLeave = () => {
    setHoverdCharacterId();
  };

  return (
    <>
      <N.NavMessage>
        {hoverdCharacter ? hoverdCharacter.characterName : "비키니시티 주민"}
        에게 메세지 보내기~!
      </N.NavMessage>
      <N.Navbar>
        {characterMenus.map((characterMenu) => {
          return (
            <MenuButton
              key={characterMenu.id}
              menu={characterMenu}
              clickModalOpen={clickModalOpen}
              setSelectedCharacterId={setSelectedCharacterId}
              isSelected={characterMenus.id === selectedCharacterId}
              onMouseOver={() => onMouseOver(characterMenu.id)}
              onMouseLeave={onMouseLeave}
            />
          );
        })}
        {modal === true ? (
          <Modal
            selectedCharacter={selectedCharacter}
            clickModalClose={clickModalClose}
            letters={letters}
            setLetters={setLetters}
          />
        ) : null}
      </N.Navbar>
    </>
  );
};

export default Nav;
