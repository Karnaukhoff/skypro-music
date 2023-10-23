import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from "./components.styles"
const { useState } = React;


function Track(props) {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {isLoading ? (
              <Skeleton />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={20}
              width={356}
            >
              {isLoading ? (
                <Skeleton />
              ) : (
                <S.TrackTitleLink href="http://">
                  {props.trackName} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              )}
            </SkeletonTheme>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <SkeletonTheme
            baseColor="#313131"
            highlightColor="#fff"
            height={20}
            width={272}
          >
            {isLoading ? (
              <Skeleton />
            ) : (
              <S.TrackAuthorLink href="http://">
                {props.trackAuthor}
              </S.TrackAuthorLink>
            )}
          </SkeletonTheme>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <SkeletonTheme
            baseColor="#313131"
            highlightColor="#fff"
            height={20}
            width={240}
          >
            {isLoading ? (
              <Skeleton />
            ) : (
              <S.TrackAlbumLink href="http://">
                {props.album}
              </S.TrackAlbumLink>
            )}
          </SkeletonTheme>
          </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {" "}
            {isLoading ? "0.00" : props.trackTime}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
export default Track;