import React, {useState} from 'react';
import './Card.css'
import Task from "../TaskComponent/Task";
import AddTaskButton from "../AddButton/AddTaskButton.jsx";
import Textarea from "../Textarea/Textarea";

const Card = () => {
	const [isClicked, setIsClicked] = useState(false);
	const tasks = ['1dddskjdskajlkadjlakdjsalkdjsalkdandlskada', '2', '3', '4', '5']

	const openTextarea = () => {
		setIsClicked(true)
	};
	const closeTextarea = () => {
		setIsClicked(false)
	}
	return (
			<div className="card">
				<div className="title">
					<h1>Title</h1>
					<div className="deleteCard">✕</div>
				</div>
				{
					tasks.map((task) => {
						return <Task text={task}/>
					})
				}
				{isClicked ? <Textarea click={closeTextarea}/> : <AddTaskButton click={openTextarea} text="Добавить еще одну карточку"/>}
			</div>
	);
};

export default Card;