import Footer from "./components/Footer";
import Header from "./components/Header";
import MainInquiring from "./components/MainInquiring";
import MainWrite from "./components/MainWrite";
import Nav from "./components/Nav";
import "./assets/reset.css";

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
