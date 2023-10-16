import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const { useState } = React;


function Track(props) {
    const [isLoading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? (
                <Skeleton />
              ) : (
                <svg className="track__title-svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              )}
            </div>
            <div className="track__title-text">
              <SkeletonTheme
                baseColor="#313131"
                highlightColor="#fff"
                height={20}
                width={356}
              >
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <a className="track__title-link" href="http://">
                    {props.trackName} <span className="track__title-span"></span>
                  </a>
                )}
              </SkeletonTheme>
            </div>
          </div>
          <div className="track__author">
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={20}
              width={272}
            >
              {isLoading ? (
                <Skeleton />
              ) : (
                <a className="track__author-link" href="http://">
                  {props.trackAuthor}
                </a>
              )}
            </SkeletonTheme>
          </div>
          <div className="track__album">
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={20}
              width={240}
            >
              {isLoading ? (
                <Skeleton />
              ) : (
                <a className="track__album-link" href="http://">
                  {props.album}
                </a>
              )}
            </SkeletonTheme>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">
              {" "}
              {isLoading ? "0.00" : props.trackTime}
            </span>
          </div>
        </div>
      </div>
    );
  }
  export default Track;