import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    canvasURL: '',
    canvasJSON: '',
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
export const { saveCanvasURL, saveCanvasJSON } = canvasSlice.actions;