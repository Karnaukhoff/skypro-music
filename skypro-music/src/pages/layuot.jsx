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
  const { user, setUser, loading, tracks, setPlaylist } = useContext(Context);
  const currentTrack = useSelector((state) => state.playlist.currentTrack);
  const search = useSelector((state) => state.playlist.search);
  const sort = useSelector((state) => state.playlist.sort)
  const dispatch = useDispatch();

  function sortTracks(sortValue){
    let tracklist = tracks
    
    var mapped = tracklist.map(function (el, i) {
      return { index: i, value: el };
    });
    
    // сортируем массив, содержащий уменьшенные значения
    mapped.sort(function (a, b) {
      if (a.value.release_date > b.value.release_date) {
        return 1;
      }
      if (a.value.release_date < b.value.release_date) {
        return -1;
      }
      return 0;
    });
    
    // контейнер для результа
    var result = mapped.map(function (el) {
      return tracklist[el.index];
    });
    
    if (sortValue === "Сначала новые"){
      return result.reverse()
    } else if (sortValue === "Сначала старые"){
      return result
    } else {
      return tracks
    }
  }

  useEffect(() => {
    const tracksArray = []
    // eslint-disable-next-line
    sortTracks(sort).some(track => {
      if (track.name.toLocaleLowerCase().includes(search.search.toString().toLocaleLowerCase())
      || track.album.toLocaleLowerCase().includes(search.search.toString().toLocaleLowerCase())
    || track.author.toLocaleLowerCase().includes(search.search.toString().toLocaleLowerCase())){
      tracksArray.push(track)
      setPlaylist(tracksArray)
    }
    else if (search.search.length === 0){
      setPlaylist(sortTracks(sort))
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
