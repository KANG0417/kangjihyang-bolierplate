import React, { useEffect, useState } from "react";
import * as M from "components/Modal/ModalStyle";
import CommonButton from "components/CommonButton";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import axios from "axios";

function Modal({ selectedCharacter, clickModalClose, letters, setLetters }) {
  const [queryNickName, setQueryNickName] = useState("");
  const [queryContent, setQueryContent] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const uuid = crypto.randomUUID();

  const nowTime = moment().format("YY-MM-DD HH:mm:ss");

  const newWriteLetters = {
    uid: uuid,
    createdAt: nowTime,
    nickName: queryNickName,
    content: queryContent,
    writedTo: selectedCharacter.characterName,
    isEdited: isEdited,
  };

  useEffect(() => {
    if (!localStorage.getItem("letters")) {
      const fetchData = async () => {
        const reponse = await axios.get("data/fakeData.json");
        const data = await reponse.data;

        setLetters([newWriteLetters, letters, ...data]);
        const stringifiedLetterMap = JSON.stringify(letters);
        localStorage.setItem(
          selectedCharacter.characterName,
          stringifiedLetterMap,
          newWriteLetters
        );
      };
      fetchData();
    } else {
      const storageData = JSON.parse(
        localStorage.getItem(selectedCharacter.characterName)
      );
      setLetters(storageData, newWriteLetters);
    }
  }, []);

  const handleNickNameChange = (event) => {
    let nickName = event.target.value;
    setQueryNickName(nickName);
  };

  const handleContentChange = (event) => {
    let content = event.target.value;
    setQueryContent(content);
  };

  const clickRegHandler = (event) => {
    event.preventDefault();
    if (queryNickName.trim() === "") {
      alert("닉네임을 입력해주세요!");
      return false;
    }

    if (queryContent.trim() === "") {
      alert("내용을 입력해주세요!");
      return false;
    }

    setLetters([...letters, newWriteLetters]);

    localStorage.setItem(
      selectedCharacter.characterName,
      JSON.stringify([...letters, newWriteLetters])
    );

    setQueryNickName("");
    setQueryContent("");

    alert("등록되었습니다!");
  };

  const clickUpdateHandler = (event) => {
    event.preventDefault();
    alert("수정되었습니다!");
  };

  return (
    <>
      <M.ModalWrap>
        <M.ModalContent>
          <M.ModalHead>
            <M.HeadTitle>{selectedCharacter.characterName}에게</M.HeadTitle>
            <M.CloseButton onClick={clickModalClose} />
          </M.ModalHead>
          <M.ModalBody>
            <M.Form>
              닉네임:{" "}
              <M.InputName
                value={queryNickName}
                onChange={handleNickNameChange}
              />
              {/* 비밀번호: <M.InputPassword value={queryPas/> */}
              내용:{" "}
              <M.TextAreaContent
                value={queryContent}
                onChange={handleContentChange}
              />
              <CommonButton onClickButton={clickRegHandler}>등록</CommonButton>
            </M.Form>
            {letters.map((letter) => {
              return (
                <Link
                  to={`/detail/${letter.id}`}
                  key={letter.id}
                  letter={letter}
                >
                  <M.BoardListWrap>
                    <M.BoardListUl>
                      {letter.nickName}
                      {letter.createdAt}
                      {letter.content}
                    </M.BoardListUl>
                  </M.BoardListWrap>
                </Link>
              );
            })}
          </M.ModalBody>
        </M.ModalContent>
      </M.ModalWrap>
    </>
  );
}

export default Modal;
