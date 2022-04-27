import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IRegister from '../../../interfaces/IRegister';

const initialState = {
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

    setFirstName(state, action: PayloadAction<IRegister>) {
        //@ts-ignore
        state.firstName = action.payload
        // return {...action.payload};
    },

    setLastName(state, action: PayloadAction<IRegister>) {
        return {...action.payload};
    },

    setUserNameRegister(state, action: PayloadAction<IRegister>) {
        return {...action.payload};
    },

    setPasswordRegister(state, action: PayloadAction<IRegister>) {
        return {...action.payload};
    },

    setPhoneNumber(state, action: PayloadAction<IRegister>) {
        return {...action.payload};
    },

    setEmailRegister(state, action: PayloadAction<IRegister>) {
        return {...action.payload};
    },

    setBirthDate(state, action: PayloadAction<IRegister>) {
        return {...action.payload};
    }

  },

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