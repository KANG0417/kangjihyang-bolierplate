import Footer from "pages/Footer";
import Header from "pages/Header";
import MainInquiring from "pages/MainInquiring";
import MainWrite from "pages/MainWrite";
import Nav from "pages/Nav";
import "components/style/reset.css";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <MainWrite />
      <MainInquiring />
      <Footer />
    </div>
  );
}

export default App;
