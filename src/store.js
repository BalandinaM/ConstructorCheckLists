import { configureStore } from '@reduxjs/toolkit';
import  authReducer from './redux/authReducer';
import  checkListReducer from './redux/checkListReducer';


export const store = configureStore({
    reducer: {
			checklist: checkListReducer,
			auth: authReducer,
    },
})
