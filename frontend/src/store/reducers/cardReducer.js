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
			return {...state, loading: false, cards: [...state.cards, action.payload]};
		case ac.CREATE_CARD_ERROR:
			return {...state, loading: false, error: action.payload};
		case ac.CREATE_TASK_START:
			return {...state, loading: true}
		case ac.CREATE_TASK_SUCCESS:
			return {...state, loading: false};
		case ac.CREATE_TASK_ERROR:
			return {...state, loading: false};
		case ac.REMOVE_TASK_START:
			return {...state, loading: true};
		case ac.REMOVE_TASK_SUCCESS:
			return {...state, loading: false}
		case ac.REMOVE_TASK_ERROR:
			return {...state, loading: false};
		case ac.ON_DRAG_END_CARD:
			const columns = JSON.parse(JSON.stringify([...state.cards]));
			const {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexEnd,
				droppableIndexStart,
				type
			} = action.payload;
			if (type === "list") {
				const list = columns.splice(droppableIndexStart, 1);
				columns.splice(droppableIndexEnd, 0, ...list);
				return {...state, cards: columns};
			}
			if (droppableIdStart === droppableIdEnd) {
				const list = columns.find(list => droppableIdStart === list._id);
				const card = list.tasks.splice(droppableIndexStart, 1);
				list.tasks.splice(droppableIndexEnd, 0, ...card);
			}
			if (droppableIdStart !== droppableIdEnd) {
				const listStart = columns.find(list => droppableIdStart === list._id);
				const card = listStart.tasks.splice(droppableIndexStart, 1);
				const listEnd = columns.find(list => droppableIdEnd === list._id);
				listEnd.tasks.splice(droppableIndexEnd, 0, ...card);
			}
			return {...state, cards: columns};
		default:
			return state;
	}
}

export default cardReducer;
