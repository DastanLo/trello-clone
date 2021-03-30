import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer, {initialState} from './reducers/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadFromLocalStorage, localStorageMiddleware} from '../config/localStorage';
import boardReducer from './reducers/boardReducer';


const rootReducer = combineReducers({
  user: userReducer,
  board: boardReducer,
});

const middlewares = [thunk, localStorageMiddleware]

const persistedState = loadFromLocalStorage();
const store = createStore(rootReducer, {
  user: {
    ...initialState,
    user: persistedState?.user.user || null,
  },
}, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
