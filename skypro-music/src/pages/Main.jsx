import * as S from "./styles/Main.styles";
import React, { useEffect } from "react";

import NavMenu from "../components/NavMenu/NavMenu";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import TreckList from "../components/TreckList/TreckList";
import Bar from "../components/Bar/Bar";
import Sidebar from "../components/Sidebar/Sidebar";
import GlobalStyle from "./styles/Main.styles";
import { useContext } from "react";
import Context from "../context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tracksRedux } from "../store/slices/trackSlice";

export const Main = () => {
  const { user, setUser, loading, tracks, tracksError } = useContext(Context);
  const currentTrack = useSelector((state) => state.playlist.currentTrack);
  const songs = useSelector((state) => state.playlist.tracks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tracks.length) dispatch(tracksRedux(tracks));
  }, [dispatch, tracks]);

  return (
    <S.wrapper>
      <GlobalStyle />
      <S.container>
        <S.main>
          <NavMenu user={user} setUser={setUser} />
          <S.centroblock>
            <Search />
            <S.centoblockTittle>Треки</S.centoblockTittle>
            <Filter />
            {tracksError ? (
              <p>Не удалось загрузить плейлист, попробуйте позже</p>
            ) : (
              <TreckList tracks={songs} loading={loading} />
            )}
          </S.centroblock>
          <Sidebar loading={loading} />
        </S.main>
        {currentTrack ? (
          <Bar loading={loading} currentTrack={currentTrack} />
        ) : null}
        <S.footer></S.footer>
      </S.container>
    </S.wrapper>
  );
};
