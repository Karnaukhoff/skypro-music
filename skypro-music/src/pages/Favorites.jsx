import * as S from "./styles/Main.styles";
import React/*, { useEffect } */from "react";

//import TreckList from "../components/TreckList/TreckList";
import GlobalStyle from "./styles/Main.styles";
/*import { useContext } from "react";
import Context from "../context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tracksRedux } from "../store/slices/trackSlice";*/

export const Favorites = () => {
  //const { loading, tracks, tracksError } = useContext(Context);
  //const songs = useSelector((state) => state.playlist.tracks);
  //const dispatch = useDispatch();
  /*useEffect(() => {
    if (tracks.length) dispatch(tracksRedux(tracks));
  }, [dispatch, tracks]);*/

  return (
    <>
        <GlobalStyle />
        <S.centoblockTittle>Мои Треки</S.centoblockTittle>
        <p>В этом плейлисте нет треков</p>
  </>
  );
};
