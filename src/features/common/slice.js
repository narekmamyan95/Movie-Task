import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    currentMovie:{},
    isFilmClicked:false,
}

export const commonSlice = createSlice({
    name:"common",
    initialState,
    reducers : {
        setCurrentMovie:(state,payload) => {
            state.currentMovie = payload.payload
        },
        setISClicked:(state,payload) => {
            state.isFilmClicked = payload.payload
        }
    }
})

export const {setCurrentMovie,setISClicked} = commonSlice.actions;
export default commonSlice.reducer;