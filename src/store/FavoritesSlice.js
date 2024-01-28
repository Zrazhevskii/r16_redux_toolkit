import { createSlice } from '@reduxjs/toolkit';

const favoritesSclice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorMovie(state, action) {
            state.push(action.payload);
        },
    },
});

export const { addFavorMovie } = favoritesSclice.actions;
export default favoritesSclice.reducer
