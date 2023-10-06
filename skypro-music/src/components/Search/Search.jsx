import React from "react";
import "./Search.css"

function Search() {
    return(
        <div class="centerblock__search search">
              <svg class="search__svg">
                <use xlinkHrefHref="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                class="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
    );
}
export default Search;