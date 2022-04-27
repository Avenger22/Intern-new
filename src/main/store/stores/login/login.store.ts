import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ILoginRequest from '../../../interfaces/ILoginRequest';
import ILogRequest from '../../../interfaces/ILoginRequest';

const loginStore = createSlice({

  name: 'login',

  initialState: null,

  reducers: {

    setUserNameLogin(_state, action: PayloadAction<ILoginRequest>) {
        return {...action.payload};
    },

    setPasswordLogin(_state, action: PayloadAction<ILoginRequest>) {
        return {...action.payload};
    },

  },

});

export default loginStore;

export const { 
    setUserNameLogin, 
    setPasswordLogin
} = loginStore.actions;