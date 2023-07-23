import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from './canvasSlice';


const store = configureStore({
    reducer: {
        canvas: canvasReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store; 