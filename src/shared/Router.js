import Modal from "components/Modal";
import GlobalColor from "components/styles/GlobalColor";
import GlobalStyle from "components/styles/GlobalStyle";
import ComentDetail from "pages/ComentDetailPage";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  const [letters, setLetters] = useState([]);
  return (
    <>
      <GlobalStyle />
      <GlobalColor />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={<Home letters={letters} setLetters={setLetters} />}
          />
          <Route
            path="detail/:id"
            element={<ComentDetail letter={letters} setLetters={setLetters} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
