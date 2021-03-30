import React from 'react';
import './BoardForm.css';
import {useState} from "react";


const BoardForm = () => {
	const [title, setTitle] = useState('');
	const [formColor, setFormColor] = useState('');
	const changeStyle = (e) => {
		const chosenColor = e.target.value;
		return(setFormColor(chosenColor));
	}

	const inputChangeHandler = (e) => {
		const titleValue = e.target.value;
		setTitle(titleValue);
	}

	const createDesk = () => {

	}
	return (
		<div className="form">
			<div style={{background: formColor}} className="input">
				<input value={title} onChange={inputChangeHandler} formNoValidate type="text" placeholder="Добавьте заголовок доски"/>
				<div className="closeButton">✕</div>
			</div>
			<form className="colors">
				<input type="radio" id="red" name="color" value="#519839" onChange={changeStyle}/>
				<label id="red" htmlFor="red"/>
				<input type="radio" id="yellow" name="color" value="#0079BF" onChange={changeStyle}/>
				<label id="yellow" htmlFor="yellow"/>
				<input type="radio" id="blue" name="color" value="#B04632" onChange={changeStyle}/>
				<label id="blue" htmlFor="blue"/>
				<input type="radio" id="green" name="color" value="#D29034" onChange={changeStyle}/>
				<label id="green" htmlFor="green"/>
				<input type="radio" id="caput mortuum" name="color" value="#F4D06F" onChange={changeStyle}/>
				<label id="caput_mortuum" htmlFor="caput mortuum"/>
				<input type="radio" id="wheat" name="color" value="#FFF8F0" onChange={changeStyle}/>
				<label id="wheat" htmlFor="wheat"/>
				<input type="radio" id="orange soda" name="color" value="#9DD9D2" onChange={changeStyle}/>
				<label id="orange_soda" htmlFor="orange soda"/>
				<input type="radio" id="skobeloff" name="color" value="#392F5A" onChange={changeStyle}/>
				<label id="skobeloff" htmlFor="skobeloff"/>
				<input type="radio" id="viridian green" name="color" value="#A3E7FC" onChange={changeStyle}/>
				<label id="viridian_green" htmlFor="viridian green"/>
			</form>
			<button disabled={!title.length} className="createDeskButton">Создать доску</button>
		</div>
	);
};

export default BoardForm;
