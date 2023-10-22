import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from "./Sidebar.styles"
import React, { useState } from "react";

function Sidebar() {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
              <SkeletonTheme
                  baseColor="#313131"
                  highlightColor="#fff"
                  height={150}
                  width={250}
                >
                {isLoading ? (
                    <Skeleton />
                  ) : (
                      <S.SidebarLink href="/#">
                        <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
                      </S.SidebarLink>
                      )
                  }
              </SkeletonTheme>
          </S.SidebarItem>
          <S.SidebarItem>
              <SkeletonTheme
                  baseColor="#313131"
                  highlightColor="#fff"
                  height={150}
                  width={250}
                >
                {isLoading ? (
                    <Skeleton />
                  ) : (
                      <S.SidebarLink href="/#">
                        <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
                      </S.SidebarLink>
                      )
                  }
              </SkeletonTheme>
          </S.SidebarItem>
          <S.SidebarItem>
              <SkeletonTheme
                  baseColor="#313131"
                  highlightColor="#fff"
                  height={150}
                  width={250}
                >
                {isLoading ? (
                    <Skeleton />
                  ) : (
                      <S.SidebarLink href="/#">
                        <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
                      </S.SidebarLink>
                      )
                  }
              </SkeletonTheme>
          </S.SidebarItem>  
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
export default Sidebar;
