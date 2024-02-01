import { createSlice } from '@reduxjs/toolkit';

const loadNullSlice = createSlice({
    name: 'loadNull',
    initialState: {
        active: false,
    },
    reducers: {
        changeLoadBool(state, action) {
            state.active = action.payload;
        },
    },
});

export const { changeLoadBool } = loadNullSlice.actions;
export default loadNullSlice.reducer;
