import React from 'react';
import './Card.css'
import Task from "../TaskComponent/Task";
import AddTaskButton from "../AddButton/AddTaskButton.jsx";

const Card = () => {
	const tasks = ['1dddskjdskajlkadjlakdjsalkdjsalkdandlskada', '2', '3', '4', '5']
	return (
		<div style={{display: "flex"}}>
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
				<AddTaskButton text="Добавить еще одну карточку"/>
			</div>
			<AddTaskButton style={{margin: "20px"}} text="Добавить еще одну колонку"/>
		</div>
	);
};

export default Card;