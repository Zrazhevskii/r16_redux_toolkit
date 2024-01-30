import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        clearMovie(state) {
            state.splice(0, 1);
        },
    }
})

export const { addMovie, clearMovie } = movieSlice.actions
export default movieSlice.reducer
