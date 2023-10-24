import React from "react";
import * as S from "./NavMenu.styles"
import { NavLink } from "react-router-dom";
import "./App-link.css"

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
              <NavLink className="App-link" to="/">
                Главное
              </NavLink>
            </S.menuItem>
            <S.menuItem>
              <NavLink className="App-link" to="/favorites">
                Мой плейлист
              </NavLink>
            </S.menuItem>
            <S.menuItem>
              <NavLink className="App-link" to="/login">
                Выйти
              </NavLink>
            </S.menuItem>
          </S.menuList>
        </S.navMenu>
      )}
    </S.mainNav>
  );
}

export default NavMenu;
