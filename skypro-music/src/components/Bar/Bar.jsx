import React from "react";
import * as S from "./Bar.styles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const { useState } = React;

function Bar() {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.BarPlayerControls>
              <S.BarPlayerBtnPrev>
                <S.BarBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BarBtnPrevSvg>
              </S.BarPlayerBtnPrev>
              <S.BarPlayerBtnPlay>
                <S.BarPlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.BarPlayerBtnPlaySvg>
              </S.BarPlayerBtnPlay>
              <S.BarPlayerBtnNext>
                <S.BarPlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BarPlayerBtnNextSvg>
              </S.BarPlayerBtnNext>
              <S.BarPlayerBtnIconHover>
                <S.BarPlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BarPlayerBtnRepeatSvg>
              </S.BarPlayerBtnIconHover>
              <S.BarPlayerBtnIconHover>
                <S.BarPlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.BarPlayerBtnShuffleSvg>
              </S.BarPlayerBtnIconHover>
            </S.BarPlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayerContain>
                <S.TrackPlayImg>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySvg>
                </S.TrackPlayImg>
                <S.TrackPlayerAuthor>
                <SkeletonTheme
                    baseColor="#313131"
                    highlightColor="#fff"
                    height={20}
                    width={120}
                  >
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <S.TrackPlayerAuthorLink href="http://">
                      Ты та...
                    </S.TrackPlayerAuthorLink>
                  )}
                </SkeletonTheme>
                </S.TrackPlayerAuthor>
                <S.TrackPlayAlbum>
                <SkeletonTheme
                    baseColor="#313131"
                    highlightColor="#fff"
                    height={20}
                    width={120}
                  >
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <S.TrackPlayAlbumLink href="http://">
                      Баста
                    </S.TrackPlayAlbumLink>
                  )}
                </SkeletonTheme>
                </S.TrackPlayAlbum>
              </S.TrackPlayerContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDisLikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDisLikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/volume#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
export default Bar;
