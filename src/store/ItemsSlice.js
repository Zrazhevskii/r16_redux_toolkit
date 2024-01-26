import { createSlice } from '@reduxjs/toolkit';

const itemsSlise = createSlice({
    name: 'items',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload)
        },
    },
});

export const { addItem } = itemsSlise.actions
export default itemsSlise.reducer