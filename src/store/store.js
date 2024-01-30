import { configureStore } from '@reduxjs/toolkit';
import FormReducer from './FormSlice';
import ItemsReducer from './ItemsSlice';
import FavoritesSlice from './FavoritesSlice';
import MovieSlice from './MovieSlice';

export const state = configureStore({
    reducer: {
        form: FormReducer,
        items: ItemsReducer,
        favor: FavoritesSlice,
        movie: MovieSlice,
    },
});
