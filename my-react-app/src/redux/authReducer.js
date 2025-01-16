import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: null,
	email: null,
	name: null,
	isAuth: false,
};

// const initialState = {
//     id: 123,
//     email: 'name@mail.ru',
//     name: 'Ефросинья Аксенова',
//     isAuth: true,
// };

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const {id, email, name, isAuth} = action.payload;

            state.id = id
            state.email = email
            state.name = name
            state.isAuth = isAuth
        },
        exitProfile: (state) => {
            state.id = null
            state.email = null
            state.name = null
            state.isAuth = false
        }
    }
})

export const {setUserData, exitProfile} = authReducer.actions;
export default authReducer.reducer;
