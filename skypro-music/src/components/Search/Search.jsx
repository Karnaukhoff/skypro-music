import React from "react";
import * as S from "./Search.styles"

function Search() {
  return (
    <S.centroblockSearch>
      <S.searchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.searchSvg>
      <S.searchText
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.centroblockSearch>
  );
}
export default Search;
