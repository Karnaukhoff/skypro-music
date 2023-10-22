import React from "react";
//import "./TreckList.css";
import * as S from "./TreckList.styles"
import Track from "../components";

function treckList() {
  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.PlaylistTitleCol>
          <S.Col01>Трек</S.Col01>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col03>АЛЬБОМ</S.Col03>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.PlaylistTitleCol>
      </S.ContentTitle>
      <S.ContentPlaylistItems>
        <Track trackName="Guilt" trackAuthor="Nero" album="Weloome Reality" trackTime="4.44"/>
        <Track trackName="Elektro" trackAuthor="Dynoro, Outwork, Mr. Gee" album="Elektro" trackTime="2.22"/>
        <Track trackName="I’m Fire" trackAuthor="Ali Bakgor" album="I’m Fire" trackTime="2.22 "/>
        <Track trackName="Non Stop" trackAuthor="Стоункат, Psychopath" album="Weloome Reality" trackTime="4.12"/>
        <Track trackName="Run Run" trackAuthor="Jaded, Will Clarke, AR/CO" album="Run Run" trackTime="2.54"/>
        <Track trackName="Eyes on Fire" trackAuthor="Blue Foundation, Zeds Dead" album="Eyes on Fire" trackTime="5.20"/>
        <Track trackName="Mucho Bien" trackAuthor="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" trackTime="3.41"/>
        <Track trackName="Knives n Cherries" trackAuthor="minthaze" album="Captivating" trackTime="1.48"/>
        <Track trackName="How Deep Is Your Love" trackAuthor="Calvin Harris, Disciples" album="How Deep Is Your Love" trackTime="3.32"/>
        <Track trackName="Morena" trackAuthor="Tom Boxer" album="Soundz Made in Romania" trackTime="3.36"/>
        </S.ContentPlaylistItems>
      </S.CenterblockContent>
  );
}
export default treckList;
