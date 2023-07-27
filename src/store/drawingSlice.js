import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import drawingData from "../data/drawingData";


const initialState = {
    drawings: drawingData,
    drawingId: null,
};


const drawingSlice = createSlice({
    name: 'drawings',
    initialState,
    reducers: {
        addDrawing: (state, action) => {
            const newDrawing = {
                id: Math.random(),
                title: action.payload.title,
                description: action.payload.description,
                imgURL: action.payload.dataURL,
                imgJSON: action.payload.dataJSON
            };

            state.drawings.push(newDrawing)
        },
        deleteDrawing: (state, action) => {
            const idx = state.drawings.findIndex(drawing => drawing.id === action.payload)
            state.drawings.splice(idx, 1)
        },
        setDrawingId: (state, action) => {
            state.drawingId = action.payload
        },
        editDrawing: (state, action) => {
            const idx = state.drawings.findIndex(drawing => drawing.id === action.payload.drawingId)
            const existingDrawing = state.drawings[idx]
            existingDrawing.imgURL = action.payload.dataURL
            existingDrawing.imgJSON = action.payload.dataJSON
            existingDrawing.title = action.payload.title
            existingDrawing.description = action.payload.description
        },

    }
});


export default drawingSlice.reducer;
export const { addDrawing, deleteDrawing, editDrawing, setDrawingId } = drawingSlice.actions;