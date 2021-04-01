import React, {useState} from 'react';
import './Card.css'
import Task from "../TaskComponent/Task";
import AddTaskButton from "../AddButton/AddTaskButton.jsx";
import Textarea from "../Textarea/Textarea";

const Card = ({title}) => {
	const [isClicked, setIsClicked] = useState(false);
	const tasks = ['1dddskjdskajlkadjlakdjsalkdjsalkdandlskada', '2', '3', '4', '5']
	const [taskTitle, setTaskTitle] = useState('');

	const inputChangeHandler = (e) => {
		setTaskTitle(e.target.value)
	};

	const openTextarea = () => {
		setIsClicked(true)
	};
	const closeTextarea = () => {
		setIsClicked(false)
	}
	return (
			<div className="card">
				<div className="title">
					<h1>{title}</h1>
					<div className="deleteCard">✕</div>
				</div>
				{
					tasks.map((task) => {
						return <Task text={task}/>
					})
				}
				{isClicked ? <Textarea onChange={inputChangeHandler} close={closeTextarea}/> : <AddTaskButton click={openTextarea} text="Добавить карточку"/>}
			</div>
	);
};

export default Card;