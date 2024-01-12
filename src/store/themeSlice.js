import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: JSON.parse(localStorage.getItem("darkMode")) || true
}

const themeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.mode = !state.mode
            localStorage.setItem("darkMode", JSON.stringify(state.mode));
        }
    }
})

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;