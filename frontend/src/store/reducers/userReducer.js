import ac from '../actionTypes';

export const initialState = {
  user: null,
  loading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ac.REGISTER_USER_START:
      return {...state, loading: true};
    case ac.REGISTER_USER_SUCCESS:
      return {...state, loading: false, user: action.payload};
    case ac.REGISTER_USER_ERROR:
      return {...state, loading: false, error: action.payload};
    case ac.LOGIN_USER_START:
      return {...state, loading: true};
    case ac.LOGIN_USER_SUCCESS:
      return {...state, loading: false, user: action.payload}
    case ac.LOGIN_USER_ERROR:
      return {...state, loading: false, error: action.payload};
    case ac.RESET_ERROR:
      return {...state, error: null, loading: false};
    case ac.LOG_OUT:
      return {...state, user: null}
    default:
      return state;
  }
};

export default userReducer;
