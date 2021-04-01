import {
	createCardError,
	createCardStart,
	createCardSuccess,
	createTaskError,
	createTaskStart,
	getCardError,
	getCardStart,
	getCardSuccess,
	removeCardError,
	removeCardStart
} from "../actions";
import axiosInstance from "../../config/axiosInstance";

export const getCard = (id) => async dispatch => {
	try{
		dispatch(getCardStart());
		const response = await axiosInstance.get('/cards?id=' + id);
		dispatch(getCardSuccess(response.data));
	}catch(e){
		dispatch(getCardError(e));
	}
}

export const createCard = (card) => async dispatch => {
	try {
		dispatch(createCardStart());
		const response = await axiosInstance.post('/cards', card);
		dispatch(createCardSuccess(response.data));
	}catch(e){
		console.log(e);
		dispatch(createCardError(e));
	}
}

export const deleteCard = (cardId, boardId) => async dispatch => {
	try {
		dispatch(removeCardStart());
		await axiosInstance.delete('/cards/' + cardId);
		dispatch(getCard(boardId));
	}catch(e){
		dispatch(removeCardError(e));
	}
}

export const createTask = (task, id) => async dispatch => {
	try {
		dispatch(createTaskStart());
		await axiosInstance.post('/cards/task', task);
		dispatch(getCard(id))
	}catch(e){
		dispatch(createTaskError(e));
	}
}

export const deleteTask = (task, id) => async dispatch => {
	try {
		dispatch(removeCardStart());
		await axiosInstance.post('/cards/task/remove', task);
		dispatch(getCard(id))
	}catch(e){
		dispatch(removeCardError(e));
	}
}
