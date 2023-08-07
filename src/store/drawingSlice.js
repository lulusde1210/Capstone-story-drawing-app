import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawing: null,
};


const drawingSlice = createSlice({
    name: 'drawings',
    initialState,
    reducers: {
        setDrawing: (state, action) => {
            state.drawing = action.payload
        },
        resetDrawing: (state) => {
            state.drawing = null
        }
    }
});


export default drawingSlice.reducer;
export const { setDrawing, resetDrawing } = drawingSlice.actions;