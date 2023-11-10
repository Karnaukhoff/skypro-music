import React from "react";
import * as S from "./TreckList.styles"
import Track from "../components";
import { Loading } from "../loading";


function TreckList({tracks, loading, setCurrentTrack }) {
  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.PlaylistTitleCol>
          <S.Col01>Трек</S.Col01>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col03>АЛЬБОМ</S.Col03>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.PlaylistTitleCol>
      </S.ContentTitle>
      <S.ContentPlaylistItems>
      {
        loading ? (
          Loading()
        ) : (
        tracks.map((item) => {
          return Track({item, setCurrentTrack}) 
        }))
      }
      </S.ContentPlaylistItems>
    </S.CenterblockContent>
  );
  
}
export default TreckList;
/*{<Track trackName={item.name} trackAuthor={item.author} album={item.album} trackTime={time(item.duration_in_seconds)
}/>}*/