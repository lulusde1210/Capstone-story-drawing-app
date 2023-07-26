import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from './canvasSlice';
import storyReducer from './storySlice';


const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        story: storyReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store; 