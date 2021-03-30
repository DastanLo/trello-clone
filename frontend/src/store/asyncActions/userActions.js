import axiosInstance from '../../config/axiosInstance';
import {
  loginUserError,
  loginUserStart,
  loginUserSuccess,
  registerUserError,
  registerUserStart,
  registerUserSuccess
} from '../actions';

export const registerUser = (userData, history) => async dispatch => {
  try {
    dispatch(registerUserStart());
    const response = await axiosInstance.post('/users/create', userData);
    dispatch(registerUserSuccess(response.data));
    history.push('/');
  } catch (e) {
    dispatch(registerUserError(e.response.data.message));
  }
}

export const loginUser = (userData, history) => async dispatch => {
  try {
    dispatch(loginUserStart());
    const response = await axiosInstance.post('/users/login', userData);
    dispatch(loginUserSuccess(response.data));
    history.push('/');
  } catch (e) {
    dispatch(loginUserError(e.response.data.message));
  }
}
