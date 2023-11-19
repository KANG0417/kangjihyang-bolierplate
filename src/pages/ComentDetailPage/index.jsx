import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const body = styled.body`
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

function ComentDetail({ letter }) {
  const { id: paramsId } = useParams();
  const detailLetter = letter.filter((data) => data.id === paramsId);
  console.log(detailLetter);
  return (
    <body>
      <div style={{ width: "100px", height: "200px" }}>
        <p>테스트</p>
        <ul>
          <li>{detailLetter.id}</li>
          <li>{detailLetter.nickName}</li>
          <li>{detailLetter.content}</li>
          <li>{detailLetter.createdAt}</li>
        </ul>
      </div>
    </body>
  );
}

export default ComentDetail;
