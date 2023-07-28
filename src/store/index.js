import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from './canvasSlice';
import drawingReducer from "./drawingSlice";
import authReducer from "./authSlice";


const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        drawings: drawingReducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware(),
    devTools: true
});

export default store; 