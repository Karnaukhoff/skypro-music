import "./App.css";
import * as S from "./App.styles"
import React from "react";

import NavMenu from "./components/NavMenu/NavMenu";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import TreckList from "./components/TreckList/TreckList";
import Bar from "./components/Bar/Bar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <S.wrapper>
      <S.container>
        <S.main>
          <NavMenu />
          <S.centroblock>
            <Search />
            <S.centoblockTittle>Треки</S.centoblockTittle>
            <Filter />
            <TreckList />
          </S.centroblock>
          <Sidebar />
        </S.main>
        <Bar />
        <S.footer></S.footer>
      </S.container>
    </S.wrapper>
  );
}

export default App;
