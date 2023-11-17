import React from "react";
import * as M from "components/Modal/ModalStyle";

function Modal({ selectedCharacter }) {
  return (
    <>
      <M.ModalWrap>
        <M.ModalContent>
          <M.ModalHead>{selectedCharacter.characterName}에게</M.ModalHead>
          <M.ModalBody>내용</M.ModalBody>
        </M.ModalContent>
      </M.ModalWrap>
    </>
  );
}

export default Modal;
