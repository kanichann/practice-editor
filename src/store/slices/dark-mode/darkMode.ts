import { createSlice } from "@reduxjs/toolkit";


const initialState = true;

const darkModeSlice = createSlice({
    initialState,
    name: 'darkMode',
    reducers: {
        toggleDarkMode(state) {
            console.log(state);
            return !state
        },
    }
})

export const { toggleDarkMode } = darkModeSlice.actions

export const darkModeReducer = darkModeSlice.reducer;

