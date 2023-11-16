import GlobalStyle from "components/styles/GlobalStyle";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
