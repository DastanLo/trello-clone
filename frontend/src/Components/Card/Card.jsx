import React from 'react';
import './Card.css'
import Task from "./Task";

const Card = () => {
	const tasks = ['1', '2', '3', '4', '5']
	return (
		<div className="card">
			<h1>Title</h1>
			<ul>
				{
					tasks.map((task) => {
						return <Task text={task}/>
					})
				}
			</ul>
		</div>
	);
};

export default Card;