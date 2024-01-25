import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'formValue',
    initialState: {
        formValue: '',
    },
    reducers: {
        addMovie(state, action) {
            console.log(state)
            console.log(action)
            // state.movies
        }
    }
})

export const { addMovie } = formSlice.actions
export default formSlice.reducer
