import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainSlice from './mainSlice';
import productSlice from './productSlice';
import basketSlice from './basketSlice';
// import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
    mainSlice,
    productSlice,
    basketSlice,
    // [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                // .concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']