import { createSlice } from '@reduxjs/toolkit';

const itemsSlise = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        },
        clearItems(state) {
            state = [];
        }
    },
});

export const { addItem, clearItems } = itemsSlise.actions
export default itemsSlise.reducer