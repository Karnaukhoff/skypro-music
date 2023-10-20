import React from "react";
import "./Bar.css";
import * as S from "./Bar.styles"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const { useState } = React;

function Bar() {
  const [isLoading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  return (
    <S.bar>
      <S.barContent>
        <S.barPlayerProgress></S.barPlayerProgress>
        <S.barPlayerBlock>
          <S.barPlayer>
            <S.playerControls>
              <S.playerBtnPrev>
                <S.playerBtnPrevSVG alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.playerBtnPrevSVG>
              </S.playerBtnPrev>
              <S.playerBtnPlay>
                <S.playerBtnPlaySVG alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.playerBtnPlaySVG>
              </S.playerBtnPlay>
              <S.playerBtnNext>
                <S.playerBtnNextSVG alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.playerBtnNextSVG>
              </S.playerBtnNext>
              <S.playerBtnRepeat>
                <S.playerBtnRepeatSVG alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.playerBtnRepeatSVG>
              </S.playerBtnRepeat>
              <S.playerBtnShuffle>
                <S.playerBtnShuffleSVG alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.playerBtnShuffleSVG>
              </S.playerBtnShuffle>
            </S.playerControls>

            <S.player>
              <S.trackPlayContain>
                <S.trackPlayImage>
                  <S.trackPlaySVG alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.trackPlaySVG>
                </S.trackPlayImage>
                <S.treck>
                  <SkeletonTheme
                    baseColor="#313131"
                    highlightColor="#fff"
                    height={20}
                    width={120}
                  >
                    {isLoading ? (
                  <Skeleton />
                  ) : (
                  <S.treckLink href="http://">
                    Ты та...
                  </S.treckLink>
                  )}
                  </SkeletonTheme>
                </S.treck>
                <S.author>
                  <SkeletonTheme
                    baseColor="#313131"
                    highlightColor="#fff"
                    height={20}
                    width={120}
                  >
                    {isLoading ? (
                  <Skeleton />
                  ) : (
                  <S.authorLink href="http://">
                    Баста
                  </S.authorLink>
                  )}
                  </SkeletonTheme>
                </S.author>
              </S.trackPlayContain>

              <S.opinion>
                <S.like>
                  <S.likeSVG alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.likeSVG>
                </S.like>
                <S.dislike>
                  <S.dislikeSVG alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.dislikeSVG>
                </S.dislike>
              </S.opinion>
            </S.player>
          </S.barPlayer>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </S.barPlayerBlock>
      </S.barContent>
    </S.bar>
  );
}
export default Bar;
