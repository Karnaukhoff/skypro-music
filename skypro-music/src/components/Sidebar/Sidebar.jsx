import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from "./Sidebar.styles"
import { Link } from "react-router-dom";

function Sidebar({loading}) {
  function logOut(){
    window.location.href="/login"
  }
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon onClick={logOut}>
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
                {loading ? (
                    <Skeleton />
                  ) : (
                      <S.SidebarLink href="/#">
                        <Link to={'/categorySongs/1'}>
                          <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
                        </Link>
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
                {loading ? (
                    <Skeleton />
                  ) : (
                      <S.SidebarLink href="/#">
                        <Link to={'/categorySongs/2'}>
                          <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
                        </Link>
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
                {loading ? (
                    <Skeleton />
                  ) : (
                      <S.SidebarLink href="/#">
                        <Link to={'/categorySongs/3'}>
                          <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
                        </Link>
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
