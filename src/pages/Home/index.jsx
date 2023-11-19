import Header from "layouts/Header";
import Nav from "layouts/Nav";
import Footer from "layouts/Footer";

function Home({ letters, setLetters }) {
  return (
    <>
      <Header />
      <Nav letters={letters} setLetters={setLetters} />
      <Footer />
    </>
  );
}

export default Home;
