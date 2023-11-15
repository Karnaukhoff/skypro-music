import React from "react";
import * as S from "./NavMenu.styles"

const { useState } = React;

function NavMenu({ user, setUser }) {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <S.mainNav>
      <S.navLogo>
        <S.logoImage src="img/logo.png" alt="logo" />
      </S.navLogo>
      <S.navBurger onClick={toggleVisibility}>
        <S.burgerLine></S.burgerLine>
        <S.burgerLine></S.burgerLine>
        <S.burgerLine></S.burgerLine>
      </S.navBurger>
      {visible && (
        <S.navMenu>
          <S.menuList>
            <S.menuItem>
              <S.MenuLink  
              to="/">
                Главное
              </S.MenuLink>
            </S.menuItem>
            <S.menuItem>
              <S.MenuLink to="/favorites">
                Мой плейлист
              </S.MenuLink>
            </S.menuItem>
            <S.menuItem>
              <S.MenuLink to="/login" onClick={user !== null && handleLogout}>
                Выйти
              </S.MenuLink>
            </S.menuItem>
          </S.menuList>
        </S.navMenu>
      )}
    </S.mainNav>
  );
}

export default NavMenu;
