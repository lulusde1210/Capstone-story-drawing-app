import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from './canvasSlice';
import drawingReducer from './drawingSlice';
import authReducer from './authSlice';
import { apiSlice } from "./apiSlice";



const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        drawings: drawingReducer,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,



});

export default store; 