import Header from "layouts/Header";
import { useState } from "react";
import styled from "styled-components";

const characters = [
  { id: 1, name: "스폰지밥" },
  { id: 2, name: "뚱이" },
  { id: 3, name: "징징이" },
  { id: 4, name: "집게사장" },
  { id: 5, name: "다람이" },
];

function Home() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(
    characters[0].id
  );

  const selectedCharacter = characters.find(
    (character) => character.id === selectedCharacterId
  );

  return (
    <div>
      <Header />

      <ButtonsContainer>
        {characters.map((character) => (
          <Button
            key={character.id}
            onClick={() => setSelectedCharacterId(character.id)}
            isSelected={character.id === selectedCharacterId}
          >
            {character.name}
          </Button>
        ))}
      </ButtonsContainer>

      <Form>
        <h5>'{selectedCharacter.name}'에게 팬레터 쓰기</h5>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button onClick={() => {}}>팬레터 전송하기</button>
      </Form>
    </div>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${(props) => (props.isSelected ? "violet" : "white")};
  border: 1px solid black;
  color: #000;
  padding: 0.5rem 2rem;
  font-size: 15px;
  transition: background-color ease 400ms;

  &:hover {
    background-color: aqua;
  }
`;

const Form = styled.form`
  margin-top: 5rem;
  background-color: white;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem;

  > h5 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export default Home;
