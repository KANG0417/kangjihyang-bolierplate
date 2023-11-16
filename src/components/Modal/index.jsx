import React from "react";
import * as M from "components/Modal/ModalStyle";
import { navTitle } from "pages/Home";

function Modal({ title, setModal }) {
  return (
    <>
      <M.ModalWrap>
        <M.ModalContent>
          <M.ModalHead>징징이에게</M.ModalHead>
          <M.ModalBody>내용</M.ModalBody>
        </M.ModalContent>
      </M.ModalWrap>
    </>
  );
}

export default Modal;
