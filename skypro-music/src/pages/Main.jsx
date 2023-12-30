import * as S from "./styles/Main.styles";
import React, { useEffect } from "react";

import Filter from "../components/Filter/Filter"
import TreckList from "../components/TreckList/TreckList";
import GlobalStyle from "./styles/Main.styles";
import { useContext } from "react";
import Context from "../context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tracksRedux } from "../store/slices/trackSlice";
import { setAccess, setRefresh, setUserData } from "../store/slices/authSlice";

export const Main = () => {
  const { loading, tracks, tracksError, setPlaylist } = useContext(Context);
  const songs = useSelector((state) => state.playlist.tracks);
  const favorites = useSelector((state) => state.playlist.favorites);
  const search = useSelector((state) => state.playlist.search);
  const sort = useSelector((state) => state.playlist.sort)
  const dispatch = useDispatch();

  function sortTracks(sortValue){
    let tracklist = songs
    
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
    } else {return tracks}
  }

  useEffect(() => {
    if (tracks.length) {
      if (search.search.toString() === 'function search() { [native code] }' || search.search === ""){
        dispatch(tracksRedux(tracks))
        setPlaylist(songs)
      }
    };
    // eslint-disable-next-line
  }, [dispatch, tracks, favorites]);

  useEffect(() => {
    if (sort === "Сначала новые" || sort === "Сначала старые"){
      dispatch(tracksRedux(sortTracks(sort)))
      setPlaylist(sortTracks(sort))
    } else {
      dispatch(tracksRedux(tracks))
      setPlaylist(tracks)
    }
    console.log(sort)
    // eslint-disable-next-line
  }, [sort])

  useEffect(() => {
    if (localStorage.getItem("authData") !== null) {
      let authData = JSON.parse(localStorage.getItem("authData"));
      dispatch(setUserData(authData.user));
      dispatch(setRefresh(authData.refresh));
      dispatch(setAccess(authData.access));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
        <GlobalStyle />
        <S.centoblockTittle>Треки</S.centoblockTittle>
        <Filter />
        {tracksError ? (
          <p>Не удалось загрузить плейлист, попробуйте позже</p>
        ) : (
          <TreckList tracks={songs} loading={loading} />
        )}
  </>
  );
};
