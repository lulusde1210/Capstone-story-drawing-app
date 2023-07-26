import { createSlice } from "@reduxjs/toolkit";
import { fabric } from "fabric";


const initialState = {
    canvas: {},
    canvasURL: '',
    canvasJSON: {},
}

const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
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
        saveCanvasURL: (state, action) => {
            state.canvasURL = action.payload
        },
        saveCanvasJSON: (state, action) => {
            state.canvasJSON = action.payload
        },
        deleteSelectedObjects: (state) => {
            const activeObjs = state.canvas.getActiveObjects();
            for (const object of activeObjs) {
                state.canvas.remove(object)
            }
            state.canvas.renderAll()
        },
        clearCanvas: (state) => {
            state.canvas.getObjects().forEach((obj) => {
                state.canvas.remove(obj);
            })
            state.canvas.renderAll()
        }
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