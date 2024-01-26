import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'formValue',
    initialState: {
        formValue: [],
    },
    reducers: {
        addValue(state, action) {
            state.formValue = action.payload;
        },
        clearForm(state) {
            state.formValue = [];
        },
    },
});

export const { addValue, clearForm } = formSlice.actions;
export default formSlice.reducer;
