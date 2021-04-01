import {
	getCardStart,
	getCardSuccess,
	getCardError, createCardStart, createCardSuccess
} from "../actions";
import axiosInstance from "../../config/axiosInstance";

export const getCard = (id) => async dispatch => {
	try{
		dispatch(getCardStart());
		const response = await axiosInstance.get('/cards?id=' + id);
		console.log(response.data);
		dispatch(getCardSuccess(response.data));
	}catch(e){
		console.log(e)
	}
}

export const createCard = (card) => async dispatch => {
	try {
		dispatch(createCardStart());
		const response = await axiosInstance.post('/cards', card);
		dispatch(createCardSuccess(response.data));
	}catch(e){
		console.log(e)
	}
}