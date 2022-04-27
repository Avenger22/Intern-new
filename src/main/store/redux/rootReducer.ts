import { combineReducers } from '@reduxjs/toolkit';
import userStore from '../stores/user/user.store';
import navigationStore from '../stores/navigation/navigation.store';
import registrationStore from "../stores/register/register.store"
import loginStore from '../stores/login/login.store';


const rootReducer = combineReducers({
  user: userStore.reducer,
  navigation: navigationStore.reducer,
  registration: registrationStore.reducer,
  login: loginStore.reducer
});

export default rootReducer;