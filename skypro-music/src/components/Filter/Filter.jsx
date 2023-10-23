import React from "react";
import * as S from "./Filter.styles"
const { useState } = React;

function FilterList(activeFilter) {
    let authors = ["Nero", "Calvin Harris", "OG Buda", "PHARAOH", "Скриптонит", "Баста"]
    let years = [1997, 1999, 2007, 2015, 2021, 2023]
    let genres = ["Хип-хоп", "Рок", "Поп", "Классика", "Детская"]
    
    let filter = []

    if (activeFilter === "author") {filter = authors}
    if (activeFilter === "year") {filter = years}
    if (activeFilter === "genre") {filter = genres}

    return (
    <S.modal>
        <S.modalContent>
            {
                filter.map((i) => {
                    return(
                        <S.modalContentText href="#">
                            {i}
                        </S.modalContentText>
                    )
                })
            }
        </S.modalContent>
    </S.modal>
    );
  }

  function Filter() {
    const [activeFilter, setActiveFilter] = useState();
    return (
    <S.centroblockFilter>
        <S.filterTitle>Искать по:</S.filterTitle>
        <S.filterButton
          onClick={() =>
            activeFilter !== "author" ? setActiveFilter("author") : setActiveFilter()
          }
        >
          исполнителю
          {activeFilter === "author" && FilterList(activeFilter)}
        </S.filterButton>
  
        <S.filterButton
          onClick={() =>
            activeFilter !== "year" ? setActiveFilter("year") : setActiveFilter()
          }
        >
          году выпуска
          {activeFilter === "year" && FilterList(activeFilter)}
        </S.filterButton>
  
        <S.filterButton
          onClick={() =>
            activeFilter !== "genre" ? setActiveFilter("genre") : setActiveFilter()
          }
        >
          жанру
          {activeFilter === "genre" && FilterList(activeFilter)}
        </S.filterButton>
    </S.centroblockFilter>
    );
  }
  export default Filter;