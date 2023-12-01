import * as S from "./styles/Main.styles";
import React from "react";

import NavMenu from "../components/NavMenu/NavMenu";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import TreckList from "../components/TreckList/TreckList";
import Bar from "../components/Bar/Bar";
import Sidebar from "../components/Sidebar/Sidebar";
import GlobalStyle from "./styles/Main.styles";
import { useContext } from "react";
import Context from "../context"
import { useSelector } from "react-redux";

export const Main = () => {
  const { user, setUser, loading, tracks, tracksError/*, currentTrack, setCurrentTrack */} = useContext(Context)
  const currentTrack = useSelector((state) => state.playlist.currentTrack)
  return (
    <S.wrapper>
      <GlobalStyle />
      <S.container>
        <S.main>
          <NavMenu user={user} setUser={setUser}/>
          <S.centroblock>
            <Search />
            <S.centoblockTittle>Треки</S.centoblockTittle>
            <Filter />
            {tracksError ? (<p>Не удалось загрузить плейлист, попробуйте позже</p>) : (<TreckList tracks={tracks} loading={loading} /*setCurrentTrack = {setCurrentTrack }*//> )}
          </S.centroblock>
          <Sidebar loading={loading}/>
        </S.main>
        {currentTrack ? (<Bar loading = {loading} currentTrack = {currentTrack} />) : (null)}
        <S.footer></S.footer>
      </S.container>
    </S.wrapper>
  );
};
