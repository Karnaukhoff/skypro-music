import React from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from "./Track.styled"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTrackRedux } from "../../store/slices/trackSlice";

export default function Track({item}) {
    const dispatch = useDispatch()
    const currentTrack = useSelector((state) => state.playlist.currentTrack)
    const isPlaying = useSelector((state) => state.playlist.isPlaying);
  
    function time(sec){
      if (sec%60 >= 10){return `${Math.floor(sec/60)}.${sec%60}`}
      else {return `${Math.floor(sec/60)}.0${sec%60}`}
    }
  
    return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack && currentTrack.id === item.id ? (
              <S.PointPlaying $playing={isPlaying} />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
              
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink onClick={() => {dispatch(setCurrentTrackRedux(item))}}>
              {item.name} <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                {item.author}
              </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                {item.album}
              </S.TrackAlbumLink>
          </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {" "}
            {time(item.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
    );
  }