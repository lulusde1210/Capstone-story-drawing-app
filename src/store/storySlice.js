import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import stories from '../data/stories';


const initialState = {
    stories: stories
};


const storySlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        addStory: (state, action) => {
            const newStory = {
                id: Math.random(),
                title: action.payload.title,
                description: action.payload.description,
                imgURL: action.payload.dataURL,
                imgJSON: action.payload.dataJSON
            };

            state.stories.push(newStory)
        },
        deleteStory: (state, action) => {
            const idx = state.stories.findIndex(story => story.id === action.payload)
            state.stories.splice(idx, 1)
        },
        // editStory: (state, action) => {
        //     console.log('payload id', action.payload.id)
        //     const existingStoryIdx = state.stories.findIndex(story => story.id === action.payload.id)
        //     console.log(existingStoryIdx)
        //     const existingStory = state.stories[existingStoryIdx]; //return true or null(not existing)
        //     console.log(existingStory)
        //     action.payload.canvas.loadFromJSON(existingStory.imgJSON, action.payload.canvas.renderAll.bind(action.payload.canvas))
        // }
    }

})


export default storySlice.reducer;
export const { addStory, deleteStory } = storySlice.actions;