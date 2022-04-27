import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IRegister from '../../../interfaces/IRegister';

const initialState: IRegister = {
    firstName: "",
    lastName: "",
    userName: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    password: ""
};

const registerStore = createSlice({

  name: 'register',

  initialState,

  reducers: {

    setFirstName(state, action: PayloadAction<string>) {
        state.firstName = action.payload
    },

    setLastName(state, action: PayloadAction<string>) {
        state.lastName = action.payload
    },

    setUserNameRegister(state, action: PayloadAction<string>) {
        state.userName = action.payload
    },

    setPasswordRegister(state, action: PayloadAction<string>) {
        state.password = action.payload
    },

    setPhoneNumber(state, action: PayloadAction<string>) {
        state.phoneNumber = action.payload
    },

    setEmailRegister(state, action: PayloadAction<string>) {
        state.email = action.payload
    },

    setBirthDate(state, action: PayloadAction<string>) {
        state.birthDate = action.payload
    }

  }

});

export default registerStore;

export const { 
    setFirstName, 
    setLastName, 
    setUserNameRegister, 
    setBirthDate, 
    setEmailRegister, 
    setPasswordRegister, 
    setPhoneNumber 
} = registerStore.actions;