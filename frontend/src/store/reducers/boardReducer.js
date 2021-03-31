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
    case ac.GET_BOARD_SUCCESS:
      return {...state, loading: false, boards: action.payload};
    case ac.GET_BOARD_ERROR:
      return {...state, loading: false, error: action.payload};
    case ac.CREATE_BOARD_START:
      return {...state, loading: true};
    case ac.CREATE_BOARD_SUCCESS:
      return {...state, loading: false, boards: [...state.boards, action.payload]};
    case ac.CREATE_BOARD_ERROR:
      return {...state, loading: false, error: action.payload};
    case ac.REMOVE_BOARD_START:
      return {...state, loading: true};
    case ac.REMOVE_BOARD_ERROR:
      return {...state, error: action.payload, loading: false};
    case ac.ON_DRAG_END:
      const result = [...state.boards];
      const {source, destination} = action.payload;
      const [removed] = result.splice(source.index, 1);
      result.splice(destination.index, 0, removed);
      return {...state, boards: result};
    default:
      return state;
  }
}

export default boardReducer;
