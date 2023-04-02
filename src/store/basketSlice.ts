import { basketItem } from './../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MainState {
    items: basketItem[];
}

const initialState: MainState = {
    items: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket (state, action: PayloadAction<basketItem>) {
            let curIndex: number = -1
            state.items.map((a, index) => a.item.id === action.payload.item.id ? curIndex = index : '') 
            if (curIndex === -1) {
                state.items.push(action.payload);
            } else {
                state.items.map((a, index) => index === curIndex ? a.count = action.payload.count : '')
            }
          },
        deleteFromBasket (state, action: PayloadAction<number>) {
          state.items = state.items.filter(item => item.item.id !== action.payload)
        },
        clearBasket (state) {
            state.items = []
        }
    }
})

export const { addToBasket, deleteFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
