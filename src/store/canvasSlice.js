import { createSlice } from "@reduxjs/toolkit";
import { fabric } from "fabric";


const initialState = {
    // canvas: {},
    canvasURL: '',
    canvasJSON: {},
}

const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        saveCanvasURL: (state, action) => {
            state.canvasURL = action.payload
        },
        saveCanvasJSON: (state, action) => {
            state.canvasJSON = action.payload
        },
    }
});


export default canvasSlice.reducer;
export const
    {
        initCanvas,
        enableDrawing,
        disableDrawing,
        addObj,
        saveCanvasURL,
        saveCanvasJSON,
        deleteSelectedObjects,
        clearCanvas,

    }
        = canvasSlice.actions;