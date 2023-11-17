import GlobalColor from "components/styles/GlobalColor";
import GlobalStyle from "components/styles/GlobalStyle";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalColor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
