import * as S from "./styles/Main.styles";
import React, { useEffect } from "react";

import NavMenu from "../components/NavMenu/NavMenu";
import Search from "../components/Search/Search";
import Bar from "../components/Bar/Bar";
import Sidebar from "../components/Sidebar/Sidebar";
import GlobalStyle from "./styles/Main.styles";
import { useContext } from "react";
import Context from "../context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tracksRedux } from "../store/slices/trackSlice";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const { user, setUser, loading, tracks, setPlaylist, isPlaylist } = useContext(Context);
  const currentTrack = useSelector((state) => state.playlist.currentTrack);
  const search = useSelector((state) => state.playlist.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tracks.length) dispatch(tracksRedux(tracks));
  }, [dispatch, tracks]);

  useEffect(() => {
    const tracksArray = []
      setPlaylist(tracks)

      console.log(isPlaylist)
    // eslint-disable-next-line
    tracks.some(track => {
      if (track.name.toLocaleLowerCase().includes(search.search.toString().toLocaleLowerCase())
      || track.album.toLocaleLowerCase().includes(search.search.toString().toLocaleLowerCase())
    || track.author.toLocaleLowerCase().includes(search.search.toString().toLocaleLowerCase())){
      tracksArray.push(track)
      setPlaylist(tracksArray)
    }
    else if (search.search.length === 0){
      setPlaylist(tracks)
    }
    })
    if (search.search.toString() !== 'function search() { [native code] }'){
      dispatch(tracksRedux(tracksArray))
      console.log(search.search.length, search.search.toString())
    }
    // eslint-disable-next-line
  }, [search.search])

  return (
    <S.wrapper>
      <GlobalStyle />
      <S.container>
        <S.main>
          <NavMenu user={user} setUser={setUser} />
          <S.centroblock>
            <Search />
            
            <Outlet />

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
