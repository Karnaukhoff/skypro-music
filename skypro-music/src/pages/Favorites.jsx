import * as S from "./styles/Main.styles";
import React, { useEffect } from "react";
import GlobalStyle from "./styles/Main.styles";
import { useSelector, useDispatch } from "react-redux";
import { getFavoriteTracks } from "../api/api";
import { favoritesRedux } from "../store/slices/trackSlice";
import Track from "../components/Track/Track";


export const Favorites = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.access.access)
  const favoriteTracks = useSelector((state) => state.playlist.favorites)

  useEffect(() => {
    ( async () => {const tracks = await getFavoriteTracks(token)
      console.log(tracks)
      dispatch(favoritesRedux(tracks))
    })()
    // eslint-disable-next-line
  }, [])

  return (
    <>
        <GlobalStyle />
        <S.centoblockTittle>Мои Треки</S.centoblockTittle>
        {
          favoriteTracks.length > 0 ?
          favoriteTracks.map((item) => {
            return <Track item={item} key={item.id}/>
          })
          :
          <p>В данном плейлисте треков нет</p>
        }
  </>
  );
};