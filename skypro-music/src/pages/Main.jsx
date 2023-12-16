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
  const { loading, tracks, tracksError } = useContext(Context);
  const songs = useSelector((state) => state.playlist.tracks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tracks.length) dispatch(tracksRedux(tracks));
  }, [dispatch, tracks]);

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
