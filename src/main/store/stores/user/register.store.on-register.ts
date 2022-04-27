import AuthManager from '../../../utils/authManager';
import { AppThunk } from '../../redux/appThunk';
import { navigateTo } from '../navigation/navigation.store';
import { setUser } from './user.store';
import IUser from '../../../interfaces/IUser';

const onRegister = (payload: IUser): AppThunk => async (dispatch) => {

  try {
    
    const response = await AuthManager.register({ ...payload });

    //@ts-ignore
    if (response.user && response.token) {
      //@ts-ignore
      dispatch(setUser(response.user));
      dispatch(navigateTo('/'));
    }

  } 
  
  catch (err:any) {
    Error( err.message);
  }

};

export default onRegister;