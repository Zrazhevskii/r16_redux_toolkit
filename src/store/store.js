import { configureStore } from '@reduxjs/toolkit';
import FormReducer from './FormSlice';
import ItemsReducer from './ItemsSlice';

export const state = configureStore({
    reducer: {
        form: FormReducer,
        items: ItemsReducer,
    },
});
