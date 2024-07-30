// src/state/reducers/amountReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    amount: 0
};

const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        deposit: (state, action) => {
            state.amount += action.payload;
        },
        withdraw: (state, action) => {
            state.amount -= action.payload;
        },
    },
});

export const { deposit, withdraw } = amountSlice.actions;
export default amountSlice.reducer;
