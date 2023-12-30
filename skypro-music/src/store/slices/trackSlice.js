import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    currentTrack: null,
    isPlaying: false,
    tracks: [],
    favorites: [],
    catalog_1: [],
    catalog_2: [],
    catalog_3: [],
    search: "",
    sort: "",
    authorFilter: [],
    genreFilter: [],
}

export const trackSlice = createSlice({
    name: "track",
    initialState,
    reducers: {
        setCurrentTrackRedux: (state, action) => {
            state.currentTrack = action.payload
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload
        },
        tracksRedux: (state, action) => {
            state.tracks = action.payload
        },
        favoritesRedux: (state, action) => {
            state.favorites = action.payload
        },
        catalogClassic: (state, action) => {
            state.catalog_1 = action.payload
        },
        catalogElectro: (state, action) => {
            state.catalog_2 = action.payload
        },
        catalogRock: (state, action) => {
            state.catalog_3 = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setAuthorFilter: (state, action) => {
            state.authorFilter = action.payload
        },
        setGenreFilter: (state, action) => {
            state.genreFilter = action.payload
        },
    }
})

export const {setCurrentTrackRedux, setIsPlaying, tracksRedux, favoritesRedux, catalogClassic, catalogElectro, 
    catalogRock, setSearch, setSort, setAuthorFilter, setGenreFilter } = trackSlice.actions
export default trackSlice.reducer