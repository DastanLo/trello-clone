import {
  createBoardError,
  createBoardStart,
  createBoardSuccess,
  getBoardError,
  getBoardStart,
  getBoardSuccess, removeBoardError, removeBoardStart, removeBoardSuccess
} from '../actions';
import axiosInstance from '../../config/axiosInstance';

export const getBoards = (id) => async dispatch => {
  try {
    dispatch(getBoardStart());
    const response = await axiosInstance.get('/boards?user=' + id);
    dispatch(getBoardSuccess(response.data));
  } catch (e) {
    dispatch(getBoardError(e.response.data));
  }
}

export const createBoard = (board) => async dispatch => {
  try {
    dispatch(createBoardStart());
    const response = await axiosInstance.post('/boards', board);
    console.log(response.data);
    dispatch(createBoardSuccess(response.data));
  } catch (e) {
    console.log(e.response.data);
    dispatch(createBoardError(e.response.data));
  }
}

export const deleteBoard = (id) => async dispatch => {
  try {
    dispatch(removeBoardStart());
    const response = await axiosInstance.post('/boards', id);
    console.log(response.data);
    dispatch(removeBoardSuccess(response.data));
  } catch (e) {
    console.log(e.response.data);
    dispatch(removeBoardError(e.response.data));
  }
}
