import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../store/themeSlice"

const store = configureStore({
    reducer: {
        darkMode: themeReducer,
    }
})

export default store;