import { configureStore } from '@reduxjs/toolkit';
import FormReducer from './reducSlice'

export const state = configureStore({
    reducer: {
        form : FormReducer,
    }
})
