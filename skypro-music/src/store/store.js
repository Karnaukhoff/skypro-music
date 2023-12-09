import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./slices/trackSlice";

export const store = configureStore({
    reducer: {
        playlist: trackReducer,
    }, 
})