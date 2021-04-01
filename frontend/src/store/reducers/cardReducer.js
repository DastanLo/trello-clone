import ac from '../actionTypes';

const initialState = {
	cards: [],
	loading: false,
	error: null,
};

const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case ac.GET_CARD_START:
			return {...state, loading: true};
		case ac.GET_CARD_SUCCESS:
			return {...state, loading: false, cards: action.payload};
		case ac.CREATE_BOARD_ERROR:
			return {...state, loading: false, error: action.payload};
		case ac.CREATE_CARD_START:
			return {...state, loading: true};
		case ac.CREATE_CARD_SUCCESS:
			return {...state, loading: false, cards: action.payload};
		case ac.CREATE_CARD_ERROR:
			return {...state, loading: false, error: action.payload};

		default:
			return state;
	}
}

export default cardReducer;