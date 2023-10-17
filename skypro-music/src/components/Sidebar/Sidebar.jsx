import "./Sidebar.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import React, { useState } from "react";

function Sidebar() {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <SkeletonTheme
                baseColor="#313131"
                highlightColor="#fff"
                height={150}
                width={250}
              >
              {isLoading ? (
                  <Skeleton />
                ) : (
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                    )
                }
            </SkeletonTheme>
          </div>
          <div className="sidebar__item">
              <SkeletonTheme
                baseColor="#313131"
                highlightColor="#fff"
                height={150}
                width={250}
              >
              {isLoading ? (
                  <Skeleton />
                ) : (
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                    )
                }
            </SkeletonTheme>
          </div>
          <div className="sidebar__item">
              <SkeletonTheme
                baseColor="#313131"
                highlightColor="#fff"
                height={150}
                width={250}
              >
              {isLoading ? (
                  <Skeleton />
                ) : (
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                    )
                }
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
