import React from 'react';
import './BoardForm.css';
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {createBoard} from '../../store/asyncActions/boardActions';


const BoardForm = ({close}) => {
	const [title, setTitle] = useState('');
	const [formColor, setFormColor] = useState('color-1');
	const user = useSelector((state => state.user.user));
	const dispatch = useDispatch();
	const changeStyle = (e) => {
		const chosenColor = e.target.value;
		return(setFormColor(chosenColor));
	}

	const inputChangeHandler = (e) => {
		const titleValue = e.target.value;
		setTitle(titleValue);
	}

	const addBoard = () => {
		const board = {
			title,
			background: formColor,
			user: user._id
		}
		dispatch(createBoard(board));
		close();
	}
	return (
		<div className="form">
			<div className={['input', formColor].join(' ')}>
				<input value={title} onChange={inputChangeHandler} formNoValidate type="text" placeholder="Добавьте заголовок доски"/>
				<div className="closeButton" onClick={close}>✕</div>
			</div>
			<form className="colors">
				<input type="radio" id="red" name="color" value="color-1" onChange={changeStyle}/>
				<label className="color-1" htmlFor="red"/>
				<input type="radio" id="yellow" name="color" value="color-2" onChange={changeStyle}/>
				<label className="color-2" htmlFor="yellow"/>
				<input type="radio" id="blue" name="color" value="color-3" onChange={changeStyle}/>
				<label className="color-3" htmlFor="blue"/>
				<input type="radio" id="green" name="color" value="color-4" onChange={changeStyle}/>
				<label className="color-4" htmlFor="green"/>
				<input type="radio" id="caput mortuum" name="color" value="color-5" onChange={changeStyle}/>
				<label className="color-5" htmlFor="caput mortuum"/>
				<input type="radio" id="wheat" name="color" value="color-6" onChange={changeStyle}/>
				<label className="color-6" htmlFor="wheat"/>
				<input type="radio" id="orange soda" name="color" value="color-7" onChange={changeStyle}/>
				<label className="color-7" htmlFor="orange soda"/>
				<input type="radio" id="skobeloff" name="color" value="color-8" onChange={changeStyle}/>
				<label className="color-8" htmlFor="skobeloff"/>
				<input type="radio" id="viridian green" name="color" value="color-9" onChange={changeStyle}/>
				<label className="color-9" htmlFor="viridian green"/>
			</form>
			<button onClick={addBoard} disabled={!title.length} className="createDeskButton">Создать доску</button>
		</div>
	);
};

export default BoardForm;
