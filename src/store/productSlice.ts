import { producersData } from './../json';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { jsonData } from '../json';
import { CategoryVariant, ItemDataType, SortTypeVariant } from '../types/types';

const toSortList = (list: ItemDataType[], sortType: string) => {
    let curList = list;
    if (sortType === SortTypeVariant.nameA) {
        curList =  [...list].sort((a, b) => a.title > b.title ? 1 : -1)
    } else if (sortType === SortTypeVariant.nameZ) {
        curList =  [...list].sort((a, b) => a.title > b.title ? 1 : -1)
    } else if (sortType === SortTypeVariant.price0) {
        curList = [...list].sort((a, b) => a.price > b.price ? 1 : -1)
    } else if (sortType === SortTypeVariant.price1) {
        curList = [...list].sort((a, b) => a.price > b.price ? -1 : 1)
    }
    return curList;
}

interface productState {
    list: ItemDataType[];
    sortType: string;
    checkedCategory: CategoryVariant;
    producers: string[];
    minPriceFilter: string;
    maxPriceFilter: string;
}

const initialState: productState = {
    list: jsonData,
    sortType: SortTypeVariant.nameA,
    checkedCategory: CategoryVariant.all,
    producers: [],
    minPriceFilter: '0',
    maxPriceFilter: '10000'
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        changeSort (state, action: PayloadAction<string>) {
            state.sortType = action.payload;
            state.list = toSortList(state.list, action.payload)
        },
        updateSortList (state, action: PayloadAction<ItemDataType[]>) {
            state.list = action.payload;
        },
        toCheckedCat (state, action: PayloadAction<CategoryVariant>) {
            state.checkedCategory = action.payload;
            if (action.payload === CategoryVariant.all) {
                state.list = jsonData
            } else {
                state.list = jsonData.filter(item => item.category.some(item => item === action.payload))
            }
        },
        addProducers (state, action: PayloadAction<string>) {
            state.producers.push(action.payload)
        },
    removeProducers (state, action: PayloadAction<string>) {
            state.producers = state.producers.filter(a => a !== action.payload)
        },
        addMinPriceFilter (state, action: PayloadAction<string>) {
            state.minPriceFilter = action.payload
        },
        addMaxPriceFilter (state, action: PayloadAction<string>) {
            state.maxPriceFilter = action.payload
        },
        addFilter (state) {
            state.checkedCategory = CategoryVariant.all
            state.list = jsonData.filter(item => item.price >= +state.minPriceFilter && item.price <= +state.maxPriceFilter)
            if (state.producers.length === 0) {
                state.producers = producersData
            }
            let common = state.list.filter(list => state.producers.some(prod => prod === list.producer))
            state.list = common
        }
    }
})

export const { changeSort, updateSortList, toCheckedCat, addProducers, removeProducers, addMinPriceFilter, addMaxPriceFilter, addFilter } = productSlice.actions;


export default productSlice.reducer;

// var _ = require('lodash');        // или подчеркивание
 
// var first = [ 1, 2, 3 ];
// var second = [ 2, 3, 4, 5 ];
 
// var common = _.intersection(first, second);
// console.log("The common elements are: " + common);