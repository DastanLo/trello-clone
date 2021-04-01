import React from 'react';
import './Task.css'

const Task = ({text, remove, draggableProps, dragHandleProps, dragref}) => {
	return (
		<div className="task" ref={dragref} {...dragHandleProps} {...draggableProps}>
			<span className="taskText">
				{text}
			</span>
			<div className="trashBin" onClick={remove}
					 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/trashBin.png)`}}/>
		</div>

	);
};

export default Task;
