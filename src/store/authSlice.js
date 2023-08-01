import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggin: false
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggin = true
        },
        logout: (state, action) => {
            state.isLoggin = false
        },
    }
});


export default authSlice.reducer;
export const { login, logout } = authSlice.actions;


