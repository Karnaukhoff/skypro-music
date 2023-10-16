import React from "react";
import "./TreckList.css";
import Track from "../components";

function treckList() {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
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
      </div>
    </div>
  );
}
export default treckList;
