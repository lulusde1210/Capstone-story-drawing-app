import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import stories from '../data/stories';


const initialState = {
    stories: stories,
    storyId: null,
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
        setStoryId: (state, action) => {
            state.storyId = action.payload
        },
        editStory: (state, action) => {
            const idx = state.stories.findIndex(story => story.id === action.payload.storyId)
            const existingStory = state.stories[idx]
            existingStory.imgURL = action.payload.dataURL
            existingStory.imgJSON = action.payload.dataJSON
            existingStory.title = action.payload.title
            existingStory.description = action.payload.description
        }

    }

})


export default storySlice.reducer;
export const { addStory, deleteStory, editStory, setStoryId } = storySlice.actions;