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
    console.log(response.data[1]._id)
    dispatch(getBoardSuccess(response.data));
  } catch (e) {
    dispatch(getBoardError(e.response.data));
  }
}

export const createBoard = (board) => async dispatch => {
  try {
    dispatch(createBoardStart());
    const response = await axiosInstance.post('/boards', board);
    dispatch(createBoardSuccess(response.data));
  } catch (e) {
    dispatch(createBoardError(e.response.data));
  }
}

export const deleteBoard = (id, userId) => async dispatch => {
  try {
    dispatch(removeBoardStart());
    await axiosInstance.delete('/boards/' + id);
    dispatch(getBoards(userId));
  } catch (e) {
    dispatch(removeBoardError(e.response.data));
  }
}
