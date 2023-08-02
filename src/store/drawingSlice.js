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
        }
    }
});


export default drawingSlice.reducer;
export const { setDrawing } = drawingSlice.actions;