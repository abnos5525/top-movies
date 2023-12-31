import {configureStore} from "@reduxjs/toolkit"
import movieSlice, {fetchMovies} from "../reducers/movieSlice.js";

const store = configureStore({
    reducer:{
        movies: movieSlice,
    },
})

store.dispatch(fetchMovies())

export default store

