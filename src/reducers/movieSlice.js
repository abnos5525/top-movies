import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies: [],
    movieDetails: [],
    status: "idle",
    error: null,
    pageCount: 1,
}

export const fetchMovies = createAsyncThunk("movies/fetchMovies",
    async (page) =>{
        try {
            const res = await axios.get(`http://moviesapi.ir/api/v1/movies?page=${page}`)
            return res.data
        }catch (err){
            console.log(err)
        }
    }
)

export const fetchMovie = createAsyncThunk("movies/fetchMovie",
    async (movieId) =>{
        try {
            const res = await axios.get(`http://moviesapi.ir/api/v1/movies/${movieId}`)
            return res.data
        }catch (err){
            console.log(err)
        }
    }
)

export const fetchMoviesByGenre = createAsyncThunk("movies/fetchMoviesByGenre",
    async ({ genre, page }) => {
        try {
        const res = await axios.get(
            `http://moviesapi.ir/api/v1/genres/${genre}/movies?page=${page}`
        );
        return res.data;
        }catch (err){
            console.log(err)
        }
    }
);

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchMovies.pending,(state, action)=>{
                state.status = "pending"
            })
            .addCase(fetchMovies.fulfilled, (state, action)=>{
                state.status = "fulfilled"
                state.movies = action.payload.data
                state.pageCount = action.payload.metadata.page_count;
            })
            .addCase(fetchMovies.rejected, (state, action) =>{
                state.status = "rejected"
                state.error = action.error.message;
            })
            .addCase(fetchMoviesByGenre.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.movies = action.payload.data;
                state.pageCount = action.payload.metadata.page_count;
            })
            .addCase(fetchMoviesByGenre.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            })
            .addCase(fetchMovie.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.movieDetails = action.payload
            })
            .addCase(fetchMovie.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message
            });
    }
})

export default movieSlice.reducer