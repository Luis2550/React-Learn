import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-aunthenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessages: null,
    },
    reducers: {
        login: (state, {payload}) => {

            state.status = 'aunthenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
        },
        logout: (state, {payload}) => {

        state.status = 'not-aunthenticated';
        state.uid = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessages = payload.errorMessage;

        },
        checkingCredentials: (state) => {
            state.status = "checking"
        },
    }
});



export const { login, logout, checkingCredentials } = authSlice.actions;