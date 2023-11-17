import Header from "layouts/Header";
import Nav from "layouts/Nav";
import SquidwardImg from "assets/images/징징이2.png";
import SpongebobImg from "assets/images/스폰지밥.png";
import Patrick from "assets/images/뚱이.png";

const charactersMenu = [
  { id: 1, characterName: "스폰지밥", img: SpongebobImg },
  { id: 2, characterName: "뚱이", img: Patrick },
  { id: 3, characterName: "징징이", img: SquidwardImg },
];

console.log(charactersMenu);

function Home() {
  return (
    <>
      <Header />
      <Nav charactersMenu={charactersMenu} />
    </>
  );
}

export default Home;
