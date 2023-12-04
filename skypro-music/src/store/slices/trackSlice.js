import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    currentTrack: null,
    isPlaying: false,
    nextTrack: null,
    tracks: [],
    //shuffle: false
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
        setNextTrack: (state, action) => {
            state.nextTrack = action.payload
        },
    }
})

export const {setCurrentTrackRedux, setIsPlaying, tracksRedux, setNextTrack} = trackSlice.actions
export default trackSlice.reducer