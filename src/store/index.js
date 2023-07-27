import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from './canvasSlice';
import drawingSlice from "./drawingSlice";


const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        drawings: drawingSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store; 