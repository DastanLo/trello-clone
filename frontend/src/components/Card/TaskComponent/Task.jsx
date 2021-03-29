import React from 'react';
import './Task.css'

const Task = ({text}) => {
	return (
		<div className="task">
			<span className="taskText">
				{text}
			</span>
			<div className="trashBin" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/trashBin.png)`}}/>
		</div>

	);
};

export default Task;