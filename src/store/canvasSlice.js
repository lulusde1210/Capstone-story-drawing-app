import { createSlice } from "@reduxjs/toolkit";
import { fabric } from "fabric";

const canvasSlice = createSlice({
    name: 'canvas',
    initialState: {},
    reducers: {
        initCanvas: (state) => {
            const canvas = new fabric.Canvas('canvas', {
                height: 650,
                width: 1000,
                backgroundColor: '#FAF3F0',
            });
            state.canvas = canvas;
        },
        enableDrawing: (state, action) => {
            console.log('enable drawing...')
            state.canvas.isDrawingMode = true
            if (action.payload.style === 'spray') {
                state.canvas.freeDrawingBrush = new fabric.SprayBrush(state.canvas)
            } else {
                state.canvas.freeDrawingBrush = new fabric.PencilBrush(state.canvas)
            }
            state.canvas.freeDrawingBrush.color = action.payload.color
            state.canvas.freeDrawingBrush.width = action.payload.size
        },
        disableDrawing: (state) => {
            state.canvas.isDrawingMode = false
        },
        addObj: (state, action) => {
            state.canvas.add(action.payload);
            state.canvas.renderAll();
        },
    }
});


export default canvasSlice.reducer;
export const
    { initCanvas, enableDrawing, disableDrawing, addObj } = canvasSlice.actions;