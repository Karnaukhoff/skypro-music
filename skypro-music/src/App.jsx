import "./App.css";
import React from "react";

import NavMenu from "./components/NavMenu/NavMenu";
import Search from "./components/Search/Search"
import Filter from "./components/Filter/Filter"
import TreckList from "./components/TreckList/TreckList"
import Bar from "./components/Bar/Bar"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div class="wrapper">
      <div class="container">
        <main class="main">
          <NavMenu />
          <div class="main__centerblock centerblock">
            <Search />
            <h2 class="centerblock__h2">Треки</h2>
            <Filter />
            <TreckList />
          </div>
          <Sidebar />
        </main>
        <Bar />
        <footer class="footer"></footer>
      </div>
    </div>
  );
}

export default App;
