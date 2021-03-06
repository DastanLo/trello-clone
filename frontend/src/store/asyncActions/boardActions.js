import {
  createBoardError,
  createBoardStart,
  createBoardSuccess,
  getBoardError,
  getBoardStart,
  getBoardSuccess,
  removeBoardError,
  removeBoardStart
} from '../actions';
import axiosInstance from '../../config/axiosInstance';

export const getBoards = (id) => async dispatch => {
  try {
    dispatch(getBoardStart());
    const response = await axiosInstance.get('/boards?user=' + id);
    dispatch(getBoardSuccess(response.data));
  } catch (e) {
    dispatch(getBoardError(e));
  }
}

export const createBoard = (board) => async dispatch => {
  try {
    dispatch(createBoardStart());
    const response = await axiosInstance.post('/boards', board);
    dispatch(createBoardSuccess(response.data));
  } catch (e) {
    dispatch(createBoardError(e));
  }
}

export const deleteBoard = (id, userId) => async dispatch => {
  try {
    dispatch(removeBoardStart());
    await axiosInstance.delete('/boards/' + id);
    dispatch(getBoards(userId));
  } catch (e) {
    console.log(e);
    dispatch(removeBoardError(e));
  }
}
