import ac from '../actionTypes';

const initialState = {
  boards: [],
  loading: false,
  error: null,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ac.GET_BOARD_START:
      return {...state, loading: true};
    case ac.CREATE_BOARD_SUCCESS:
      return {...state, loading: false, boards: action.payload};
    case ac.GET_BOARD_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

export default boardReducer;
