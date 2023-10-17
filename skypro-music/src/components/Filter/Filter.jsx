import React from "react";
import "./Filter.css";
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
    <div className="modal">
        <div className="modal__content">
            {
                filter.map((i) => {
                    return(
                        <a href="#" className="modal__content_text">
                            {i}
                        </a>
                    )
                })
            }
        </div>
    </div>
    );
  }

  function Filter() {
    const [activeFilter, setActiveFilter] = useState();
    return (
    <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className="filter__button button-author _btn-text"
          onClick={() =>
            activeFilter !== "author" ? setActiveFilter("author") : setActiveFilter()
          }
        >
          исполнителю
          {activeFilter === "author" && FilterList(activeFilter)}
        </div>
  
        <div
          className="filter__button button-year _btn-text"
          onClick={() =>
            activeFilter !== "year" ? setActiveFilter("year") : setActiveFilter()
          }
        >
          году выпуска
          {activeFilter === "year" && FilterList(activeFilter)}
        </div>
  
        <div
          className="filter__button button-genre _btn-text"
          onClick={() =>
            activeFilter !== "genre" ? setActiveFilter("genre") : setActiveFilter()
          }
        >
          жанру
          {activeFilter === "genre" && FilterList(activeFilter)}
        </div>
    </div>
    );
  }
  export default Filter;