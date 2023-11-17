import GlobalColor from "components/styles/GlobalColor";
import GlobalStyle from "components/styles/GlobalStyle";
import Footer from "layouts/Footer";
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
          {/* <Route path="spongebob" element={<SpongebobPage />} />
          <Route path="patrick" element={<PatrickPage />} />
          <Route path="squidward" element={<SquidwardPage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
