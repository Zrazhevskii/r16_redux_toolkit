import { createSlice } from '@reduxjs/toolkit';

const favoritesSclice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorMovie(state, action) {
            state.push(action.payload);
        },
        deletMovie(state, action) {
            return state.filter((elem) => elem['imdbID'] !== action.payload);
        },
    },
});

export const { addFavorMovie, deletMovie } = favoritesSclice.actions;
export default favoritesSclice.reducer;
