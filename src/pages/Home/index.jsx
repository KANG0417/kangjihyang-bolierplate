import GlobalStyle from "components/styles/GlobalStyle";
import Header from "layouts/Header";
import Nav from "layouts/Nav";
import React from "react";

function Home() {
  const navTitle = [
    { id: 1, title: "스폰지밥" },
    { id: 2, title: "뚱이" },
    { id: 3, title: "징징이" },
  ];

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Nav navTitle={navTitle} />
    </div>
  );
}

export default Home;
