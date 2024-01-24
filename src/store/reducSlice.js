import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
    },
    reducers: {
        addMovie(state, action) {
            state.movies
        }
    }
})
