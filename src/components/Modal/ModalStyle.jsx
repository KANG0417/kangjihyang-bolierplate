import styled from "styled-components";

export const ModalWrap = styled.main`
  background-color: rgba(0, 0, 0, 0.3);
  //배경색과 투명도로 살짝 어둡지만 투명한 배경
  //허공에 붕 떠있는 느낌을 주고 싶으면 안넣어도 무방
  justify-content: center; //수평 중앙정렬
  align-items: center; //수직 중앙정렬
  position: fixed; // 포지션 픽스, 화면이 스크롤되더라도 고정되기 위함
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; //모든 방향에 0을 주면 화면에 꽉차게 됩니다.
  //처음부터 보이게 하는 상황이라면 display:flex;
  padding: 15px;
  //반응형의 경우 padding이 없으면 박스가 화면에 붙어서 안이뻐짐
`;

export const ModalContent = styled.div`
  width: 100%; //반응형 이기 때문에 가로값은 100%
  max-width: 400px; //팝업의 최대 크기지정
  border-radius: 10px; //둥글둥글한 디자인을 위해 각을 없앱니다.
  overflow: hidden; //각을 없앴을 때 내부 영역이 튀어나오는걸 방지
  background-color: #264db5; //배경색
  //팝업이 허공에 떠있는 듯한 느낌을 주기 위한 그림자 효과.
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 5rem auto;
`;

export const ModalHead = styled.div`
  width: 100%;
  //부모요소를 따라가기 때문에 굳이 가로값을 주지 않아도 되지만 일부 ie에서 인식 못하는 문제가 있음
  height: 50px; //헤드 영역 높이
  display: flex; //로고 이미지나 텍스트를 중앙 정렬하기 위한 flex 및 정렬
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 100%;
  background-color: #ffffff;
  min-height: 50rem;
  height: auto;
`;

export const BodyContent = styled.div`
  width: 100%;
  padding: 5rem;
`;

export const BodyTitle = styled.div`
  text-align: center; //제목 중앙정렬
  width: 100%;
  height: 40px;
`;
