import ac from './actionTypes';


export const registerUserStart = () => ({type: ac.REGISTER_USER_START});
export const registerUserSuccess = user => ({type: ac.REGISTER_USER_SUCCESS, payload: user});
export const registerUserError = (e) => ({type: ac.REGISTER_USER_ERROR, payload: e});

export const loginUserStart = () => ({type: ac.LOGIN_USER_START});
export const loginUserSuccess = user => ({type: ac.LOGIN_USER_SUCCESS, payload: user});
export const loginUserError = (e) => ({type: ac.LOGIN_USER_ERROR, payload: e});

export const logout = () => ({type: ac.LOG_OUT});

export const resetError = () => ({type: ac.RESET_ERROR});

//------------------------------------------------------------------------//

export const getBoardStart = () => ({type: ac.GET_BOARD_START});
export const getBoardSuccess = boards => ({type: ac.GET_BOARD_SUCCESS, payload: boards});
export const getBoardError = (e) => ({type: ac.GET_BOARD_ERROR, payload: e});

export const createBoardStart = () => ({type: ac.CREATE_BOARD_START});
export const createBoardSuccess = board => ({type: ac.CREATE_BOARD_SUCCESS, payload: board});
export const createBoardError = (e) => ({type: ac.CREATE_BOARD_ERROR, payload: e});

export const removeBoardStart = () => ({type: ac.REMOVE_BOARD_START});
export const removeBoardError = (e) => ({type: ac.REMOVE_BOARD_ERROR, payload: e});

export const createBoardSync = () => ({type: ac.CREATE_BOARD_SYNC});
export const removeBoardSync = () => ({type: ac.REMOVE_BOARD_SYNC});

//------------------------------------------------------------------------//

export const getCardStart = () => ({type: ac.GET_CARD_START});
export const getCardSuccess = cards => ({type: ac.GET_CARD_SUCCESS, payload: cards});
export const getCardError = (e) => ({type: ac.GET_CARD_ERROR});

export const createCardStart = () => ({type: ac.CREATE_CARD_START});
export const createCardSuccess = user => ({type: ac.CREATE_CARD_SUCCESS});
export const createCardError = (e) => ({type: ac.CREATE_CARD_ERROR});

export const removeCardStart = () => ({type: ac.REMOVE_CARD_START});
export const removeCardSuccess = user => ({type: ac.REMOVE_CARD_SUCCESS});
export const removeCardError = (e) => ({type: ac.REMOVE_CARD_ERROR});

export const createCardSync = () => ({type: ac.CREATE_CARD_SYNC});
export const removeCardSync = () => ({type: ac.REMOVE_CARD_SYNC});

//------------------------------------------------------------------------//

export const createTaskStart = () => ({type: ac.CREATE_TASK_START});
export const createTaskSuccess = user => ({type: ac.CREATE_TASK_SUCCESS});
export const createTaskError = (e) => ({type: ac.CREATE_TASK_ERROR});

export const removeTaskStart = () => ({type: ac.REMOVE_TASK_START});
export const removeTaskSuccess = user => ({type: ac.REMOVE_TASK_SUCCESS});
export const removeTaskError = (e) => ({type: ac.REMOVE_TASK_ERROR});

export const createTaskSync = () => ({type: ac.CREATE_TASK_SYNC});
export const removeTaskSync = () => ({type: ac.REMOVE_TASK_SYNC});

export const dragEndBoard = (result) => ({type: ac.ON_DRAG_END, payload: result});



