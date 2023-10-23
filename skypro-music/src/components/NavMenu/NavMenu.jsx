import React from "react";
import * as S from "./NavMenu.styles"

const { useState } = React;

function NavMenu() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

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
              <S.menuLink href="#">
                Главное
              </S.menuLink>
            </S.menuItem>
            <S.menuItem>
              <S.menuLink href="#">
                Мой плейлист
              </S.menuLink>
            </S.menuItem>
            <S.menuItem>
              <S.menuLink href="../signin.html">
                Войти
              </S.menuLink>
            </S.menuItem>
          </S.menuList>
        </S.navMenu>
      )}
    </S.mainNav>
  );
}

export default NavMenu;
