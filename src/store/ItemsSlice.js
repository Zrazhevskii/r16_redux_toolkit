import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// const items = useSelector((state) => state.items)

const itemsSlise = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        },
        clearItems(state, action) {
            state.splice(0, action.payload);
        }
    },
});

export const { addItem, clearItems } = itemsSlise.actions
export default itemsSlise.reducer