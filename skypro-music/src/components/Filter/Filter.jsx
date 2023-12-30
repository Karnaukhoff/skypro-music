import React from "react";
import * as S from "./Filter.styles"
import { useContext } from "react";
import Context from "../../context";
import { useDispatch } from "react-redux";
import { setSort } from "../../store/slices/trackSlice";
const { useState } = React;

let localAuthorFilter = []
let localGenreFilter = []

function FilterList(activeFilter) {
  const dispatch = useDispatch();
    const { tracks, setAuthorFilter, setGenreFilter } = useContext(Context);

    let authors = []
    let years = ['По умолчанию', 'Сначала новые', 'Сначала старые']
    let genres = []

    // eslint-disable-next-line
    tracks.some(track => {
      if (authors.indexOf(track.author) === -1){
        authors.push(track.author)
      }
      if (genres.indexOf(track.genre) === -1){
        genres.push(track.genre)
      }
    })
    
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
                        <S.modalContentText onClick={() => {
                          if (i === "Сначала новые" || i === "Сначала старые" || i === "По умолчанию"){
                            dispatch(setSort(i))
                          }
                          else if (activeFilter === "author"){
                            if (localAuthorFilter.includes(i)){
                              let arr = localAuthorFilter.filter((a) => a !== i)
                              localAuthorFilter = arr
                              setAuthorFilter(localAuthorFilter)
                              console.log(localAuthorFilter)
                            } else {
                              localAuthorFilter.push(i)
                              setAuthorFilter(localAuthorFilter)
                              console.log(localAuthorFilter)
                            }
                          }
                          else if (activeFilter === "genre"){
                            if (localGenreFilter.includes(i)){
                              let arr = localGenreFilter.filter((a) => a !== i)
                              localGenreFilter = arr
                              setGenreFilter(localGenreFilter)
                              console.log(localGenreFilter)
                            } else {
                              localGenreFilter.push(i)
                              setGenreFilter(localGenreFilter)
                              console.log(localGenreFilter)
                            }
                          }
                          //нажатие на фильтр
                          //-закрашивание выбранного(раскрашивание)
                          //-диспач
                          //-количество выбранных
                        }}>
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